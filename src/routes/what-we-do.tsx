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

const AREAS = [
  {
    title: "Public Health",
    body: "We work to improve the health and wellbeing of children and women by supporting access to quality healthcare services, health education and community-based interventions.",
  },
  {
    title: "Education",
    body: "We support children and young people through initiatives focused on literacy, numeracy, vocational education and practical skills for personal and professional development.",
  },
  {
    title: "Nutrition",
    body: "We support sustainable nutrition programs for children — particularly children under five — and women of reproductive age. Our goal is to help prevent and manage malnutrition while promoting healthier families and communities.",
  },
  {
    title: "Innovative Agriculture and Food Security",
    body: "We promote food security through climate-conscious and innovative agricultural initiatives that can strengthen food production, household resilience and community livelihoods.",
  },
  {
    title: "Empowerment and Livelihoods",
    body: "We empower women and young people through career development, skills training and sustainable economic empowerment initiatives that can improve income and self-reliance.",
  },
];

function WhatWeDoPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <h1 className="text-4xl font-semibold text-foreground uppercase">
        Our Areas of Focus
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        Our programs address interconnected challenges that affect the health, dignity
        and economic wellbeing of underserved communities.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {AREAS.map((a) => (
          <div key={a.title} className="border border-border bg-card p-7">
            <h2 className="text-xl font-semibold text-card-foreground">{a.title}</h2>
            <p className="mt-3 text-muted-foreground">{a.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          to="/donate"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Support a Program
        </Link>
        <Link
          to="/get-involved"
          className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
        >
          Partner With Us
        </Link>
      </div>
    </div>
  );
}
