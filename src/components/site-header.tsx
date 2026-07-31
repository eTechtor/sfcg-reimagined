import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";

const NAV = [
  { label: "Who We Are", to: "/about" },
  { label: "Where We Work", to: "/where-we-work" },
  { label: "What We Do", to: "/approach" },
  { label: "Get Involved", to: "/get-involved" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 rotate-45 place-items-center rounded-sm bg-primary">
            <span className="h-3 w-3 -rotate-45 rounded-[2px] bg-accent" />
          </span>
          <span className="font-display text-lg leading-none font-semibold tracking-wide uppercase">
            Common Ground
            <span className="block text-[0.65rem] font-normal tracking-[0.25em] opacity-70">
              Peacebuilding Network
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium tracking-wide opacity-90 transition hover:opacity-100"
              activeProps={{ className: "opacity-100 underline underline-offset-8" }}
            >
              {item.label}
            </Link>
          ))}
          <button aria-label="Search" className="opacity-80 transition hover:opacity-100">
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/get-involved"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Subscribe
          </Link>
          <Link
            to="/donate"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition hover:brightness-105"
          >
            Give
          </Link>
        </nav>

        <button
          className="ml-auto lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-5 pt-3 pb-5 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium opacity-90"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-accent px-5 py-2 text-center text-sm font-semibold text-accent-foreground"
          >
            Give
          </Link>
        </nav>
      )}
    </header>
  );
}