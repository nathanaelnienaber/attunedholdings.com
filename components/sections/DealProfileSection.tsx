import { DealSheet } from "@/components/DealSheet";
import { SectionIntro } from "@/components/SectionIntro";
import {
  dealProfileRows,
  fitIntroDescription,
  idealIndustries,
  secondaryIndustries,
  sectionIds,
} from "@/lib/site";

export function DealProfileSection() {
  return (
    <section id={sectionIds.fit} className="section section-y scroll-mt-24 bg-surface">
      <div className="container">
        <SectionIntro
          eyebrow="Acquisition Fit"
          title="Acquisition parameters"
          description={fitIntroDescription}
        />

        <div className="mt-12">
          <DealSheet rows={dealProfileRows} />
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-bold text-text">Ideal industries</h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {idealIndustries.map((industry) => (
              <li
                key={industry}
                className="rounded-5 border border-slate-200 bg-bg px-4 py-2 text-sm font-semibold text-slate-800"
              >
                {industry}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-bold text-text">Secondary industries</h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {secondaryIndustries.map((industry) => (
              <li
                key={industry}
                className="rounded-5 border border-slate-100 bg-bg px-4 py-2 text-sm font-semibold text-muted"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
