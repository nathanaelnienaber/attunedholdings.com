import dynamic from "next/dynamic";
import { ContactFormToggle } from "@/components/contact/ContactFormToggle";
import { SectionIntro } from "@/components/SectionIntro";
import { contactIntroDescription, sectionIds } from "@/lib/site";

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
          description={contactIntroDescription}
        />

        <div className="mt-12">
          <h3 className="subheading">Book a meeting</h3>
          <p className="prose-narrow body mt-4">
            Pick a call type, day, and time slot. Enter your email and phone for a reminder.
          </p>
          <div className="mt-10">
            <BookingEmbed />
          </div>
        </div>

        <div className="mt-16">
          <ContactFormToggle />
        </div>
      </div>
    </section>
  );
}
