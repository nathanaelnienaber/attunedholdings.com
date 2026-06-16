import { IdealSituationsAccordion } from "@/components/IdealSituationsAccordion";
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
          title="Acquisition parameters"
          description="Profitable Washington service businesses where founder legacy, employee continuity, and long term operator ownership matter."
        />

        <div className="mt-12">
          <DealSheet rows={dealProfileRows} />
        </div>

        <div className="mt-16">
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

        <div className="mt-16">
          <h3 className="subheading">Ideal transition situations</h3>
          <div className="mt-6">
            <IdealSituationsAccordion items={idealSituations} />
          </div>
        </div>
      </div>
    </section>
  );
}
