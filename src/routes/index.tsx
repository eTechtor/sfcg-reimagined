import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Heart, Play, Pause } from "lucide-react";

import communityGatheringImage from "../assets/hero-community-gathering.jpg";
import healthOutreachImage from "../assets/hero-health-outreach.jpg";
import communityListeningImage from "../assets/hero-community-listening.jpg";
import dialogueImage from "../assets/scfi-training.jpg";
import approachImage from "../assets/scfi-board-meeting.jpg";
import { ProgrammeGrid } from "../components/programme-grid";

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

const HERO_SLIDES = [
  communityGatheringImage,
  healthOutreachImage,
  communityListeningImage,
] as const;

function Index() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const slideshow = window.setInterval(() => {
      setActiveHeroSlide((currentSlide) => (currentSlide + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => window.clearInterval(slideshow);
  }, [paused, reducedMotion]);

  const showPreviousHeroSlide = () => {
    setActiveHeroSlide((currentSlide) =>
      currentSlide === 0 ? HERO_SLIDES.length - 1 : currentSlide - 1,
    );
  };

  const showNextHeroSlide = () => {
    setActiveHeroSlide((currentSlide) => (currentSlide + 1) % HERO_SLIDES.length);
  };

  return (
    <>
      <section className="home-hero" aria-labelledby="hero-heading">
        {HERO_SLIDES.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            aria-hidden="true"
            fetchPriority={index === 0 ? "high" : "auto"}
            width={1280}
            height={720}
            className={`home-hero__image ${index === activeHeroSlide ? "home-hero__image--active" : ""}`}
          />
        ))}
        <div className="home-hero__shade" />
        <div className="home-hero__inner">
          <p className="home-hero__eyebrow">Shavonne Care Foundation International</p>
          <h1 id="hero-heading" className="home-hero__heading">
            Building healthier, <br />
            educated and economically <span>empowered communities</span>
          </h1>
          <p className="home-hero__description">
            We work alongside underserved communities to improve health, education and livelihoods.
            Together, we create opportunities for children, women and young people to thrive.
          </p>
          <div className="home-hero__actions">
            <Link to="/what-we-do" className="hero-button hero-button--primary">
              Explore Our Work <ArrowRight size={21} aria-hidden="true" />
            </Link>
            <Link to="/donate" className="hero-button hero-button--outline">
              Support Our Mission <Heart size={21} fill="currentColor" aria-hidden="true" />
            </Link>
          </div>
          <Link to="/about" className="home-hero__story">
            Read Our Story <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="home-hero__slider-controls" role="group" aria-label="Hero photo controls">
          <button
            type="button"
            className="home-hero__slider-arrow"
            onClick={showPreviousHeroSlide}
            aria-label="Show previous hero photo"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="home-hero__slider-arrow"
            aria-label={paused || reducedMotion ? "Play hero slideshow" : "Pause hero slideshow"}
            onClick={() => {
              setReducedMotion(false);
              setPaused(!(paused || reducedMotion));
            }}
          >
            {paused || reducedMotion ? (
              <Play size={18} aria-hidden="true" />
            ) : (
              <Pause size={18} aria-hidden="true" />
            )}
          </button>
          <div className="home-hero__slider-dots" aria-label="Choose a hero photo">
            {HERO_SLIDES.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`home-hero__slider-dot ${index === activeHeroSlide ? "home-hero__slider-dot--active" : ""}`}
                onClick={() => setActiveHeroSlide(index)}
                aria-label={`Show hero photo ${index + 1}`}
                aria-pressed={index === activeHeroSlide}
              />
            ))}
          </div>
          <button
            type="button"
            className="home-hero__slider-arrow"
            onClick={showNextHeroSlide}
            aria-label="Show next hero photo"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container split-section">
          <img
            src={dialogueImage}
            alt="Participants taking part in an SCFI training session"
            width={1200}
            height={900}
            loading="lazy"
            className="editorial-image"
          />
          <div>
            <p className="eyebrow">People at the heart of change</p>
            <h2>Opportunity should reach everyone.</h2>
            <p>
              Access to healthcare, education and a sustainable income can change a family's future.
              SCFI works with communities that too often face barriers to these essentials.
            </p>
            <p>
              Incorporated in 2022, we bring people, practical knowledge and partnerships together
              to support lasting change.
            </p>
            <Link to="/about" className="text-link">
              Get to know SCFI <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-space bg-sand">
        <div className="site-container">
          <div className="section-heading">
            <p className="eyebrow">Our work</p>
            <h2>
              Connected challenges.
              <br />
              Shared possibilities.
            </h2>
            <p>
              Five areas of focus, with the health, dignity and independence of communities at their
              centre.
            </p>
          </div>
          <ProgrammeGrid links />
        </div>
      </section>
      <section className="section-space">
        <div className="site-container split-section">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2>Lasting change begins with listening.</h2>
            <p>
              We listen to local priorities, work through partnerships and strengthen the skills
              communities need to shape their own future.
            </p>
            <p>
              Learning and accountability guide how we design, deliver and improve our programmes.
            </p>
            <Link to="/approach" className="text-link">
              How we work <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <img
            src={approachImage}
            alt="Stakeholders meeting around a conference table"
            width={1200}
            height={900}
            loading="lazy"
            className="editorial-image"
          />
        </div>
      </section>
      <section className="section-space bg-sand">
        <div className="site-container news-preview">
          <div>
            <p className="eyebrow">News & stories</p>
            <h2>Stay close to our work.</h2>
            <p>
              Our first programme stories are being prepared. In the meantime, follow SCFI on our
              official social channels.
            </p>
          </div>
          <Link to="/resources" className="button button--outline">
            Visit News & Stories <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="support-banner">
        <div className="site-container">
          <p className="eyebrow">A shared commitment</p>
          <h2>
            Help communities build
            <br />a stronger future.
          </h2>
          <p>Contribute your time, share your expertise or support a programme.</p>
          <div className="button-row">
            <Link to="/get-involved" className="button button--light">
              Get involved <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/donate" className="button button--outline-light">
              Support our mission
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
