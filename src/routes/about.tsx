import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Scale, Lightbulb, ShieldCheck, GraduationCap, Briefcase, Linkedin } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import founderPhoto from "@/assets/founder-anthony-kinuthia.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Kinuthia Anthony & Company Advocates" },
      {
        name: "description",
        content:
          "Learn about Kinuthia Anthony & Company Advocates — a Nairobi boutique law firm built on integrity, expertise and bespoke client service.",
      },
      { property: "og:title", content: "About Kinuthia Anthony & Company Advocates" },
      { property: "og:description", content: "Boutique Nairobi law firm built on integrity, expertise and bespoke client service." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">About the firm</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold md:text-5xl">
              A boutique Nairobi law firm — built for outcomes that matter.
            </h1>
            <p className="mt-6 max-w-2xl text-primary-foreground/80">
              We pride ourselves in providing bespoke, efficient and competent legal services with integrity to
              individuals, businesses and entrepreneurs, government, multinationals and financial institutions.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our story</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground">
                Insight. Innovation. Integrity.
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground md:col-span-7">
              <p>
                Kinuthia Anthony & Company Advocates is a dynamic boutique law firm based in Nairobi, Kenya. We
                serve individuals, businesses and entrepreneurs, government, multinationals and financial
                institutions on a wide spectrum of legal matters.
              </p>
              <p>
                Our wide range of practice areas and deep legal knowledge make us a go-to resource for even the
                most complex Kenyan legal matters. We deliver timely, effective solutions that always add value
                to our clients' individual and business well-being.
              </p>
              <p>
                We are committed to keeping our promises while never compromising our principles. Our success is
                built on a solid foundation of insightful and innovative deal structuring and legal advice; a
                keen ability to understand business and economic imperatives; and a strong focus on achieving the
                best and most cost-effective legal outcomes for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
            <div className="grid gap-12 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5">
                <div className="relative mx-auto aspect-square w-full max-w-sm scroll-mt-24 overflow-hidden rounded-full border-4 border-accent/30 shadow-[var(--shadow-elegant)]">
                  <img
                    src={founderPhoto}
                    alt="Anthony M. Kinuthia, Managing Partner at Kinuthia Anthony & Company Advocates"
                    width={760}
                    height={880}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="md:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Meet the Managing Partner
                </p>
                <h2 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">
                  Anthony M. Kinuthia
                </h2>
                <p className="mt-2 text-sm font-medium text-accent">
                  Managing Partner & Proprietor · Advocate of the High Court of Kenya
                </p>
                <p className="mt-6 leading-relaxed text-primary-foreground/85">
                  Anthony founded Kinuthia Anthony & Company Advocates in 2021 after nearly a decade of
                  practice at one of Nairobi's leading firms. He brings deep experience across litigation,
                  constitutional and human rights law, commercial transactions, banking and finance — paired
                  with a pragmatic, business-minded approach to every matter.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-2 text-accent">
                      <Briefcase className="h-4 w-4" />
                      <h3 className="text-xs font-semibold uppercase tracking-wider">Experience</h3>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
                      <li>Proprietor — Kinuthia Anthony & Company Advocates (2021 – Present)</li>
                      <li>Senior Associate — Nyachoti & Company Advocates (2019 – 2021)</li>
                      <li>Junior Associate — Nyachoti & Company Advocates (2017 – 2018)</li>
                      <li>Pupil — Nyachoti & Company Advocates (2016)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-accent">
                      <GraduationCap className="h-4 w-4" />
                      <h3 className="text-xs font-semibold uppercase tracking-wider">Education</h3>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
                      <li>Post-Graduate Diploma in Law — Kenya School of Law (2015)</li>
                      <li>Bachelor of Laws (LL.B.) — University of Nairobi (2010 – 2014)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/anthony-m-kinuthia-611358a3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
                  >
                    Schedule a meeting <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">What we bring</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
              The right approach, expertise and mind-set.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { icon: Target, title: "The right approach", body: "Clear, straightforward solutions. We think ahead, identify issues likely to impact our clients, and ensure there are no surprises — addressing legal risks early." },
                { icon: Scale, title: "The right expertise", body: "A range of technical specialists with deep sector knowledge across the breadth of Kenyan law and regulatory practice." },
                { icon: Lightbulb, title: "The right mind-set", body: "We think forward and are passionate about adding value — measured by the impact our work has on each client's goals." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-sm bg-card p-8 shadow-[var(--shadow-card)]">
                  <Icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-sm border-l-2 border-accent bg-card p-8 shadow-[var(--shadow-card)]">
              <ShieldCheck className="h-8 w-8 text-accent" />
              <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">Our mission</h3>
              <p className="mt-4 text-muted-foreground">
                To deliver bespoke, efficient and competent legal services with integrity — adding measurable
                value to every client we serve.
              </p>
            </div>
            <div className="rounded-sm border-l-2 border-accent bg-card p-8 shadow-[var(--shadow-card)]">
              <Scale className="h-8 w-8 text-accent" />
              <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">Our values</h3>
              <p className="mt-4 text-muted-foreground">
                Integrity, excellence, confidentiality and a relentless commitment to our clients' best
                interests — anchored in the highest standards of legal practice.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Work with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
