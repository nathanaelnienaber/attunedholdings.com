import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ExternalLink, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { site, socialLinks } from "@/lib/site";
import { ContactForm } from "./ContactForm";

const BookingEmbed = dynamic(
  () => import("./BookingEmbed").then((module) => module.BookingEmbed),
  {
    ssr: false,
    loading: () => <p className="text-slate-500">Loading calendar...</p>,
  },
);

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nathanael Nienaber or schedule a video, phone, or in-person meeting about Washington manufacturing or environmental business acquisition opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Share a confidential acquisition opportunity."
        description="Founder, broker, lender, and advisor conversations are welcomed. NDA review is available before sensitive materials are exchanged."
      />

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Book a meeting
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Pick a call type, then day, then time slot. You will need to enter
            your email and phone number so Nathanael can reach you and send a
            meeting reminder.
          </p>
          <div className="mt-10">
            <BookingEmbed />
          </div>
        </div>
      </section>

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
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 hover:text-sky-700"
                  >
                    <ExternalLink className="h-5 w-5 text-sky-600" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
