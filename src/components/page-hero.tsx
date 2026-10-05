import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className={`page-hero ${image ? "page-hero--photo" : ""}`}>
      <div className="site-container page-hero__grid">
        <div className="page-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__description">{children}</p>
        </div>
        {image && (
          <img src={image} alt={imageAlt} className="page-hero__image" width={720} height={540} />
        )}
      </div>
    </section>
  );
}
