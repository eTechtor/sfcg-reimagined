import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/scfi-logo.png.asset.json";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Who We Are", to: "/about" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Our Approach", to: "/approach" },
  { label: "Resources", to: "/resources" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Shavonne Care Foundation International logo"
            width={56}
            height={56}
            className="h-12 w-12 rounded-sm bg-white object-contain p-1"
          />
          <span className="font-display text-base leading-tight font-semibold tracking-wide uppercase">
            Shavonne Care Foundation
            <span className="block text-[0.65rem] font-normal tracking-[0.25em] opacity-70">
              International · SCFI
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-5 xl:flex">
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
          <Link
            to="/donate"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition hover:brightness-105"
          >
            Donate
          </Link>
          <Link
            to="/get-involved"
            className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-brand-red-foreground transition hover:brightness-110"
          >
            Partner With Us
          </Link>
        </nav>

        <button
          className="ml-auto xl:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-5 pt-3 pb-5 xl:hidden">
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
            Donate
          </Link>
          <Link
            to="/get-involved"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-brand-red px-5 py-2 text-center text-sm font-semibold text-brand-red-foreground"
          >
            Partner With Us
          </Link>
        </nav>
      )}
    </header>
  );
}
