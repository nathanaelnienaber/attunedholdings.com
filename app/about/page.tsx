import type { Metadata } from "next";
import Image from "next/image";
import { Award, GraduationCap, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { aboutTimeline } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Nathanael Nienaber",
  description:
    "Nathanael Nienaber, former Boeing leader and MBA, is acquiring and operating Washington businesses through Attuned Holdings.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A technical operator with startup grit and enterprise transformation experience."
        description="I am Nathanael Nienaber. I am establishing Attuned Holdings LLC to acquire and operate one enduring Washington business for the next 20 years."
      />

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative h-[420px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Professional leadership meeting"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Personal Mission
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Why acquisition?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              I am not building a faceless fund. I am preparing to be the
              owner-operator who shows up in the business, works with the team, and
              applies my experience from Boeing transformation, startup leadership,
              and service and compliance operations to protect and grow the company.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              My goal is to buy a legacy business where the founder, employees, and
              customers can trust that continuity matters as much as modernization.
            </p>
            <div className="mt-8 space-y-6">
              {aboutTimeline.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 p-6">
                  <h2 className="text-xl font-bold text-slate-950">{item.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-7 shadow-sm">
            <GraduationCap className="h-9 w-9 text-sky-600" />
            <h2 className="mt-5 text-xl font-bold text-slate-950">Education</h2>
            <p className="mt-3 leading-7 text-slate-600">
              MBA from Northwest University with a focus on practical leadership,
              finance, and business operations.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-7 shadow-sm">
            <Award className="h-9 w-9 text-sky-600" />
            <h2 className="mt-5 text-xl font-bold text-slate-950">Certifications</h2>
            <p className="mt-3 leading-7 text-slate-600">
              PMP, Scrum Master, and Cloud Genius certified in AI/ML and infrastructure.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-7 shadow-sm">
            <HeartHandshake className="h-9 w-9 text-sky-600" />
            <h2 className="mt-5 text-xl font-bold text-slate-950">Values</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Decisive, transparent, technically grounded, and committed to honoring the
              founder&apos;s legacy.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
