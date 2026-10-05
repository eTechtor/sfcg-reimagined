import { PageHero } from "../components/page-hero";
import boardImage from "../assets/scfi-board-meeting.jpg";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — Shavonne Care Foundation International" },
      {
        name: "description",
        content:
          "How SCFI creates sustainable change: listening to communities, designing solutions, partnering, building capacity, learning and scaling what works.",
      },
      { property: "og:title", content: "Our Approach — SCFI" },
      {
        property: "og:description",
        content:
          "Community needs assessment, program design, partnership, capacity building, monitoring and scale.",
      },
      { property: "og:url", content: "/approach" },
    ],
    links: [{ rel: "canonical", href: "/approach" }],
  }),
  component: ApproachPage,
});

const STEPS = [
  {
    title: "Listen and Assess",
    body: "We engage communities and beneficiaries to understand their needs, challenges and priorities before designing an intervention.",
  },
  {
    title: "Design Sustainable Solutions",
    body: "We develop health, nutrition, education, agriculture, career development and empowerment programs that respond to identified needs.",
  },
  {
    title: "Work Through Partnerships",
    body: "We collaborate with communities, public institutions, civil society organizations, development partners and technical experts.",
  },
  {
    title: "Build Local Capacity",
    body: "We strengthen the knowledge and skills of staff members, volunteers, beneficiaries and community stakeholders.",
  },
  {
    title: "Monitor, Learn and Improve",
    body: "We assess progress, gather feedback and adapt our programs to changing needs and emerging challenges.",
  },
  {
    title: "Scale What Works",
    body: "We seek to expand effective programs, support research and advocate for policies that create lasting systemic change.",
  },
];

const PRIORITIES = [
  {
    title: "Stronger Systems and Governance",
    body: "We are strengthening our organizational structure, operational policies, governance systems, regulatory compliance and internal decision-making processes.",
  },
  {
    title: "Community-Centred Program Development",
    body: "We conduct needs assessments and design comprehensive programs in health, nutrition, education, agriculture, career development and empowerment.",
  },
  {
    title: "Strategic Partnerships",
    body: "We seek meaningful collaboration with local stakeholders, government institutions, development organizations, NGOs, researchers and technical experts.",
  },
  {
    title: "Resource Mobilization",
    body: "We pursue donations, grants, sponsorships and other responsible funding opportunities to support sustainable program implementation.",
  },
  {
    title: "Capacity Building",
    body: "We invest in training, learning, technology and infrastructure to improve the capabilities of our staff members, volunteers and beneficiaries.",
  },
  {
    title: "Implementation and Accountability",
    body: "We monitor programs, gather feedback, evaluate effectiveness and promote transparency in the allocation and use of resources.",
  },
  {
    title: "Growth and Scale",
    body: "We aim to expand effective programs, establish new community partnerships and contribute to research, advocacy and policy development.",
  },
];

function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title="Listen. Collaborate. Create lasting change."
        image={boardImage}
        imageAlt="A collaborative stakeholder meeting"
      >
        We begin with community priorities, build meaningful partnerships and use what we learn to
        strengthen our programmes.
      </PageHero>
      <div className="site-container section-space">
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {STEPS.map((s, index) => (
            <div key={s.title} className="border border-border bg-card p-7">
              <p className="eyebrow">Step {String(index + 1).padStart(2, "0")}</p>
              <h2 className="text-xl font-semibold text-card-foreground">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/get-involved"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Partner With Us
          </Link>
        </div>
      </div>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Building an Organization That Can Deliver Lasting Impact
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Our strategic roadmap focuses on strengthening SCFI as an institution while designing,
            implementing and expanding programs that respond to community priorities.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRIORITIES.map((p) => (
              <div key={p.title} className="border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-card-foreground">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
