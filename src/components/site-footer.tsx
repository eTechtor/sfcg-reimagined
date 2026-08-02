import { Link } from "@tanstack/react-router";

const COLUMNS = [
  {
    title: "Who We Are",
    links: [
      { label: "About SCFI", to: "/about" },
      { label: "Mission and Vision", to: "/about" },
      { label: "Our Values", to: "/about" },
      { label: "Leadership", to: "/about" },
      { label: "Governance", to: "/about" },
      { label: "Strategic Plan", to: "/approach" },
    ],
  },
  {
    title: "What We Do",
    links: [
      { label: "Public Health", to: "/what-we-do" },
      { label: "Education", to: "/what-we-do" },
      { label: "Nutrition", to: "/what-we-do" },
      { label: "Agriculture and Food Security", to: "/what-we-do" },
      { label: "Empowerment and Livelihoods", to: "/what-we-do" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Donate", to: "/donate" },
      { label: "Volunteer", to: "/get-involved" },
      { label: "Partner With Us", to: "/get-involved" },
      { label: "Fund a Program", to: "/donate" },
      { label: "Subscribe to Updates", to: "/get-involved" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "News and Updates", to: "/resources" },
      { label: "Publications", to: "/resources" },
      { label: "Reports", to: "/resources" },
      { label: "Policies", to: "/resources" },
      { label: "Frequently Asked Questions", to: "/resources" },
    ],
  },
];

const LEGAL = [
  "Privacy Policy",
  "Terms of Use",
  "Safeguarding Policy",
  "Complaints and Feedback",
  "Financial Transparency",
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <p className="font-display text-xl font-semibold tracking-wide uppercase">
            Shavonne Care Foundation International
          </p>
          <p className="mt-3 max-w-sm text-sm opacity-75">
            Empowering marginalized communities — particularly children, young people,
            women and vulnerable groups — through sustainable health, education,
            nutrition, agriculture and livelihood initiatives.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase opacity-70">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm opacity-85 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-10">
        <h3 className="text-sm font-semibold tracking-[0.18em] uppercase opacity-70">
          Contact
        </h3>
        <div className="mt-3 grid gap-1 text-sm opacity-85 sm:grid-cols-2 lg:grid-cols-4">
          <p>Email: info@scfi.org</p>
          <p>Telephone: +234 800 000 0000</p>
          <p>Office address: 12 Unity Close, Central District, Abuja, Nigeria</p>
          <p>Operating hours: Monday – Friday, 9:00am – 5:00pm</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 px-5 py-5 text-xs opacity-60">
          <p>© 2026 Shavonne Care Foundation International. All rights reserved.</p>
          {LEGAL.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
