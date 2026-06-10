import { CheckCircle2 } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { afterCloseOutcomes, approachSummary, sectionIds } from "@/lib/site";

export function ApproachSection() {
  return (
    <section
      id={sectionIds.approach}
      className="scroll-mt-24 bg-white px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="After Close"
          title="Modernization without losing what made the business valuable."
        />

        <ul className="mt-10 space-y-6">
          {afterCloseOutcomes.map((outcome) => (
            <li key={outcome} className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-sky-600" aria-hidden="true" />
              <p className="text-lg leading-8 text-slate-700">{outcome}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-lg leading-8 text-slate-600">{approachSummary}</p>
      </div>
    </section>
  );
}
