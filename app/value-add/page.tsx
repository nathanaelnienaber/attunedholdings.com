import type { Metadata } from "next";
import Image from "next/image";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { valueAddCards } from "@/lib/site";

export const metadata: Metadata = {
  title: "Value Add",
  description:
    "How Nathanael Nienaber, operating via Attuned Holding, improves acquired businesses through modernization and owner-operator leadership.",
};

export default function ValueAddPage() {
  return (
    <>
      <PageHero
        eyebrow="Value Add"
        title="Modernization without losing what made the business valuable."
        description="Operating via Attuned Holding, I bring hands-on leadership that improves systems, protects people, and compounds durable customer value."
      />

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valueAddCards.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative h-[430px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
              alt="Technology modernization team"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Operator-Buyer Mindset
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Practical improvements that respect the existing team.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Nathanael brings a rare mix of enterprise transformation, startup operating
              experience, and technical depth. That means upgrades are sequenced around
              business continuity, team trust, and measurable operating outcomes rather
              than disruptive change for its own sake.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              I am looking for a business where I can apply my operational expertise
              as the owner-operator of Attuned Holding.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
