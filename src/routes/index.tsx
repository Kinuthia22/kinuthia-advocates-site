import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Scale, Target, Lightbulb } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { practiceAreas } from "@/lib/practice-areas";
import heroImg from "@/assets/hero-justice.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kinuthia Anthony & Company Advocates | Nairobi Law Firm" },
      {
        name: "description",
        content:
          "Boutique Nairobi law firm offering bespoke legal services in litigation, conveyancing, corporate, family, IP and tax law across Kenya.",
      },
      { property: "og:title", content: "Kinuthia Anthony & Company Advocates" },
      { property: "og:description", content: "Bespoke, efficient and competent legal services in Nairobi, Kenya." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-36">
            <div className="max-w-3xl">
              <p className="mb-5 font-serif text-sm font-semibold uppercase tracking-[0.25em] text-accent md:text-base">
                KINUTHIA ANTHONY & COMPANY ADVOCATES
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-tight text-primary-foreground md:text-6xl">
                Your trusted{" "}
                <span className="text-accent">legal partner.</span>
              </h1>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 md:text-sm">
                Advocates · Commissioners for Oaths · Notary Public
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                A Nairobi-based boutique law firm delivering practical, business-minded solutions to
                individuals, enterprises, government and financial institutions across Kenya and beyond.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Schedule a consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/practice-areas"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Explore practice areas
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">About the firm</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
                A go-to resource for even the most complex Kenyan legal matters.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-muted-foreground">
                Our wide range of practice areas and deep legal knowledge mean we deliver timely, effective
                solutions that always add value to our clients' individual and business well-being. We are
                committed to keeping our promises — while never compromising our principles.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Built on insightful and innovative deal structuring, a keen ability to understand business
                imperatives, and a strong focus on the best, most cost-effective legal outcome.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
              >
                More about us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Three pillars */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: Target, title: "The right approach", body: "Clear, straightforward solutions. We think ahead and identify issues before they impact you — no surprises." },
                { icon: Scale, title: "The right expertise", body: "A range of technical specialists with deep, sector-specific knowledge across Kenyan law." },
                { icon: Lightbulb, title: "The right mind-set", body: "We think forward and are passionate about adding measurable value to every client engagement." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-sm border-l-2 border-accent bg-card p-8 shadow-[var(--shadow-card)]">
                  <Icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice areas snapshot */}
        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Practice Areas</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Comprehensive legal services
              </h2>
            </div>
            <Link to="/practice-areas" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
              View all areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.slice(0, 8).map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-card p-6 transition-colors hover:bg-secondary">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-serif text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why choose us */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Why clients choose us</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">
                Independent-minded individuals. A common service ethos.
              </h2>
              <p className="mt-5 text-primary-foreground/75">
                Our success is built on insightful deal structuring, a keen understanding of business and
                economic imperatives, and an unrelenting focus on the best outcome for our clients.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Bespoke legal solutions tailored to each client's needs",
                "Cost-effective outcomes with full transparency on fees",
                "Cross-sector expertise across the Kenyan legal landscape",
                "Trusted by individuals, SMEs, multinationals and government",
                "Confidentiality, integrity and uncompromising ethical standards",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="rounded-sm border border-border bg-card p-10 text-center shadow-[var(--shadow-elegant)] md:p-16">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Speak with an advocate today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Whether you're navigating a dispute, structuring a transaction, or seeking proactive legal advice —
              our team is ready to help.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+254793980462"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
              >
                Call +254 793 980 462
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
