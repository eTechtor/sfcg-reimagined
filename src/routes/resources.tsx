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

const UPDATES = [
  {
    title: "Expanding Access to Community Health",
    body: "Updates from SCFI's public health and maternal and child wellbeing initiatives will be published here.",
    action: "View Health Updates",
  },
  {
    title: "Supporting Education and Skills Development",
    body: "Learn about planned education, literacy, vocational training and career development activities for children and young people.",
    action: "View Education Updates",
  },
  {
    title: "Improving Nutrition and Food Security",
    body: "Follow our work to address malnutrition, promote healthy families and strengthen community food systems.",
    action: "View Nutrition Updates",
  },
  {
    title: "Empowering Women and Young People",
    body: "Read about skills development, livelihood support and economic empowerment opportunities.",
    action: "View Empowerment Updates",
  },
];

const LIBRARY = [
  "News and Updates",
  "Publications",
  "Reports",
  "Policies",
  "Frequently Asked Questions",
];

function ResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <h1 className="text-4xl font-semibold text-foreground uppercase">
        Stories, Programs and Updates
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        Follow the development of our programs, community activities, partnerships and
        organizational milestones.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {UPDATES.map((u) => (
          <article key={u.title} className="flex flex-col border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-card-foreground">{u.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{u.body}</p>
            <span className="mt-auto pt-6 text-sm font-semibold text-primary">
              {u.action} →
            </span>
          </article>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold text-foreground">Resource library</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {LIBRARY.map((item) => (
          <li key={item} className="border border-border px-4 py-3 text-sm font-medium">
            {item}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="mt-10 inline-block rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
      >
        Request Organizational Information
      </Link>
    </div>
  );
}
