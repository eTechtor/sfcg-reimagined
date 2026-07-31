import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Common Ground" },
      {
        name: "description",
        content:
          "Subscribe for updates, volunteer, or partner with us to support community-led peacebuilding around the world.",
      },
      { property: "og:title", content: "Get Involved — Common Ground" },
      {
        property: "og:description",
        content: "Subscribe, volunteer, or partner with us to support community-led peacebuilding.",
      },
      { property: "og:url", content: "/get-involved" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolvedPage,
});

function GetInvolvedPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-2xl px-5 py-20">
      <h1 className="text-4xl font-semibold text-foreground uppercase">Get involved</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Sign up to hear how our work is changing, where new programs are starting, and
        how you can take part.
      </p>

      <form
        className="mt-10 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            required
            placeholder="First name"
            className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
          />
          <input
            required
            placeholder="Last name"
            className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
          />
        </div>
        <input
          required
          type="email"
          placeholder="Email"
          className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
        />
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input required type="checkbox" className="mt-1" />I agree to the privacy
          policy.
        </label>
        <button
          type="submit"
          className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground"
        >
          {sent ? "Thanks — you're subscribed" : "Subscribe"}
        </button>
      </form>
    </div>
  );
}