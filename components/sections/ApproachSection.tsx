import { CheckCircle2 } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { afterCloseOutcomes, sectionIds } from "@/lib/site";

export function ApproachSection() {
  return (
    <section id={sectionIds.approach} className="section section-y-sm scroll-mt-24 bg-bg">
      <div className="container">
        <SectionIntro
          eyebrow="After Close"
          title="Modernization without losing what made the business valuable."
        />

        <ul className="prose-narrow mt-10 space-y-6">
          {afterCloseOutcomes.map((outcome) => (
            <li key={outcome} className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
              <p className="body">{outcome}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
