import { createFileRoute, Link } from "@tanstack/react-router";

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

function GetInvolvedPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-5 py-20">
        <h1 className="text-4xl font-semibold text-foreground uppercase">Get Involved With SCFI</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Whether you want to volunteer, explore a partnership, receive updates or support a
          programme, our team would love to hear from you.
        </p>
      </div>

      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Use Your Skills to Strengthen Communities
          </h2>
          <p className="mt-5 text-muted-foreground">
            SCFI welcomes individuals who are willing to contribute their time, professional
            knowledge and practical skills to support our mission.
          </p>
          <p className="mt-4 text-muted-foreground">
            Volunteer opportunities may include community outreach, health education, teaching,
            communications, fundraising, research, monitoring and evaluation, agriculture, career
            mentoring and administrative support.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Sustainable Change Requires Partnership
          </h2>
          <p className="mt-5 text-muted-foreground">
            SCFI welcomes collaboration with community leaders, government institutions, development
            agencies, civil society organizations, private-sector partners, research institutions,
            healthcare professionals, educators and supporters who share our vision.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
