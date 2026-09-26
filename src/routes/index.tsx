import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Play } from "lucide-react";

import heroImage from "../assets/hero-people.jpg";
import dialogueImage from "../assets/dialogue.jpg";
import approachImage from "../assets/approach.jpg";
import bannerImage from "../assets/banner-hands.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Shavonne Care Foundation International | Health, Education & Empowerment",
      },
      {
        name: "description",
        content:
          "Shavonne Care Foundation International empowers underserved children, young people, women and vulnerable communities through healthcare, education, nutrition, agriculture and sustainable livelihood initiatives.",
      },
      {
        property: "og:title",
        content: "Building Healthier and More Empowered Communities | SCFI",
      },
      {
        property: "og:description",
        content:
          "Support sustainable programs that expand access to healthcare, education, nutrition, food security and economic opportunities.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const HERO_VIDEO_DESKTOP = "https://www.sfcg.org/wp-content/uploads/2026/01/test.mp4";
const HERO_VIDEO_MOBILE =
  "https://www.sfcg.org/wp-content/uploads/2026/01/25_Traditional_Vertical-Website-Video-2.mp4";

const APPROACH_HIGHLIGHTS = [
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

const FOCUS_AREAS = [
  {
    title: "Public Health",
    body: "We work to improve the health and wellbeing of children and women by supporting access to quality healthcare services, health education and community-based interventions.",
    action: "Explore Public Health",
  },
  {
    title: "Education",
    body: "We support children and young people through initiatives focused on literacy, numeracy, vocational education and practical skills for personal and professional development.",
    action: "Explore Education",
  },
  {
    title: "Nutrition",
    body: "We support sustainable nutrition programs for children — particularly children under five — and women of reproductive age, helping prevent and manage malnutrition.",
    action: "Explore Nutrition",
  },
  {
    title: "Innovative Agriculture and Food Security",
    body: "We promote food security through climate-conscious and innovative agricultural initiatives that strengthen food production, household resilience and community livelihoods.",
    action: "Explore Agriculture",
  },
  {
    title: "Empowerment and Livelihoods",
    body: "We empower women and young people through career development, skills training and sustainable economic empowerment initiatives that improve income and self-reliance.",
    action: "Explore Empowerment",
  },
];

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

function Index() {
  return (
    <>
      <section className="relative">
        <video
          key="hero-desktop"
          src={HERO_VIDEO_DESKTOP}
          poster={heroImage}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Children, women and community members participating in a Shavonne Care Foundation International outreach program."
          className="hidden h-[76vh] min-h-[460px] w-full object-cover md:block"
        />
        <video
          key="hero-mobile"
          src={HERO_VIDEO_MOBILE}
          poster={heroImage}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Children, women and community members participating in a Shavonne Care Foundation International outreach program."
          className="block h-[86vh] min-h-[520px] w-full object-cover md:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/45" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end px-5 pb-14">
          <p className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">
            Shavonne Care Foundation International
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] font-semibold text-navy-foreground uppercase md:text-6xl">
            Building healthier, educated and economically empowered communities
          </h1>
          <p className="mt-5 max-w-2xl text-navy-foreground/85">
            SCFI works with marginalized and underserved communities — particularly
            children, young people, women and vulnerable groups — to improve access to
            healthcare, education, nutrition, food security and sustainable economic
            opportunities. Through community-led and sustainable initiatives, we help
            individuals and families overcome barriers, strengthen their livelihoods and
            build a better future.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
            >
              Support Our Mission <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-navy-foreground"
            >
              Explore Our Work
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-brand-red-foreground"
            >
              <Play className="h-4 w-4" /> Watch Our Story
            </Link>
          </div>
          <ArrowDown className="mt-8 h-6 w-6 animate-bounce text-navy-foreground/80" />
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <img
            src={dialogueImage}
            alt="Community members gathered together during an outreach session"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-sm object-cover shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              When healthcare, education, food or opportunity is out of reach, an entire
              future can be affected
            </h2>
            <p className="mt-5 text-muted-foreground">
              For many underserved families, access to essential services remains
              limited. Children may struggle to receive quality education, women may lack
              adequate healthcare and nutrition, and young people may have few
              opportunities to develop skills or earn a sustainable income.
            </p>
            <p className="mt-4 font-medium text-foreground">
              Shavonne Care Foundation International exists to help close these gaps.
            </p>
            <p className="mt-4 text-muted-foreground">
              We design and support practical interventions in public health, education,
              nutrition, agriculture, career development and economic empowerment. Our
              work is focused on reaching people who are often overlooked, including
              low-income communities and people living in remote or hard-to-reach areas.
            </p>
            <p className="mt-4 text-sm text-muted-foreground italic">
              SCFI was incorporated on 20 April 2022 to advance sustainable development
              and improve the wellbeing of children, young people, women, indigent people
              and other vulnerable groups.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Learn About SCFI
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-20 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              How We Create Sustainable Change
            </h2>
            <p className="mt-5 text-muted-foreground">
              We believe meaningful development begins by listening to communities and
              understanding their most urgent needs.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our approach combines community needs assessments, carefully designed
              programs, strategic partnerships, capacity building and continuous
              learning. We work to ensure that every intervention is relevant, inclusive,
              transparent and capable of creating long-term value.
            </p>
            <p className="mt-4 text-muted-foreground">
              We monitor our programs, collect feedback and use evidence to improve our
              work. As successful initiatives grow, we seek opportunities to expand them,
              strengthen local systems and advocate for policies that support sustainable
              development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/approach"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Our Approach
              </Link>
              <Link
                to="/get-involved"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
              >
                Partner With Us
              </Link>
            </div>
          </div>
          <img
            src={approachImage}
            alt="Program staff and community stakeholders planning an initiative together"
            width={1200}
            height={900}
            loading="lazy"
            className="order-1 rounded-sm object-cover shadow-lg md:order-2"
          />
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3">
          {APPROACH_HIGHLIGHTS.map((item) => (
            <div key={item.title} className="border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Empowering marginalized communities through sustainable initiatives
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Our mission is to empower marginalized communities — particularly children,
            young people, women and vulnerable groups — through sustainable programs that
            improve health, education, nutrition, food security and economic opportunity.
          </p>
          <p className="mt-6 font-medium text-foreground italic">
            We envision a world where every individual has access to quality healthcare,
            education and economic opportunities.
          </p>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10">
          <p className="max-w-xl text-lg font-medium">
            Be part of building healthier, stronger and more self-reliant communities.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/donate"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
            >
              Donate
            </Link>
            <Link
              to="/get-involved"
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold"
            >
              Volunteer
            </Link>
            <Link
              to="/get-involved"
              className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-brand-red-foreground"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Our Areas of Focus
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Our programs address interconnected challenges that affect the health,
            dignity and economic wellbeing of underserved communities.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FOCUS_AREAS.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col border border-border bg-card p-6 transition hover:border-primary"
              >
                <h3 className="text-lg font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
                <Link
                  to="/what-we-do"
                  className="mt-auto pt-6 text-sm font-semibold text-primary"
                >
                  {item.action} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Sustainable Change Requires Partnership
          </h2>
          <p className="mt-5 text-muted-foreground">
            The challenges facing vulnerable communities cannot be addressed by one
            organization alone.
          </p>
          <p className="mt-4 text-muted-foreground">
            SCFI welcomes collaboration with community leaders, government institutions,
            development agencies, civil society organizations, private-sector partners,
            research institutions, healthcare professionals, educators and supporters who
            share our vision.
          </p>
          <p className="mt-4 text-muted-foreground">
            Together, we can mobilize resources, strengthen local capacity, extend
            essential services and develop solutions that create lasting impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/get-involved"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Become a Partner
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
            >
              Contact Our Team
            </Link>
          </div>
          <p className="mt-10 text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Organizations We Seek to Collaborate With
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Stories, Programs and Updates
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Follow the development of our programs, community activities, partnerships
            and organizational milestones.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {UPDATES.map((item) => (
              <article
                key={item.title}
                className="flex flex-col border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
                <Link
                  to="/resources"
                  className="mt-auto pt-6 text-sm font-semibold text-primary"
                >
                  {item.action} →
                </Link>
              </article>
            ))}
          </div>
          <Link
            to="/resources"
            className="mt-10 inline-block rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
          >
            View All Updates
          </Link>
        </div>
      </section>

      <section className="relative">
        <img
          src={bannerImage}
          alt="Community members joining hands in support of one another"
          width={1920}
          height={720}
          loading="lazy"
          className="h-[360px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 mx-auto flex max-w-3xl flex-col items-center justify-center px-5 text-center">
          <h2 className="text-3xl font-semibold text-navy-foreground md:text-4xl">
            Stay Connected to Our Work
          </h2>
          <p className="mt-4 text-navy-foreground/85">
            Receive updates about SCFI's programs, community activities, partnership
            opportunities and ways to support children, women, young people and
            vulnerable communities.
          </p>
          <Link
            to="/get-involved"
            className="mt-7 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground"
          >
            Join Our Community
          </Link>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Your Support Can Help Create Opportunity
          </h2>
          <p className="mt-5 text-muted-foreground">
            Your contribution can support the development and delivery of healthcare,
            education, nutrition, agriculture and livelihood initiatives for underserved
            communities. Every act of support brings us closer to a future in which
            people can live healthier lives, access education and build sustainable
            livelihoods.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/donate"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Make a Donation
            </Link>
            <Link
              to="/donate"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
            >
              Support a Program
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
            >
              Contact Us About Giving
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
