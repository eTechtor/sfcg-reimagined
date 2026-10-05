import { PageHero } from "../components/page-hero";
import { ProgrammeGrid } from "../components/programme-grid";
import outreachImage from "../assets/hero-health-outreach.jpg";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — Shavonne Care Foundation International" },
      {
        name: "description",
        content:
          "SCFI's areas of focus: public health, education, nutrition, innovative agriculture and food security, and empowerment and livelihoods.",
      },
      { property: "og:title", content: "What We Do — SCFI" },
      {
        property: "og:description",
        content:
          "Programs in public health, education, nutrition, agriculture and economic empowerment for underserved communities.",
      },
      { property: "og:url", content: "/what-we-do" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do" }],
  }),
  component: WhatWeDoPage,
});

function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Opportunity, in every area of life."
        image={outreachImage}
        imageAlt="Community members at a health facility"
      >
        Our programmes connect health, education, nutrition and livelihoods to support stronger,
        more resilient communities.
      </PageHero>
      <section className="site-container section-space">
        <div className="section-heading">
          <p className="eyebrow">Our areas of focus</p>
          <h2>Working together for wellbeing.</h2>
          <p>
            We respond to the challenges communities identify, with practical support across five
            connected areas.
          </p>
        </div>
        <ProgrammeGrid />
        <div className="button-row">
          <Link to="/donate" className="button">
            Support a programme
          </Link>
          <Link to="/get-involved" className="button button--outline">
            Partner with us
          </Link>
        </div>
      </section>
    </>
  );
}
