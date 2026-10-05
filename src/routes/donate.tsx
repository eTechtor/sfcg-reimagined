import { createFileRoute } from "@tanstack/react-router";
import { CircleAlert, CircleCheck, LoaderCircle, LockKeyhole } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

import { getDonationConfig, initializeDonation, verifyDonation } from "@/lib/paystack";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Shavonne Care Foundation International" },
      {
        name: "description",
        content:
          "Your support helps deliver healthcare, education, nutrition, agriculture and livelihood initiatives for underserved communities.",
      },
      { property: "og:title", content: "Your Support Can Help Create Opportunity | SCFI" },
      {
        property: "og:description",
        content:
          "Support sustainable programs in health, education, nutrition, agriculture and livelihoods.",
      },
      { property: "og:url", content: "/donate" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  validateSearch: (search: Record<string, unknown>): DonationSearch => ({
    ...(typeof search.payment === "string" ? { payment: search.payment } : {}),
    ...(typeof search.reference === "string" ? { reference: search.reference } : {}),
    ...(typeof search.trxref === "string" ? { trxref: search.trxref } : {}),
  }),
  loader: () => getDonationConfig(),
  component: DonatePage,
});

const AMOUNTS = [25, 50, 100, 250];

type DonationSearch = {
  payment?: string;
  reference?: string;
  trxref?: string;
};

function DonatePage() {
  const config = Route.useLoaderData();
  const search = Route.useSearch();
  const [monthly, setMonthly] = useState(false);
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [verification, setVerification] = useState<
    | { status: "idle" | "checking" }
    | { status: "success"; amount: number; currency: string; reference: string }
    | { status: "error"; message: string }
  >({ status: "idle" });

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en", {
        style: "currency",
        currency: config.currency,
        maximumFractionDigits: 2,
      }),
    [config.currency],
  );

  const selectedAmount = customAmount === "" ? amount : Number(customAmount);
  const monthlyEnabled = config.monthlyAmounts.length > 0;
  const availableAmounts = monthly ? config.monthlyAmounts : AMOUNTS;

  useEffect(() => {
    const reference = search.reference ?? search.trxref;
    if (search.payment !== "callback" || !reference) return;

    let active = true;
    setVerification({ status: "checking" });
    verifyDonation({ data: { reference } })
      .then((result) => {
        if (!active) return;
        if (result.verified) {
          setVerification({
            status: "success",
            amount: result.amount,
            currency: result.currency,
            reference: result.reference,
          });
        } else {
          setVerification({ status: "error", message: result.message });
        }
      })
      .catch(() => {
        if (active) {
          setVerification({
            status: "error",
            message: "We could not verify this donation yet. Please try again shortly.",
          });
        }
      });

    return () => {
      active = false;
    };
  }, [search.payment, search.reference, search.trxref]);

  function chooseFrequency(value: boolean) {
    setMonthly(value);
    setCustomAmount("");
    if (value) {
      setAmount(config.monthlyAmounts[0] ?? 50);
    } else {
      setAmount(50);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    if (!Number.isFinite(selectedAmount) || selectedAmount < 1) {
      setFormError("Enter a donation amount of at least 1.");
      return;
    }

    setSubmitting(true);
    try {
      const result = await initializeDonation({
        data: {
          email,
          firstName,
          lastName,
          amount: selectedAmount,
          frequency: monthly ? "monthly" : "one-time",
        },
      });
      window.location.assign(result.authorizationUrl);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "We could not start the donation. Please try again.",
      );
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl px-5 py-20">
      <h1 className="text-4xl font-semibold text-foreground uppercase">
        Your Support Can Help Create Opportunity
      </h1>
      <p className="mt-5 text-muted-foreground">
        Your contribution can support the development and delivery of healthcare, education,
        nutrition, agriculture and livelihood initiatives for underserved communities. Every act of
        support brings us closer to a future in which people can live healthier lives, access
        education and build sustainable livelihoods.
      </p>

      {verification.status !== "idle" && (
        <div
          className={`mt-8 flex gap-3 border p-4 ${
            verification.status === "success"
              ? "border-green-700/30 bg-green-50 text-green-950"
              : verification.status === "error"
                ? "border-destructive/30 bg-destructive/5 text-foreground"
                : "border-border bg-muted/50 text-foreground"
          }`}
          role="status"
          aria-live="polite"
        >
          {verification.status === "checking" && (
            <LoaderCircle className="mt-0.5 size-5 shrink-0 animate-spin" aria-hidden="true" />
          )}
          {verification.status === "success" && (
            <CircleCheck className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          )}
          {verification.status === "error" && (
            <CircleAlert className="mt-0.5 size-5 shrink-0 text-destructive" aria-hidden="true" />
          )}
          <div>
            <p className="font-semibold">
              {verification.status === "checking" && "Confirming your donation…"}
              {verification.status === "success" && "Thank you for your donation!"}
              {verification.status === "error" && "Payment not confirmed"}
            </p>
            {verification.status === "success" && (
              <p className="mt-1 text-sm">
                We verified your {formatter.format(verification.amount)} contribution. Your Paystack
                reference is {verification.reference}.
              </p>
            )}
            {verification.status === "error" && (
              <p className="mt-1 text-sm">{verification.message}</p>
            )}
          </div>
        </div>
      )}

      <form className="mt-10 border border-border bg-card p-7" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 overflow-hidden rounded-full border border-border">
          <button
            type="button"
            onClick={() => chooseFrequency(false)}
            className={`py-2 text-sm font-semibold transition ${
              !monthly
                ? "bg-primary text-primary-foreground"
                : "bg-transparent text-muted-foreground"
            }`}
          >
            Give once
          </button>
          <button
            type="button"
            onClick={() => chooseFrequency(true)}
            disabled={!monthlyEnabled}
            title={monthlyEnabled ? undefined : "Monthly giving is not configured yet"}
            className={`py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-45 ${
              monthly
                ? "bg-primary text-primary-foreground"
                : "bg-transparent text-muted-foreground"
            }`}
          >
            Give monthly
          </button>
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-foreground">Donation amount</legend>
          <div
            className={`mt-2 grid gap-2 ${availableAmounts.length === 4 ? "grid-cols-4" : "grid-cols-2"}`}
          >
            {availableAmounts.map((a) => (
              <button
                type="button"
                key={a}
                onClick={() => {
                  setAmount(a);
                  setCustomAmount("");
                }}
                className={`border py-3 text-sm font-semibold transition ${
                  amount === a && customAmount === ""
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border text-muted-foreground"
                }`}
              >
                {formatter.format(a)}
              </button>
            ))}
          </div>
        </fieldset>

        {!monthly && (
          <label className="mt-4 block text-sm font-semibold text-foreground">
            Other amount
            <div className="mt-2 flex items-center border border-border bg-background focus-within:border-primary">
              <span className="border-r border-border px-3 py-3 text-sm text-muted-foreground">
                {config.currency}
              </span>
              <input
                type="number"
                min="1"
                max="1000000"
                step="0.01"
                inputMode="decimal"
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
                placeholder="Enter an amount"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none"
              />
            </div>
          </label>
        )}

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold text-foreground">
            First name <span className="font-normal text-muted-foreground">(optional)</span>
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              autoComplete="given-name"
              maxLength={80}
              className="mt-2 w-full border border-border bg-background px-3 py-3 text-sm outline-none focus:border-primary"
            />
          </label>
          <label className="text-sm font-semibold text-foreground">
            Last name <span className="font-normal text-muted-foreground">(optional)</span>
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              autoComplete="family-name"
              maxLength={80}
              className="mt-2 w-full border border-border bg-background px-3 py-3 text-sm outline-none focus:border-primary"
            />
          </label>
        </div>

        <label className="mt-4 block text-sm font-semibold text-foreground">
          Email address
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            maxLength={254}
            placeholder="you@example.com"
            className="mt-2 w-full border border-border bg-background px-3 py-3 text-sm outline-none focus:border-primary"
          />
        </label>

        {formError && (
          <div
            className="mt-4 flex gap-2 border border-destructive/30 bg-destructive/5 p-3 text-sm text-foreground"
            role="alert"
          >
            <CircleAlert className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
            <p>{formError}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting || !config.configured}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
              Connecting to Paystack…
            </>
          ) : (
            <>
              <LockKeyhole className="size-4" aria-hidden="true" />
              Give{" "}
              {Number.isFinite(selectedAmount) && selectedAmount > 0
                ? formatter.format(selectedAmount)
                : "now"}{" "}
              {monthly ? "monthly" : "now"}
            </>
          )}
        </button>
        {!config.configured && (
          <p className="mt-3 text-center text-sm text-destructive" role="status">
            Online donations are being configured. Please check back soon.
          </p>
        )}
        <p className="mt-4 text-xs text-muted-foreground">
          Contributions are tax deductible in the US. Amounts are in {config.currency}. You’ll
          complete payment securely on Paystack.
        </p>
      </form>
    </div>
  );
}
