import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { practiceAreas } from "@/lib/practice-areas";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas | Kinuthia Anthony & Company Advocates" },
      {
        name: "description",
        content:
          "Litigation, conveyancing, corporate, family, IP, tax and more — comprehensive Kenyan legal services from Kinuthia Anthony & Company Advocates in Nairobi.",
      },
      { property: "og:title", content: "Practice Areas — Kinuthia Anthony & Company Advocates" },
      { property: "og:description", content: "Comprehensive legal services across the Kenyan legal landscape." },
      { property: "og:url", content: "https://advocateskinuthia.co.ke/practice-areas" },
    ],
    links: [{ rel: "canonical", href: "https://advocateskinuthia.co.ke/practice-areas" }],
  }),
  component: PracticeAreasPage,
});

function PracticeAreasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Practice Areas</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold md:text-5xl">
              Comprehensive legal services across Kenya.
            </h1>
            <p className="mt-6 max-w-2xl text-primary-foreground/80">
              From dispute resolution to deal structuring — our team brings deep technical expertise and a
              business-first mind-set to every matter.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
          <div className="grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map(({ icon: Icon, title, description }) => (
              <article key={title} className="bg-card p-7 transition-colors hover:bg-secondary">
                <Icon className="h-7 w-7 text-accent" />
                <h2 className="mt-5 font-serif text-lg font-semibold text-foreground">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-sm border border-border bg-card p-10 text-center shadow-[var(--shadow-card)]">
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Don't see your matter listed?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Our team handles a far broader range of matters than we can list. Reach out — we'd be glad to
              advise you.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Contact our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
