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
    <section
      id={sectionIds.contact}
      className="scroll-mt-24 bg-slate-50 px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Contact"
          title="Share a confidential acquisition opportunity."
          description="Founder, broker, lender, and advisor conversations are welcomed. NDA review is available before sensitive materials are exchanged."
        />

        <div className="mt-12">
          <h3 className="text-2xl font-bold tracking-tight text-slate-950">Book a meeting</h3>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Pick a call type, then day, then time slot. You will need to enter
            your email and phone number so I can reach you and send a meeting reminder.
          </p>
          <div className="mt-10">
            <BookingEmbed />
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-6">
            <div className="rounded-5 bg-slate-950 p-8 text-white">
              <ShieldCheck className="h-10 w-10 text-sky-300" />
              <h3 className="mt-5 text-2xl font-bold">Direct and confidential.</h3>
              <p className="mt-4 leading-7 text-slate-300">
                I am prepared to sign an NDA and review high-level materials
                quickly when a business fits the stated criteria.
              </p>
            </div>
          </aside>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
