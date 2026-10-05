import { createServerFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/react-start/server";
import { z } from "zod";

const PAYSTACK_API_URL = "https://api.paystack.co";
const MINIMUM_DONATION_SUBUNIT = 100;
const MAXIMUM_DONATION_SUBUNIT = 100_000_000;

const donationInputSchema = z.object({
  email: z.string().trim().email().max(254),
  firstName: z.string().trim().max(80).optional(),
  lastName: z.string().trim().max(80).optional(),
  amount: z.number().finite().positive().max(1_000_000),
  frequency: z.enum(["one-time", "monthly"]),
});

const verifyInputSchema = z.object({
  reference: z
    .string()
    .trim()
    .min(1)
    .max(120)
    .regex(/^[A-Za-z0-9.=-]+$/),
});

type PaystackPayload = {
  status?: unknown;
  message?: unknown;
  data?: unknown;
};

type PaystackInitializeData = {
  authorization_url: string;
  access_code: string;
  reference: string;
};

type PaystackVerificationData = {
  status: string;
  reference: string;
  amount: number;
  currency: string;
  paid_at?: string | null;
  customer?: { email?: string } | null;
};

function getSecretKey() {
  const secretKey = process.env.PAYSTACK_SECRET_KEY?.trim();
  if (!secretKey) {
    throw new Error("Donations are not configured yet. Please try again later.");
  }
  return secretKey;
}

function getCurrency() {
  const currency = (process.env.PAYSTACK_CURRENCY ?? "USD").trim().toUpperCase();
  return /^[A-Z]{3}$/.test(currency) ? currency : "USD";
}

function getMonthlyPlans() {
  const rawPlans = process.env.PAYSTACK_MONTHLY_PLANS?.trim();
  if (!rawPlans) return new Map<number, string>();

  try {
    const parsed = JSON.parse(rawPlans) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return new Map<number, string>();
    }

    const plans = new Map<number, string>();
    for (const [amount, plan] of Object.entries(parsed)) {
      const amountSubunit = Number(amount);
      if (
        Number.isSafeInteger(amountSubunit) &&
        amountSubunit >= MINIMUM_DONATION_SUBUNIT &&
        amountSubunit <= MAXIMUM_DONATION_SUBUNIT &&
        typeof plan === "string" &&
        /^PLN_[A-Za-z0-9]+$/.test(plan)
      ) {
        plans.set(amountSubunit, plan);
      }
    }
    return plans;
  } catch {
    console.error("PAYSTACK_MONTHLY_PLANS must be a JSON object of subunit amounts to plan codes.");
    return new Map<number, string>();
  }
}

function toSubunit(amount: number) {
  const amountSubunit = Math.round(amount * 100);
  if (
    !Number.isSafeInteger(amountSubunit) ||
    Math.abs(amount * 100 - amountSubunit) > Number.EPSILON * 100 ||
    amountSubunit < MINIMUM_DONATION_SUBUNIT ||
    amountSubunit > MAXIMUM_DONATION_SUBUNIT
  ) {
    throw new Error(
      "Enter a donation amount between 1 and 1,000,000 with no more than two decimals.",
    );
  }
  return amountSubunit;
}

function createReference(amountSubunit: number) {
  const nonce = crypto.randomUUID().replaceAll("-", "").slice(0, 16);
  return `scfi-${Date.now().toString(36)}-${amountSubunit}-${nonce}`;
}

function getExpectedAmount(reference: string) {
  const match = /^scfi-[a-z0-9]+-(\d+)-[a-z0-9]+$/i.exec(reference);
  if (!match) return null;
  const amount = Number(match[1]);
  return Number.isSafeInteger(amount) ? amount : null;
}

function getCallbackUrl() {
  const requestUrl = getRequestUrl({ xForwardedHost: true });
  const configuredSiteUrl = process.env.SITE_URL?.trim();
  const origin = configuredSiteUrl ? new URL(configuredSiteUrl).origin : requestUrl.origin;
  const callbackUrl = new URL("/donate", origin);
  callbackUrl.searchParams.set("payment", "callback");
  return callbackUrl.toString();
}

function getPaystackMessage(payload: PaystackPayload | null) {
  return typeof payload?.message === "string" ? payload.message : null;
}

async function readPayload(response: Response) {
  try {
    return (await response.json()) as PaystackPayload;
  } catch {
    return null;
  }
}

function isInitializeData(value: unknown): value is PaystackInitializeData {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return (
    typeof data.authorization_url === "string" &&
    data.authorization_url.startsWith("https://checkout.paystack.com/") &&
    typeof data.access_code === "string" &&
    typeof data.reference === "string"
  );
}

function isVerificationData(value: unknown): value is PaystackVerificationData {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return (
    typeof data.status === "string" &&
    typeof data.reference === "string" &&
    typeof data.amount === "number" &&
    typeof data.currency === "string"
  );
}

export const getDonationConfig = createServerFn({ method: "GET" }).handler(() => {
  const monthlyAmounts = [...getMonthlyPlans().keys()]
    .sort((a, b) => a - b)
    .map((amount) => amount / 100);

  return {
    configured: Boolean(process.env.PAYSTACK_SECRET_KEY?.trim()),
    currency: getCurrency(),
    monthlyAmounts,
  };
});

export const initializeDonation = createServerFn({ method: "POST" })
  .validator(donationInputSchema)
  .handler(async ({ data }) => {
    const secretKey = getSecretKey();
    const currency = getCurrency();
    const amountSubunit = toSubunit(data.amount);
    const reference = createReference(amountSubunit);
    const monthlyPlan =
      data.frequency === "monthly" ? getMonthlyPlans().get(amountSubunit) : undefined;

    if (data.frequency === "monthly" && !monthlyPlan) {
      throw new Error("Monthly giving is not available for that amount yet.");
    }

    const response = await fetch(`${PAYSTACK_API_URL}/transaction/initialize`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        amount: amountSubunit,
        currency,
        reference,
        callback_url: getCallbackUrl(),
        ...(monthlyPlan ? { plan: monthlyPlan } : {}),
        metadata: {
          donation_frequency: data.frequency,
          organization: "Shavonne Care Foundation International",
          donor: {
            first_name: data.firstName || undefined,
            last_name: data.lastName || undefined,
          },
        },
      }),
      signal: AbortSignal.timeout(15_000),
    });

    const payload = await readPayload(response);
    if (!response.ok || payload?.status !== true || !isInitializeData(payload.data)) {
      console.error("Paystack initialization failed", response.status, payload);
      throw new Error(
        getPaystackMessage(payload) ?? "We could not start the donation. Please try again.",
      );
    }

    if (payload.data.reference !== reference) {
      console.error("Paystack returned an unexpected transaction reference.");
      throw new Error("We could not start the donation. Please try again.");
    }

    return {
      authorizationUrl: payload.data.authorization_url,
      reference,
    };
  });

export const verifyDonation = createServerFn({ method: "POST" })
  .validator(verifyInputSchema)
  .handler(async ({ data }) => {
    const secretKey = getSecretKey();
    const expectedAmount = getExpectedAmount(data.reference);
    if (expectedAmount === null) {
      return { verified: false as const, message: "This donation reference is not valid." };
    }

    const response = await fetch(
      `${PAYSTACK_API_URL}/transaction/verify/${encodeURIComponent(data.reference)}`,
      {
        headers: { Authorization: `Bearer ${secretKey}` },
        signal: AbortSignal.timeout(15_000),
      },
    );
    const payload = await readPayload(response);

    if (!response.ok || payload?.status !== true || !isVerificationData(payload.data)) {
      console.error("Paystack verification failed", response.status, payload);
      return {
        verified: false as const,
        message: "We could not verify this donation yet. Check your email or try again shortly.",
      };
    }

    const transaction = payload.data;
    const verified =
      transaction.status === "success" &&
      transaction.reference === data.reference &&
      transaction.amount === expectedAmount &&
      transaction.currency.toUpperCase() === getCurrency();

    if (!verified) {
      console.error("Paystack transaction did not pass donation verification", {
        reference: data.reference,
        status: transaction.status,
        amount: transaction.amount,
        currency: transaction.currency,
      });
      return {
        verified: false as const,
        message:
          transaction.status === "success"
            ? "The donation details could not be verified. Please contact us before trying again."
            : "Your payment was not completed. You have not been charged by this donation form.",
      };
    }

    return {
      verified: true as const,
      amount: transaction.amount / 100,
      currency: transaction.currency.toUpperCase(),
      email: transaction.customer?.email ?? null,
      paidAt: transaction.paid_at ?? null,
      reference: transaction.reference,
    };
  });
