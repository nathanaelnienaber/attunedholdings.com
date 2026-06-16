import dynamic from "next/dynamic";
import { ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionIntro } from "@/components/SectionIntro";
import { sectionIds } from "@/lib/site";

const BookingEmbed = dynamic(
  () => import("@/components/contact/BookingEmbed").then((module) => module.BookingEmbed),
  {
    ssr: false,
    loading: () => <p className="text-slate-500">Loading calendar...</p>,
  },
);

export function ContactSection() {
  return (
    <section id={sectionIds.contact} className="section section-y scroll-mt-24 bg-surface">
      <div className="container">
        <SectionIntro
          eyebrow="Contact"
          title="Share a confidential acquisition opportunity."
          description="Founder, broker, lender, and advisor conversations are welcomed. NDA review is available before sensitive materials are exchanged."
        />

        <div className="mt-12">
          <h3 className="subheading">Book a meeting</h3>
          <p className="body mt-4 leading-7">
            Pick a call type, then day, then time slot. You will need to enter
            your email and phone number so I can reach you and send a meeting reminder.
          </p>
          <div className="mt-10">
            <BookingEmbed />
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-10">
          <div className="rounded-5 bg-dark p-8 text-white">
            <ShieldCheck className="h-10 w-10 text-accent-light" />
            <h3 className="subheading mt-5 text-white">Direct and confidential.</h3>
            <p className="body-dark mt-4 leading-7">
              I am prepared to sign an NDA and review high-level materials
              quickly when a business fits the stated criteria.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
