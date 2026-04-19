import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-accent/40">
              <span className="font-serif text-lg font-bold text-accent">K</span>
            </div>
            <div>
              <p className="font-serif text-base font-semibold">Kinuthia Anthony</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">
                & Company Advocates
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            A dynamic boutique law firm in Nairobi, Kenya — providing bespoke, efficient and competent
            legal services with integrity to individuals, businesses, government and financial institutions.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-accent">
            Navigate
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-primary-foreground/80 hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent">About</Link></li>
            <li><Link to="/practice-areas" className="text-primary-foreground/80 hover:text-accent">Practice Areas</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-accent">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Office A310, 3rd Floor,<br />Madonna House Annex,<br />Westlands Rd, Nairobi</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+254793980462" className="hover:text-accent">+254 793 980 462</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:advocateskinuthia@gmail.com" className="hover:text-accent break-all">
                advocateskinuthia@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} Kinuthia Anthony & Company Advocates. All rights reserved.</p>
          <p>Advocates of the High Court of Kenya</p>
        </div>
      </div>
    </footer>
  );
}
