import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Kinuthia Anthony & Company Advocates, Nairobi" },
      {
        name: "description",
        content:
          "Visit Kinuthia Anthony & Company Advocates at Madonna House Annex, Westlands Rd, Nairobi. Call +254 793 980 462 to schedule a consultation.",
      },
      { property: "og:title", content: "Contact Kinuthia Anthony & Company Advocates" },
      { property: "og:description", content: "Get in touch with our Nairobi law firm — call +254 793 980 462." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you — we'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <Toaster />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Contact</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold md:text-5xl">
              Speak with an advocate.
            </h1>
            <p className="mt-6 max-w-2xl text-primary-foreground/80">
              Whether you need urgent counsel or are exploring a long-term legal partnership — we're here to help.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
          <div className="grid gap-12 md:grid-cols-5">
            <aside className="space-y-6 md:col-span-2">
              <div className="rounded-sm border-l-2 border-accent bg-card p-6 shadow-[var(--shadow-card)]">
                <MapPin className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">Office</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Office No. A310, 3rd Floor<br />
                  Madonna House Annex<br />
                  Westlands Road, Nairobi, Kenya
                </p>
              </div>
              <div className="rounded-sm border-l-2 border-accent bg-card p-6 shadow-[var(--shadow-card)]">
                <Phone className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">Phone</h3>
                <a href="tel:+254793980462" className="mt-2 block text-sm text-muted-foreground hover:text-accent">
                  +254 793 980 462
                </a>
              </div>
              <div className="rounded-sm border-l-2 border-accent bg-card p-6 shadow-[var(--shadow-card)]">
                <Mail className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">Email</h3>
                <a href="mailto:advocateskinuthia@gmail.com" className="mt-2 block break-all text-sm text-muted-foreground hover:text-accent">
                  advocateskinuthia@gmail.com
                </a>
              </div>
              <div className="rounded-sm border-l-2 border-accent bg-card p-6 shadow-[var(--shadow-card)]">
                <Clock className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">Office hours</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Mon – Fri: 8:30am – 5:30pm<br />
                  Sat: By appointment<br />
                  Sun: Closed
                </p>
              </div>
            </aside>

            <div className="md:col-span-3">
              <div className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share a few details about your matter and we'll get back to you confidentially.
                </p>
                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Full name</label>
                      <input id="name" name="name" required className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
                      <input id="phone" name="phone" type="tel" className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input id="email" name="email" type="email" required className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">Matter / subject</label>
                    <input id="subject" name="subject" required className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground">How can we help?</label>
                    <textarea id="message" name="message" rows={5} required className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    {submitting ? "Sending..." : "Send message"}
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Submissions are treated confidentially. This form does not create an advocate–client relationship.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
            <div className="overflow-hidden rounded-sm border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="Kinuthia Anthony & Company Advocates — Office Location"
                src="https://www.google.com/maps?q=Madonna+House+Annex+Westlands+Road+Nairobi&output=embed"
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
