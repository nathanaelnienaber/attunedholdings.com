import type { Metadata } from "next";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nathanael Nienaber about Washington manufacturing or environmental business acquisition opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Share a confidential acquisition opportunity."
        description="Founder, broker, lender, and advisor conversations are welcomed. NDA review is available before sensitive materials are exchanged."
      />

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-6">
            <div className="rounded-3xl bg-slate-950 p-8 text-white">
              <ShieldCheck className="h-10 w-10 text-sky-300" />
              <h2 className="mt-5 text-2xl font-bold">Direct and confidential.</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Nathanael is prepared to sign an NDA and review high-level materials
                quickly when a business fits the stated criteria.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950">Contact Details</h2>
              <div className="mt-6 space-y-4 text-slate-700">
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-sky-700">
                  <Mail className="h-5 w-5 text-sky-600" />
                  {site.email}
                </a>
                <a href={`tel:${site.phone}`} className="flex items-center gap-3 hover:text-sky-700">
                  <Phone className="h-5 w-5 text-sky-600" />
                  {site.phone}
                </a>
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-sky-600" />
                  {site.location}
                </p>
              </div>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
