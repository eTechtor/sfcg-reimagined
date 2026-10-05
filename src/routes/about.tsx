import { createFileRoute } from "@tanstack/react-router";

import adamsShaibuPhoto from "../assets/team-adams-shaibu.jpg";
import abuBuhariPhoto from "../assets/team-abu-buhari.jpg";
import emmanuelChagbePhoto from "../assets/team-emmanuel-chagbe.jpg";
import jobOnuchePhoto from "../assets/team-job-onuche.jpg";
import patriciaAkorPhoto from "../assets/team-patricia-akor.jpg";
import peterAbohPhoto from "../assets/team-peter-aboh.jpg";

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

const TEAM_MEMBERS = [
  {
    name: "Adams Itopa Shaibu",
    role: "Executive Director, Shavonne Care Foundation International (SCFI)",
    photo: adamsShaibuPhoto,
    photoClassName: "team-photo--director",
    summary:
      "Multidisciplinary development professional, strategic leader and social-impact advocate.",
    profile: [
      "Adams Itopa Shaibu is a multidisciplinary development professional, strategic leader and social-impact advocate with over a decade of experience in nonprofit leadership, health-systems strengthening, programme management, procurement and supply chain, and organisational development.",
      "As Executive Director of Shavonne Care Foundation International, he provides strategic leadership for the Foundation's work in health, economic empowerment, education, innovative agriculture and sustainable community development. He has extensive experience managing complex donor-funded programmes, including World Bank-supported initiatives, and has led international procurement and supply-chain portfolios exceeding US$260 million.",
      "Adams holds three master's degrees: an MBA and a Master's in Health Economics from Bayero University Kano, Nigeria, and a Master's in Procurement, Logistics and Supply Chain Management from the University of Salford, UK, as well as a Bachelor's degree in Business Administration.",
      "He is a Certified SAFe 6 Scrum Master and Certified SAFe 6 Product Owner/Product Manager, with additional specialist training from the University of Washington, University of Melbourne, World Bank and United Nations in health economics, global health, health-systems strengthening, leadership and management in health, results-based financing, performance-based contracting, and procurement and supply-chain development.",
      "He is a member of the Chartered Institute of Procurement and Supply (CIPS) UK, International Association of Public Health Logisticians, Nigerian Institute of Management, and Institute of Strategic Management, Nigeria.",
      "Adams is driven by a commitment to equity, innovation, accountability and sustainable impact, with a passion for developing practical, evidence-informed solutions that improve the health, livelihoods, dignity and opportunities of vulnerable and underserved communities.",
    ],
  },
  {
    name: "Job Itanyi Onuche, PhD",
    role: "Director, Programmes & Resource Mobilisation",
    photo: jobOnuchePhoto,
    summary:
      "Nutrition Specialist, Programme Lead, humanitarian and development professional, and researcher.",
    profile: [
      "Dr. Job Itanyi Onuche is a results-driven Nutrition Specialist, Project Manager, Humanitarian and Development Professional with over 10 years of progressive experience leading and managing large-scale, donor-funded programmes across nutrition, food security, resilience, livelihoods, peacebuilding and emergency response in Nigeria.",
      "He holds a BSc in Biochemistry, an MSc in Nutrition and a PhD in Nutritional Biochemistry. Dr. Onuche is a member of the Nutrition Society of Nigeria (NSN), a national affiliate member of the American Society for Nutrition (ASN) and the Federation of African Nutrition Societies (FANUS), and a Fellow of the Institute of Management Consultants (FIMC).",
      "He brings extensive expertise in designing and managing development initiatives for vulnerable populations, with a strong focus on maternal and child nutrition, cash-based transfers and livelihood resilience. He also leads the development of high-quality concept notes, grant proposals and Expressions of Interest. A recipient of multiple humanitarian awards, he has made significant contributions to reducing malnutrition, strengthening food security, advancing peacebuilding and improving livelihoods.",
      "Dr. Onuche is skilled in stakeholder coordination with national and international partners, including Management Sciences for Health, Africa Youth Growth Foundation, WHO, World Bank, USAID, World Food Programme, UNICEF, FCDO, Tetra Tech and ActionAid. He brings strengths in team leadership, monitoring and evaluation, strategic leadership, technical support and cross-state coordination of multi-project portfolios.",
      "Beyond humanitarian work, Dr. Onuche has developed a research portfolio focused on the relationship between food security, nutrition, biochemical processes, disease prevention and the potential health benefits of plant-derived bioactive compounds, with over 13 journal publications.",
    ],
  },
  {
    name: "Patricia O. Akor",
    role: "Strategic Technical Advisor",
    photo: patriciaAkorPhoto,
    photoClassName: "team-photo--patricia",
    summary:
      "Social Development Practitioner focused on child protection, inclusion and community development.",
    profile: [
      "Patricia O. Akor is a passionate Social Development Practitioner with experience in programme management, child protection, community development, gender equality and social inclusion. She is committed to improving the wellbeing, protection and opportunities of children, women, young people and other vulnerable populations, particularly those experiencing social exclusion.",
      "Her expertise includes programme coordination, resource mobilisation, donor grant management, stakeholder engagement, advocacy, safeguarding, capacity building and community-based interventions. Patricia is dedicated to advancing inclusive and sustainable solutions that empower individuals, strengthen communities, mobilise resources and contribute to lasting social change.",
    ],
  },
  {
    name: "Dr. Abu-Saeed M Buhari",
    role: "Public Health Specialist",
    photo: abuBuhariPhoto,
    photoClassName: "team-photo--abu",
    summary:
      "Public health and development professional with over 19 years of programme experience.",
    profile: [
      "Dr. Abu-Saeed M Buhari is a Fellow of the Institute of Professional Managers and Administrators and a member of the Nigerian Institute of Management. He holds a master's degree in Public Health, an MSc in Medical Microbiology and Parasitology, and is a certified health planner and manager from the University of Ilorin, Nigeria. He also holds a Postgraduate Diploma in Education from Usmanu Danfodiyo University, Sokoto, and a Doctor of Philosophy in Leadership and Development.",
      "He is a seasoned public health specialist and development professional with more than 19 years of experience in HIV/AIDS programming, maternal and child health, nutrition, behavioural change communication, logistics and supply-chain management, key-population programming, agricultural processing and livelihood enhancement, project management, team building and capacity building.",
      "He has worked on World Bank, USAID, CDC, US DoD, Global Fund and UNICEF-funded projects. He is the Managing Consultant of MBASE Consulting Services and the Executive Director of Smiling Sheikh Global Services.",
      "His interests include counselling, stakeholder management and health-systems strengthening. He is currently the Case Finding Advisor and Mental Health Point of Contact for the Walter Reed Army Institute of Research – Africa.",
    ],
  },
  {
    name: "Aboh Peter Silas, Esq.",
    role: "Legal Department",
    photo: peterAbohPhoto,
    summary:
      "Legal Practitioner focused on litigation, corporate practice, property management and dispute resolution.",
    profile: [
      "Aboh Peter Silas is a dedicated Legal Practitioner with experience in litigation, corporate practice, property management and dispute resolution. He is committed to delivering sound legal solutions, protecting client interests and promoting justice, corporate compliance and effective governance for individuals, businesses and organisations navigating complex legal environments.",
      "His expertise includes corporate advisory, property law, litigation, dispute resolution, legal research and drafting, stakeholder engagement and advocacy. Aboh is dedicated to advancing ethical, practical and sustainable legal solutions that empower clients, strengthen institutions and contribute to good governance and the rule of law.",
    ],
  },
  {
    name: "Engr. Emmanuel Chagbe",
    role: "Information Technology Dept",
    photo: emmanuelChagbePhoto,
    summary: "Leads SCFI's website, digital tools and technology support.",
    profile: ["A fuller professional biography and background will be added soon."],
  },
];

function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="text-4xl font-semibold text-foreground uppercase">Who we are</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Shavonne Care Foundation International was incorporated on 20 April 2022 to advance
          sustainable development and improve the wellbeing of children, young people, women,
          indigent people and other vulnerable groups.
        </p>
        <h2 className="mt-12 text-2xl font-semibold text-foreground">Our mission</h2>
        <p className="mt-4 text-muted-foreground">
          To empower marginalized communities — particularly children, young people, women and
          vulnerable groups — through sustainable programs that improve health, education,
          nutrition, food security and economic opportunity.
        </p>
        <h2 className="mt-12 text-2xl font-semibold text-foreground">Our vision</h2>
        <p className="mt-4 text-muted-foreground">
          We envision a world where every individual has access to quality healthcare, education and
          economic opportunities.
        </p>
      </div>

      <section className="bg-background" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 id="team-heading" className="text-3xl font-semibold text-foreground md:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Our team brings together dedicated professionals committed to creating lasting
            opportunities for the communities we serve.
          </p>
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {TEAM_MEMBERS.map((member) => (
              <article key={member.name} className="text-center">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    width={400}
                    height={400}
                    className={`team-photo mx-auto ${member.photoClassName ?? ""}`}
                  />
                ) : (
                  <div
                    className="team-photo-placeholder mx-auto"
                    role="img"
                    aria-label={`Photo placeholder for ${member.name}`}
                  >
                    <span aria-hidden="true">Photo</span>
                  </div>
                )}
                <h3 className="mt-5 text-lg font-semibold text-card-foreground">{member.name}</h3>
                {member.role ? (
                  <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                ) : null}
                {member.summary ? <p className="team-member__summary">{member.summary}</p> : null}
                {member.profile ? (
                  <details className="team-member__profile">
                    <summary>Read profile</summary>
                    {member.profile.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </details>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Our Values Guide Every Action
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Our values define how we serve communities, work with partners and remain accountable to
            the people who place their trust in us.
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
