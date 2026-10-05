import { PageHero } from "../components/page-hero";
import { Mail, MapPin, Phone } from "lucide-react";
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
  "Newsletter and Updates",
  "Program Support",
  "Media Inquiry",
  "Careers",
  "Complaints or Feedback",
];

function ContactPage() {
  const [prepared, setPrepared] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's start a conversation.">
        Volunteer, explore a partnership or ask about our work. Our team would love to hear from
        you.
      </PageHero>
      <div className="site-container section-space contact-layout">
        <aside className="contact-details">
          <p className="eyebrow">Connect with SCFI</p>
          <h2>Here to listen.</h2>
          <div>
            <Mail size={22} aria-hidden="true" />
            <p>
              <strong>Email</strong>
              <a href="mailto:info@scfi.org">info@scfi.org</a>
            </p>
          </div>
          <div>
            <Phone size={22} aria-hidden="true" />
            <p>
              <strong>Telephone</strong>
              <a href="tel:+2349123056270">+234 912 305 6270</a>
            </p>
          </div>
          <div>
            <MapPin size={22} aria-hidden="true" />
            <p>
              <strong>Visit our office</strong>House 1, Afiyo Estate, Loko Junction, Orozo, FCT
              Abuja.
            </p>
          </div>
          <p>
            Monday – Friday
            <br />
            9:00am – 5:00pm
          </p>
        </aside>
        <form
          className="contact-form surface-card"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const subject = encodeURIComponent("SCFI enquiry: " + data.get("reason"));
            const body = encodeURIComponent(
              [
                data.get("message"),
                "",
                "Name: " + data.get("name"),
                "Email: " + data.get("email"),
                "Telephone: " + (data.get("telephone") || "Not provided"),
                "Organisation: " + (data.get("organisation") || "Not provided"),
              ].join("\n"),
            );
            window.location.href = "mailto:info@scfi.org?subject=" + subject + "&body=" + body;
            setPrepared(true);
          }}
        >
          <h2>How can we help?</h2>
          <p>
            This form prepares an email in your email app. Review it there and send it to our team.
            Fields marked * are required.
          </p>
          <div className="form-grid">
            <label>
              Full name *<input name="name" required maxLength={120} autoComplete="name" />
            </label>
            <label>
              Email address *
              <input name="email" required type="email" maxLength={255} autoComplete="email" />
            </label>
            <label>
              Telephone <span>(optional)</span>
              <input name="telephone" type="tel" maxLength={30} autoComplete="tel" />
            </label>
            <label>
              Organisation <span>(optional)</span>
              <input name="organisation" maxLength={150} autoComplete="organization" />
            </label>
          </div>
          <label>
            Reason for contact *
            <select name="reason" required defaultValue="">
              <option value="" disabled>
                Select a reason
              </option>
              {REASONS.map((reason) => (
                <option key={reason}>{reason}</option>
              ))}
            </select>
          </label>
          <label>
            Your message *<textarea name="message" required rows={6} maxLength={3000} />
          </label>
          <button type="submit" className="button">
            Prepare email <Mail size={18} aria-hidden="true" />
          </button>
          {prepared && (
            <p role="status" className="form-notice">
              Your email is prepared. Complete sending in your email app. If it did not open, email{" "}
              <a href="mailto:info@scfi.org">info@scfi.org</a> directly.
            </p>
          )}
        </form>
      </div>
    </>
  );
}
