import { PageHero } from "../components/page-hero";
import trainingImage from "../assets/scfi-training.jpg";
import { Newspaper, ArrowUpRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Shavonne Care Foundation International" },
      {
        name: "description",
        content:
          "News and updates, publications, reports, policies and frequently asked questions from Shavonne Care Foundation International.",
      },
      { property: "og:title", content: "Resources — SCFI" },
      {
        property: "og:description",
        content:
          "Follow the development of SCFI programs, community activities, partnerships and organizational milestones.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="News & stories"
        title="People. Progress. Possibility."
        image={trainingImage}
        imageAlt="Participants in a training session"
      >
        Follow community activities, programme developments and the people behind our work.
      </PageHero>
      <section className="site-container section-space">
        <div className="empty-state">
          <Newspaper size={36} aria-hidden="true" />
          <p className="eyebrow">From our community</p>
          <h2>Our stories are on their way.</h2>
          <p>
            We are preparing our first programme updates. Follow our official channels for news from
            SCFI, or contact the team to request organisational information.
          </p>
          <div className="button-row">
            <a
              className="button"
              href="https://www.facebook.com/share/1HVfwsYAHz"
              target="_blank"
              rel="noreferrer"
            >
              Facebook <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              className="button button--outline"
              href="https://www.instagram.com/shavonnecarefoundation?igsh=eHczN284aHYwOWEy"
              target="_blank"
              rel="noreferrer"
            >
              Instagram <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <Link to="/contact" className="text-link">
            Request organisational information →
          </Link>
        </div>
      </section>
    </>
  );
}
