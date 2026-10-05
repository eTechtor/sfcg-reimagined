import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Heart, Menu, Search } from "lucide-react";

import logoMark from "../assets/scfi-mark.png";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";

const NAV = [
  { label: "Home", to: "/", description: "Welcome to Shavonne Care Foundation International." },
  { label: "About Us", to: "/about", description: "Our story, mission, vision, values and team." },
  {
    label: "Our Work",
    to: "/what-we-do",
    description:
      "Health, education, nutrition, agriculture, food security and empowerment programs.",
  },
  {
    label: "Our Approach",
    to: "/approach",
    description: "Our approach to sustainable change, community partnerships and accountability.",
  },
  {
    label: "News & Stories",
    to: "/resources",
    description: "News, program updates, publications, reports and resources.",
  },
  {
    label: "Get Involved",
    to: "/get-involved",
    description: "Volunteer, partner with us and support community-led development.",
  },
] as const;

const SEARCH_PAGES = [
  ...NAV,
  {
    label: "Donate",
    to: "/donate",
    description: "Support our mission and help communities thrive.",
  },
  {
    label: "Contact Us",
    to: "/contact",
    description: "Office address in Orozo, Abuja, telephone, email and social media.",
  },
  {
    label: "Careers",
    to: "/careers",
    description:
      "Current opportunities and ways to work with Shavonne Care Foundation International.",
  },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);
  const [involvementOpen, setInvolvementOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results = SEARCH_PAGES.filter((page) =>
    terms.every((term) => `${page.label} ${page.description}`.toLowerCase().includes(term)),
  );

  return (
    <header
      className={`site-header ${pathname === "/" ? "site-header--overlay" : "site-header--solid"}`}
    >
      <div className="site-header__inner">
        <Link
          to="/"
          className="site-brand"
          aria-label="Shavonne Care Foundation International — Home"
        >
          <img src={logoMark} alt="" width={72} height={72} className="site-brand__mark" />
          <span className="site-brand__name">
            <span>Shavonne Care</span>
            <span>Foundation International</span>
            <span className="site-brand__initials">(SCFI)</span>
          </span>
          <span className="site-brand__compact">SCFI</span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {NAV.map((item) =>
            item.to === "/get-involved" ? (
              <div key={item.to} className="site-nav__item site-nav__item--has-menu">
                <Link
                  to={item.to}
                  className="site-nav__link"
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "site-nav__link--active" }}
                >
                  {item.label}
                </Link>
                <button
                  type="button"
                  className="site-nav__toggle"
                  aria-label="Show Get Involved links"
                  aria-expanded={involvementOpen}
                  aria-controls="get-involved-menu"
                  onClick={() => setInvolvementOpen((open) => !open)}
                >
                  <ChevronDown size={16} aria-hidden="true" />
                </button>
                {involvementOpen ? (
                  <div id="get-involved-menu" className="site-nav__submenu">
                    <Link to="/careers" onClick={() => setInvolvementOpen(false)}>
                      Careers
                    </Link>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="site-nav__link"
                activeOptions={{ exact: true }}
                activeProps={{ className: "site-nav__link--active" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="site-header__actions">
          <Dialog
            open={searchOpen}
            onOpenChange={(open) => {
              setSearchOpen(open);
              if (!open) setQuery("");
            }}
          >
            <DialogTrigger asChild>
              <button className="site-icon-button" aria-label="Search the website">
                <Search aria-hidden="true" size={23} />
              </button>
            </DialogTrigger>
            <DialogContent className="site-search">
              <DialogTitle className="font-sans text-2xl">Search SCFI</DialogTitle>
              <DialogDescription>
                Find our work, stories and ways to get involved.
              </DialogDescription>
              <label className="site-search__input">
                <Search size={20} aria-hidden="true" />
                <span className="sr-only">Search pages</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      event.preventDefault();
                      setSearchOpen(false);
                      setQuery("");
                    }
                  }}
                  placeholder="Try health, volunteer or contact…"
                  autoComplete="off"
                />
              </label>
              <p className="text-sm text-muted-foreground" role="status">
                {terms.length
                  ? `${results.length} ${results.length === 1 ? "page" : "pages"} found`
                  : "Explore our pages"}
              </p>
              <ul className="site-search__results">
                {results.map((page) => (
                  <li key={page.to}>
                    <Link
                      to={page.to}
                      onClick={() => {
                        setSearchOpen(false);
                        setQuery("");
                      }}
                      className="site-search__result"
                    >
                      <span>
                        <strong>{page.label}</strong>
                        <span>{page.description}</span>
                      </span>
                      <ArrowUpRight size={19} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
                {results.length === 0 && (
                  <li className="py-5 text-muted-foreground">
                    No matching pages. Try “education”, “donate” or “contact”.
                  </li>
                )}
              </ul>
            </DialogContent>
          </Dialog>

          <Link to="/donate" className="site-donate">
            <Heart size={22} fill="currentColor" aria-hidden="true" />
            <span>Donate</span>
          </Link>

          <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
            <DialogTrigger asChild>
              <button
                className="site-icon-button site-menu-trigger"
                aria-label="Open navigation menu"
              >
                <Menu size={25} aria-hidden="true" />
              </button>
            </DialogTrigger>
            <DialogContent className="site-mobile-menu">
              <DialogTitle className="font-sans text-2xl text-white">Explore SCFI</DialogTitle>
              <DialogDescription className="text-white/70">
                Shavonne Care Foundation International
              </DialogDescription>
              <nav aria-label="Mobile navigation" className="mt-3 flex flex-col">
                {NAV.map((item) => (
                  <div key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="site-mobile-menu__link"
                      activeOptions={{ exact: true }}
                      activeProps={{ className: "site-mobile-menu__link--active" }}
                    >
                      {item.label}
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </Link>
                    {item.to === "/get-involved" ? (
                      <Link
                        to="/careers"
                        onClick={() => setMenuOpen(false)}
                        className="site-mobile-menu__sub-link"
                      >
                        Careers
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </Link>
                    ) : null}
                  </div>
                ))}
                <Link to="/donate" onClick={() => setMenuOpen(false)} className="site-donate mt-6">
                  <Heart size={20} fill="currentColor" aria-hidden="true" />
                  Donate
                </Link>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
