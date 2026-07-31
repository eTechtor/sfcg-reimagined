import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "What We Do — Common Ground" },
      {
        name: "description",
        content:
          "Dialogue, media, and community-led programs that shift how people handle conflict — designed with the communities living it.",
      },
      { property: "og:title", content: "What We Do — Common Ground" },
      {
        property: "og:description",
        content: "Dialogue, media and community-led programs that shift how people handle conflict.",
      },
      { property: "og:url", content: "/approach" },
    ],
    links: [{ rel: "canonical", href: "/approach" }],
  }),
  component: ApproachPage,
});

const PILLARS = [
  {
    title: "Dialogue & mediation",
    body: "Structured conversations between groups in conflict, facilitated by trusted local figures.",
  },
  {
    title: "Media for change",
    body: "Radio dramas, talk shows and digital storytelling that model cooperation at national scale.",
  },
  {
    title: "Youth & civic action",
    body: "Training and small grants so young people lead the change their communities need.",
  },
  {
    title: "Institutional reform",
    body: "Working with police, courts and local government to make services fair and accountable.",
  },
];

function ApproachPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <h1 className="text-4xl font-semibold text-foreground uppercase">What we do</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Every context is different, so every program starts with listening. These are
        the four pillars we build from.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {PILLARS.map((p) => (
          <div key={p.title} className="border border-border bg-card p-7">
            <h2 className="text-xl font-semibold text-card-foreground">{p.title}</h2>
            <p className="mt-3 text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}