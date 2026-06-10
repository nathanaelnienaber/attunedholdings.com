import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { criteriaCards, essentialIndustries, industryFocusIntro } from "@/lib/site";

export const metadata: Metadata = {
  title: "Acquisition Criteria",
  description:
    "Nathanael Nienaber is acquiring Washington essential service businesses — fire & life safety, compliance, MSPs, and commercial field services — operating via Attuned Holdings.",
};

const bestFitSituations = [
  {
    title: "Outdated IT",
    description:
      "A practical opportunity to preserve what works while upgrading systems, process, and operating cadence.",
  },
  {
    title: "Manual Processes",
    description:
      "A practical opportunity to preserve what works while upgrading systems, process, and operating cadence.",
  },
  {
    title: "Founder Retirement",
    description:
      "A practical opportunity to preserve what works while upgrading systems, process, and operating cadence.",
  },
  {
    title: "Existing Management",
    description:
      "A leadership team already in place that can continue running day-to-day operations through transition.",
  },
  {
    title: "Recurring Revenue",
    description:
      "Repeat or contract-based revenue that provides stability for employees, customers, and long-term planning.",
  },
];

export default function CriteriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Acquisition Criteria"
        title="Specific parameters for sellers, brokers, and advisors."
        description="Operating via Attuned Holdings, I am focused on profitable Washington service businesses where founder legacy, employee continuity, and long-term operator ownership matter."
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
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Industry Focus
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Essential, service-based businesses.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">{industryFocusIntro}</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {essentialIndustries.map((industry) => (
              <li
                key={industry}
                className="rounded-2xl border border-slate-200 p-6 text-lg font-semibold text-slate-950"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
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
              as the owner-operator of Attuned Holdings.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bestFitSituations.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-lg font-bold text-slate-950">{item.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
