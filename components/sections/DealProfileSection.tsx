import { DealSheet } from "@/components/DealSheet";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionIntro } from "@/components/SectionIntro";
import {
  dealDetailCards,
  dealProfileRows,
  essentialIndustries,
  idealSituations,
  sectionIds,
} from "@/lib/site";

export function DealProfileSection() {
  return (
    <section
      id={sectionIds.fit}
      className="scroll-mt-24 bg-slate-50 px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Acquisition Fit"
          title="Specific parameters for sellers, brokers, and advisors."
          description="Profitable Washington service businesses where founder legacy, employee continuity, and long term operator ownership matter."
        />

        <div className="mt-12">
          <DealSheet rows={dealProfileRows} />
        </div>

        <div className="mt-14">
          <h3 className="text-lg font-bold text-slate-950">Industry focus</h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {essentialIndustries.map((industry) => (
              <li
                key={industry}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-950">
              Ideal transition situations
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Businesses where operational expertise can strengthen what already works.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {idealSituations.map((item) => (
              <li key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="font-bold text-slate-950">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {dealDetailCards.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
