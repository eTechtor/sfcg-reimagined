import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Shavonne Care Foundation International" },
      {
        name: "description",
        content:
          "Volunteer, partner with SCFI or subscribe for updates on programs supporting children, women, young people and vulnerable communities.",
      },
      { property: "og:title", content: "Get Involved — SCFI" },
      {
        property: "og:description",
        content:
          "Use your skills to strengthen communities: volunteer, partner or stay connected to our work.",
      },
      { property: "og:url", content: "/get-involved" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolvedPage,
});

const INTERESTS = [
  "Public Health",
  "Education",
  "Nutrition",
  "Agriculture and Food Security",
  "Empowerment and Livelihoods",
  "Partnership",
  "Volunteering",
];

const inputClass =
  "w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary";

function GetInvolvedPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-2xl px-5 py-20">
        <h1 className="text-4xl font-semibold text-foreground uppercase">
          Stay Connected to Our Work
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Receive updates about SCFI's programs, community activities, partnership
          opportunities and ways to support children, women, young people and vulnerable
          communities.
        </p>

        <form
          className="mt-10 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input required maxLength={100} placeholder="First name" className={inputClass} />
            <input required maxLength={100} placeholder="Last name" className={inputClass} />
          </div>
          <input
            required
            type="email"
            maxLength={255}
            placeholder="Email address"
            className={inputClass}
          />
          <input maxLength={100} placeholder="Country — optional" className={inputClass} />
          <select defaultValue="" className={inputClass}>
            <option value="">Area of interest — optional</option>
            {INTERESTS.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          <label className="flex items-start gap-3 text-sm text-muted-foreground">
            <input required type="checkbox" className="mt-1" />I agree to receive news and
            updates from Shavonne Care Foundation International and understand that I can
            unsubscribe at any time.
          </label>
          <button
            type="submit"
            className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground"
          >
            {sent ? "Thanks — you've joined our community" : "Join Our Community"}
          </button>
        </form>
      </div>

      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Use Your Skills to Strengthen Communities
          </h2>
          <p className="mt-5 text-muted-foreground">
            SCFI welcomes individuals who are willing to contribute their time,
            professional knowledge and practical skills to support our mission.
          </p>
          <p className="mt-4 text-muted-foreground">
            Volunteer opportunities may include community outreach, health education,
            teaching, communications, fundraising, research, monitoring and evaluation,
            agriculture, career mentoring and administrative support.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Become a Volunteer
          </Link>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Sustainable Change Requires Partnership
          </h2>
          <p className="mt-5 text-muted-foreground">
            SCFI welcomes collaboration with community leaders, government institutions,
            development agencies, civil society organizations, private-sector partners,
            research institutions, healthcare professionals, educators and supporters who
            share our vision.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-brand-red-foreground"
            >
              Become a Partner
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
