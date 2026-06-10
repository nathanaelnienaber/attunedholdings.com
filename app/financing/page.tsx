import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Landmark, WalletCards } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Capital Structure: Attuned Holdings",
  description:
    "Nathanael Nienaber controls $1M+ in ROBS equity capital and has broker-issued SBA pre-approval up to $8M for Washington business acquisitions.",
};

const financingPoints = [
  {
    title: "Deployable Equity",
    description: "$1.5M+ in equity capital deployable.",
    icon: WalletCards,
  },
  {
    title: "Speed",
    description: "Can move from LOI to closing in 30-45 days.",
    icon: Clock,
  },
  {
    title: "Readiness",
    description: "Banking relationships established and pre-qualified up to $8M purchase.",
    icon: Landmark,
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="How I will finance your deal"
        description="I have established Attuned Holdings LLC as a legal vehicle to cover search expenditures. I have $1.5M+ in deployable capital and pre-approved for $8M acquisition."
      />

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid gap-6 sm:grid-cols-2">
            {financingPoints.map((point) => {
              const Icon = point.icon;

              return (
                <article key={point.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <Icon className="h-8 w-8 text-sky-600" />
                  <h2 className="mt-5 text-xl font-bold text-slate-950">{point.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{point.description}</p>
                </article>
              );
            })}
          </div>

          <div className="relative h-[460px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
              alt="Acquisition financing documents"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-sky-100 bg-white p-8 shadow-sm lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            SBA Pre-Approval
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950">
            Broker-issued SBA pre-approval letter for up to $8M.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            This letter supports early-stage diligence conversations with founders,
            brokers, and advisors evaluating transaction readiness.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/sba-pre-approval-letter.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-500"
            >
              View letter
            </a>
            <a
              href="/sba-pre-approval-letter.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Download PDF
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Current as of June 2026. Subject to lender underwriting, final deal terms,
            and standard SBA closing conditions.
          </p>
        </div>
      </section>

    </>
  );
}
