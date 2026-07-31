import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Who We Are — Common Ground" },
      {
        name: "description",
        content:
          "Common Ground is a peacebuilding network of local teams working with communities to transform conflict into cooperation.",
      },
      { property: "og:title", content: "Who We Are — Common Ground" },
      {
        property: "og:description",
        content: "A peacebuilding network of local teams transforming conflict into cooperation.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="text-4xl font-semibold text-foreground uppercase">Who we are</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        We are a network of local peacebuilders — mediators, journalists, youth
        organizers, faith leaders — who believe conflict is inevitable but violence is
        not.
      </p>
      <h2 className="mt-12 text-2xl font-semibold text-foreground">Our stance</h2>
      <p className="mt-4 text-muted-foreground">
        We practice courageous multipartiality: we take a side, and that side is peace.
        That means talking with people others refuse to talk to, and holding space where
        every voice is heard and none dominates.
      </p>
      <h2 className="mt-12 text-2xl font-semibold text-foreground">How we are led</h2>
      <p className="mt-4 text-muted-foreground">
        Programs are designed and led by people from the places they serve, supported by
        a small global team focused on learning, evidence and long-term partnership.
      </p>
    </div>
  );
}