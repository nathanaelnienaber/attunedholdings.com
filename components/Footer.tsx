import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { navItems, site, socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xl font-bold">{site.name}</p>
          <p className="mt-1 text-sm font-semibold text-sky-300">
            Operating as {site.entity}
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Operator-buyer pursuing enduring Washington essential service businesses
            — fire & life safety, compliance, MSPs, commercial field services, and
            adjacent recurring B2B services — with durable teams and long-term
            continuity.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Navigation
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Contact
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
              <Mail className="h-4 w-4 text-sky-300" />
              {site.email}
            </a>
            <a href={`tel:${site.phone}`} className="flex items-center gap-3 hover:text-white">
              <Phone className="h-4 w-4 text-sky-300" />
              {site.phone}
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-sky-300" />
              {site.location}
            </p>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <ExternalLink className="h-4 w-4 text-sky-300" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-400">
        <p>
          © 2026 Nathanael Nienaber. Operating as Attuned Holdings. All rights reserved.
        </p>
        <a href="/contact" className="mt-2 inline-block hover:text-white">
          Legal Entity to conduct search efforts: Attuned Holdings LLC
        </a>
      </div>
    </footer>
  );
}
