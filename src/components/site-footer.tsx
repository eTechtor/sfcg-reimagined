import { Link } from "@tanstack/react-router";

const COLUMNS = [
  {
    title: "Who We Are",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Our Stance", to: "/about" },
      { label: "Leadership", to: "/about" },
    ],
  },
  {
    title: "What We Do",
    links: [
      { label: "Our Approach", to: "/approach" },
      { label: "Programs", to: "/approach" },
      { label: "Where We Work", to: "/where-we-work" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Ways to Give", to: "/donate" },
      { label: "Newsletter", to: "/get-involved" },
      { label: "Careers", to: "/get-involved" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold tracking-wide uppercase">
            Common Ground
          </p>
          <p className="mt-3 max-w-xs text-sm opacity-75">
            A global network working alongside communities to turn conflict into
            cooperation.
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
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs opacity-60">
          © {new Date().getFullYear()} Common Ground Peacebuilding Network. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}