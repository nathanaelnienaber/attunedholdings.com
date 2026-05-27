import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { criteriaCards } from "@/lib/site";

export const metadata: Metadata = {
  title: "Acquisition Criteria",
  description:
    "Nathanael Nienaber is acquiring Washington manufacturing and environmental businesses, operating via Attuned Holding.",
};

export default function CriteriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Acquisition Criteria"
        title="Specific parameters for sellers, brokers, and advisors."
        description="Operating via Attuned Holding, I am focused on profitable Washington businesses where founder legacy, employee continuity, and modernization can compound value."
      />

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {criteriaCards.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Best Fit
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Ideal target and transition situations.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              I am looking for a business where I can apply my operational expertise
              as the owner-operator of Attuned Holding.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Outdated IT", "Manual Processes", "Founder Retirement"].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 p-6">
                <p className="text-lg font-bold text-slate-950">{item}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  A practical opportunity to preserve what works while upgrading systems,
                  process, and operating cadence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
