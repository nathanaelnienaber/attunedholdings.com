import { DealSheet } from "@/components/DealSheet";
import { SectionIntro } from "@/components/SectionIntro";
import {
  dealProfileRows,
  essentialIndustries,
  idealSituations,
  sectionIds,
} from "@/lib/site";

export function DealProfileSection() {
  return (
    <section id={sectionIds.fit} className="section section-y scroll-mt-24 bg-surface">
      <div className="container">
        <SectionIntro
          eyebrow="Acquisition Fit"
          title="Specific parameters for sellers, brokers, and advisors."
          description="Profitable Washington service businesses where founder legacy, employee continuity, and long term operator ownership matter."
        />

        <div className="mt-12">
          <DealSheet rows={dealProfileRows} />
        </div>

        <div className="mt-14">
          <h3 className="text-lg font-bold text-text">Industry focus</h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {essentialIndustries.map((industry) => (
              <li
                key={industry}
                className="rounded-5 border border-slate-200 bg-bg px-4 py-2 text-sm font-semibold text-slate-800"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h3 className="subheading">Ideal transition situations</h3>
            <p className="body mt-4">
              Businesses where operational expertise can strengthen what already works.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {idealSituations.map((item) => (
              <li key={item.title} className="rounded-5 border border-slate-200 bg-bg p-6">
                <p className="font-bold text-text">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
