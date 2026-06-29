import { DealSheet } from "@/components/DealSheet";
import { SectionIntro } from "@/components/SectionIntro";
import { dealProfileRows, fitIntroDescription, sectionIds } from "@/lib/site";

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
      </div>
    </section>
  );
}
