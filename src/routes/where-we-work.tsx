import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/where-we-work")({
  head: () => ({
    meta: [
      { title: "Where We Work — Common Ground" },
      {
        name: "description",
        content:
          "Regional programs across Africa, Asia, the Middle East, Europe and the Americas, led by teams rooted in each community.",
      },
      { property: "og:title", content: "Where We Work — Common Ground" },
      {
        property: "og:description",
        content: "Regional peacebuilding programs led by teams rooted in each community.",
      },
      { property: "og:url", content: "/where-we-work" },
    ],
    links: [{ rel: "canonical", href: "/where-we-work" }],
  }),
  component: WhereWeWorkPage,
});

const REGIONS = [
  { name: "West & Central Africa", detail: "Cross-border dialogue and youth-led early warning networks." },
  { name: "East & Southern Africa", detail: "Land and resource mediation with pastoralist and farming communities." },
  { name: "Middle East & North Africa", detail: "Civic media and local governance partnerships." },
  { name: "Asia", detail: "Interfaith cooperation and community security initiatives." },
  { name: "Europe & Eurasia", detail: "Reconciliation work and support for displaced communities." },
  { name: "The Americas", detail: "Bridging divides across polarized communities and institutions." },
];

function WhereWeWorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <h1 className="text-4xl font-semibold text-foreground uppercase">
        Where we work
      </h1>
      <ul className="mt-12 divide-y divide-border border-y border-border">
        {REGIONS.map((r) => (
          <li key={r.name} className="flex flex-col gap-1 py-6 sm:flex-row sm:gap-10">
            <span className="w-72 shrink-0 font-display text-lg font-semibold text-foreground">
              {r.name}
            </span>
            <span className="text-muted-foreground">{r.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}