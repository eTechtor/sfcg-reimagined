import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Shavonne Care Foundation International" },
      {
        name: "description",
        content:
          "Contact SCFI to learn about our work, discuss a partnership, volunteer, support a program or request organizational information.",
      },
      { property: "og:title", content: "Contact Us — SCFI" },
      {
        property: "og:description",
        content:
          "We would love to hear from you — partnerships, donations, volunteering, media and program support.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const REASONS = [
  "General Inquiry",
  "Partnership",
  "Donation",
  "Volunteering",
  "Program Support",
  "Media Inquiry",
  "Careers",
  "Complaints or Feedback",
];

const inputClass =
  "w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-2xl px-5 py-20">
      <h1 className="text-4xl font-semibold text-foreground uppercase">
        We Would Love to Hear From You
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Contact Shavonne Care Foundation International to learn more about our work,
        discuss a partnership, volunteer, support a program or request organizational
        information.
      </p>

      <form
        className="mt-10 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <input required maxLength={120} placeholder="Full name" className={inputClass} />
        <input
          required
          type="email"
          maxLength={255}
          placeholder="Email address"
          className={inputClass}
        />
        <input
          type="tel"
          maxLength={30}
          placeholder="Telephone number"
          className={inputClass}
        />
        <input maxLength={150} placeholder="Organization" className={inputClass} />
        <select required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Reason for contact
          </option>
          {REASONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <textarea
          required
          rows={5}
          maxLength={1000}
          placeholder="Message"
          className={inputClass}
        />
        <button
          type="submit"
          className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground"
        >
          {sent ? "Thanks — your message was sent" : "Send Message"}
        </button>
      </form>

      <div className="mt-14 border-t border-border pt-8 text-sm text-muted-foreground">
        <p>Email: info@scfi.org</p>
        <p>
          Telephone: <a href="tel:+2349123056270">+2349123056270</a>
        </p>
        <p>Office address: House 1, Afiyo Estate, Loko Junction, Orozo, FCT Abuja</p>
        <p>Operating hours: Monday – Friday, 9:00am – 5:00pm</p>
      </div>
    </div>
  );
}
