import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Give — Common Ground" },
      {
        name: "description",
        content:
          "Support community-led peacebuilding with a one-time or monthly gift to Common Ground.",
      },
      { property: "og:title", content: "Give — Common Ground" },
      {
        property: "og:description",
        content: "Support community-led peacebuilding with a one-time or monthly gift.",
      },
      { property: "og:url", content: "/donate" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: DonatePage,
});

const AMOUNTS = [25, 50, 100, 250];

function DonatePage() {
  const [monthly, setMonthly] = useState(false);
  const [amount, setAmount] = useState(50);

  return (
    <div className="mx-auto max-w-xl px-5 py-20">
      <h1 className="text-4xl font-semibold text-foreground uppercase">Give</h1>
      <p className="mt-5 text-muted-foreground">
        Your gift funds local peacebuilders doing the slow, patient work that keeps
        communities together.
      </p>

      <div className="mt-10 border border-border bg-card p-7">
        <div className="grid grid-cols-2 overflow-hidden rounded-full border border-border">
          {[false, true].map((v) => (
            <button
              key={String(v)}
              onClick={() => setMonthly(v)}
              className={`py-2 text-sm font-semibold transition ${
                monthly === v
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent text-muted-foreground"
              }`}
            >
              {v ? "Give monthly" : "Give once"}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-4 gap-2">
          {AMOUNTS.map((a) => (
            <button
              key={a}
              onClick={() => setAmount(a)}
              className={`border py-3 text-sm font-semibold transition ${
                amount === a
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border text-muted-foreground"
              }`}
            >
              ${a}
            </button>
          ))}
        </div>

        <button className="mt-6 w-full rounded-full bg-accent py-3 text-sm font-semibold text-accent-foreground">
          Give ${amount} {monthly ? "every month" : "now"}
        </button>
        <p className="mt-4 text-xs text-muted-foreground">
          Contributions are tax deductible in the US. Amounts are in US dollars.
        </p>
      </div>
    </div>
  );
}