import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Shavonne Care Foundation International" },
      {
        name: "description",
        content:
          "Explore career opportunities with Shavonne Care Foundation International and help create lasting change in underserved communities.",
      },
      { property: "og:title", content: "Careers — SCFI" },
      {
        property: "og:description",
        content: "Join SCFI in advancing health, education and economic opportunity.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            Work with SCFI
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground uppercase md:text-5xl">
            Careers
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Join a team committed to improving health, education, nutrition, food security and
            economic opportunity for underserved communities.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="text-3xl font-semibold text-foreground">Current Opportunities</h2>
          <p className="mt-5 text-muted-foreground">
            There are no open positions at this time. Please check back for future opportunities to
            work with Shavonne Care Foundation International.
          </p>
          <div className="mt-10 border border-border bg-card p-7">
            <h3 className="text-xl font-semibold text-card-foreground">Stay Connected</h3>
            <p className="mt-3 text-muted-foreground">
              You can contact our team to share your interest in future opportunities or ask a
              question about working with SCFI.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
