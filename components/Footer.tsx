import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { navItems, site, socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="section border-t border-slate-200 bg-dark text-white">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-xl font-bold">{site.name}</p>
          <p className="mt-1 text-sm font-semibold text-accent-light">
            Operating as {site.entity}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Operator buyer pursuing enduring Washington essential service businesses:
            fire and life safety, compliance, MSPs, commercial field services, and
            adjacent recurring B2B services. I care about durable teams and long term
            continuity.
          </p>
        </div>

        <div>
          <p className="eyebrow-dark">Navigation</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow-dark">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
              <Mail className="h-4 w-4 text-accent-light" />
              {site.email}
            </a>
            <a href={`tel:${site.phone}`} className="flex items-center gap-3 hover:text-white">
              <Phone className="h-4 w-4 text-accent-light" />
              {site.phone}
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent-light" />
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
                <ExternalLink className="h-4 w-4 text-accent-light" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-xs text-slate-400">
        <div className="container">
          <p>
            © 2026 Nathanael Nienaber. Operating as Attuned Holdings. All rights reserved.
          </p>
          <a href="#contact" className="mt-2 inline-block hover:text-white">
            Legal Entity to conduct search efforts: Attuned Holdings LLC
          </a>
        </div>
      </div>
    </footer>
  );
}
