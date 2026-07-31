import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";

import heroImage from "../assets/hero-people.jpg";
import heroVideo from "../assets/hero-people.mp4.asset.json";
import dialogueImage from "../assets/dialogue.jpg";
import approachImage from "../assets/approach.jpg";
import bannerImage from "../assets/banner-hands.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Common Ground — Building Peace With Communities" },
      {
        name: "description",
        content:
          "We partner with communities in more than 30 countries to move conflict away from violence and toward trust, dialogue and shared solutions.",
      },
      { property: "og:title", content: "Common Ground — Building Peace With Communities" },
      {
        property: "og:description",
        content:
          "We partner with communities in more than 30 countries to move conflict away from violence and toward trust and collaboration.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const NEWS = [
  {
    title: "Our CEO on what peace costs — and what war costs more",
    kicker: "Interview",
    action: "Watch now",
  },
  {
    title: "From the Sahel to Brussels: a turning point for regional dialogue",
    kicker: "Op-ed",
    action: "Read the article",
  },
  {
    title: "Why philanthropy needs a game plan for political violence",
    kicker: "Feature",
    action: "Read the article",
  },
  {
    title: "Inside the possible: a conversation with our country directors",
    kicker: "Podcast",
    action: "Listen now",
  },
];

function Index() {
  return (
    <>
      <section className="relative">
        <video
          src={heroVideo.url}
          poster={heroImage}
          autoPlay
          muted
          loop
          playsInline
          aria-label="A diverse group of people standing together in a bright open hall"
          className="h-[70vh] min-h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-navy/40" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end px-5 pb-14">
          <p className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">
            Peace is built, not found
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold text-navy-foreground uppercase md:text-6xl">
            When a new crisis arises, our job is to meet the moment
          </h1>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/approach"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
            >
              How we build peace <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ArrowDown className="mt-10 h-6 w-6 animate-bounce text-navy-foreground/80" />
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <img
            src={dialogueImage}
            alt="Community members seated in a dialogue circle under a tree"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-sm object-cover shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              One in four people live in a country touched by violent conflict
            </h2>
            <p className="mt-5 text-lg text-muted-foreground italic">
              Peace cannot take root while basic needs go unmet. When communities have
              food, safety and a voice, they can resolve their own disputes — and keep
              them resolved.
            </p>
            <p className="mt-5 font-medium text-foreground">
              Our mission is to change how people handle conflict: away from violence,
              toward trust and collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              How we build peace
            </h2>
            <p className="mt-5 text-muted-foreground">
              In a divided world, we stand for the power of bringing opposing
              perspectives into the same room. We work with everyone — not just the side
              we agree with — because durable agreements need every party at the table.
            </p>
            <p className="mt-4 text-muted-foreground">
              Local teams design each program with the people who live the conflict,
              then measure what actually changes: fewer clashes, restored services,
              agreements that hold.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Our stance
              </Link>
              <Link
                to="/approach"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
              >
                Our approach
              </Link>
            </div>
          </div>
          <img
            src={approachImage}
            alt="Local mediators reviewing maps and notes around a table"
            width={1200}
            height={900}
            loading="lazy"
            className="order-1 rounded-sm object-cover shadow-lg md:order-2"
          />
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:grid-cols-3">
          {[
            { stat: "30+", label: "Countries with active programs" },
            { stat: "40 yrs", label: "Of conflict transformation work" },
            { stat: "1,000+", label: "Local partner organizations" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-display text-5xl font-semibold text-accent">
                {item.stat}
              </p>
              <p className="mt-2 text-sm opacity-80">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            In the news
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NEWS.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col border border-border bg-card p-6 transition hover:border-primary"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  {item.kicker}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <span className="mt-auto pt-6 text-sm font-semibold text-muted-foreground group-hover:text-primary">
                  {item.action} →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <img
          src={bannerImage}
          alt="Many hands joined together over a wooden table"
          width={1920}
          height={720}
          loading="lazy"
          className="h-[320px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="absolute inset-0 mx-auto flex max-w-3xl flex-col items-center justify-center px-5 text-center">
          <h2 className="text-3xl font-semibold text-navy-foreground md:text-4xl">
            Meet the moment with us
          </h2>
          <p className="mt-4 text-navy-foreground/85">
            Stay informed about our work around the world and the ways you can take
            part.
          </p>
          <Link
            to="/get-involved"
            className="mt-7 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground"
          >
            Sign up for updates
          </Link>
        </div>
      </section>
    </>
  );
}
