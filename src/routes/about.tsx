import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Who We Are — Shavonne Care Foundation International" },
      {
        name: "description",
        content:
          "SCFI was incorporated in 2022 to advance sustainable development and improve the wellbeing of children, young people, women and other vulnerable groups.",
      },
      { property: "og:title", content: "Who We Are — SCFI" },
      {
        property: "og:description",
        content:
          "Our mission, vision and values: empowering marginalized communities through sustainable initiatives.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Reaching Underserved Communities",
    body: "We actively seek to serve people who are frequently overlooked or marginalized, including low-income communities and people in remote locations.",
  },
  {
    title: "Humanity",
    body: "We believe every person has inherent worth and deserves to be treated with dignity, kindness, respect and compassion.",
  },
  {
    title: "Integrity and Transparency",
    body: "We uphold honesty, strong moral principles, accountability and open communication throughout our work.",
  },
  {
    title: "Teamwork",
    body: "We encourage collaboration, communication and participation so that our collective efforts can create stronger results.",
  },
  {
    title: "Professionalism",
    body: "We strive to be hardworking, proactive, dependable and accountable, using evidence and reflection to continuously improve.",
  },
  {
    title: "Gender Equality and Equity",
    body: "We recognize gender equality and equity as fundamental human rights and promote fair treatment and opportunity in our programs and workplace.",
  },
  {
    title: "Fairness and Justice",
    body: "We support environments in which people have equitable opportunities to succeed regardless of their background, gender, race or age.",
  },
  {
    title: "Welfare",
    body: "We prioritize the physical, emotional and mental wellbeing of our staff members, beneficiaries, partners and stakeholders.",
  },
  {
    title: "Discipline",
    body: "We value responsibility, diligence, self-control and a shared commitment to achieving personal and organizational goals.",
  },
];

function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="text-4xl font-semibold text-foreground uppercase">Who we are</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Shavonne Care Foundation International was incorporated on 20 April 2022 to
          advance sustainable development and improve the wellbeing of children, young
          people, women, indigent people and other vulnerable groups.
        </p>
        <h2 className="mt-12 text-2xl font-semibold text-foreground">Our mission</h2>
        <p className="mt-4 text-muted-foreground">
          To empower marginalized communities — particularly children, young people,
          women and vulnerable groups — through sustainable programs that improve health,
          education, nutrition, food security and economic opportunity.
        </p>
        <h2 className="mt-12 text-2xl font-semibold text-foreground">Our vision</h2>
        <p className="mt-4 text-muted-foreground">
          We envision a world where every individual has access to quality healthcare,
          education and economic opportunities.
        </p>
      </div>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Our Values Guide Every Action
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Our values define how we serve communities, work with partners and remain
            accountable to the people who place their trust in us.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-card-foreground">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
