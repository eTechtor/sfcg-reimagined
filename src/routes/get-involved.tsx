import { PageHero } from "../components/page-hero";
import trainingImage from "../assets/scfi-training.jpg";
import { HandHeart, Users } from "lucide-react";
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
      <PageHero
        eyebrow="Get involved"
        title="Your contribution can create opportunity."
        image={trainingImage}
        imageAlt="Participants sharing knowledge in a training session"
      >
        Whether you bring your time, expertise or a shared vision, there is a place for you in our
        work.
      </PageHero>
      <section className="site-container section-space">
        <div className="involvement-grid">
          <article className="surface-card">
            <HandHeart className="section-icon" size={32} aria-hidden="true" />
            <p className="eyebrow">Volunteer</p>
            <h2>Use your skills to strengthen communities.</h2>
            <p>
              SCFI welcomes individuals willing to contribute their time, professional knowledge and
              practical skills.
            </p>
            <p>
              Opportunities may include community outreach, health education, teaching,
              communications, fundraising, research, agriculture, mentoring and administrative
              support.
            </p>
          </article>
          <article className="surface-card">
            <Users className="section-icon" size={32} aria-hidden="true" />
            <p className="eyebrow">Partner with us</p>
            <h2>Sustainable change requires partnership.</h2>
            <p>
              SCFI welcomes collaboration with community leaders, government institutions,
              development agencies, civil society organisations, private-sector partners,
              researchers, healthcare professionals, educators and supporters who share our vision.
            </p>
          </article>
        </div>
        <div className="involvement-action">
          <Link to="/contact" className="button">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
