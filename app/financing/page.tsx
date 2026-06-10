import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Clock,
  Handshake,
  Landmark,
  LineChart,
  PiggyBank,
  Scale,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Nathanael Nienaber brings $1.5M+ in deployable capital and lender pre-qualification up to $8M, with flexibility across SBA, bank debt, seller notes, earnouts, and hybrid structures.",
};

const capitalSnapshot = [
  {
    title: "Deployable Capital",
    description:
      "$1.5M+ available to support acquisition, transaction costs, and transition needs.",
    icon: WalletCards,
  },
  {
    title: "Pre-Qualification",
    description:
      "Pre-qualified up to $8M acquisition size, subject to underwriting and final terms.",
    icon: Landmark,
  },
  {
    title: "Structure Flexibility",
    description:
      "Open to single-source or blended structures to align certainty, valuation, and transition objectives.",
    icon: Scale,
  },
  {
    title: "Process Readiness",
    description:
      "Prepared to move quickly from initial review to IOI/LOI with lender and advisor coordination.",
    icon: Clock,
  },
];

const financingStructures = [
  {
    title: "SBA 7(a)",
    description:
      "Efficient leverage for qualified lower-middle-market deals with strong cash flow.",
    icon: Landmark,
  },
  {
    title: "Conventional Bank Debt",
    description: "Traditional senior financing where terms and profile are the best fit.",
    icon: Banknote,
  },
  {
    title: "Seller Note",
    description:
      "Aligns interests and can improve overall terms while supporting continuity.",
    icon: Handshake,
  },
  {
    title: "Earnout",
    description:
      "Bridges valuation gaps through performance-based upside tied to agreed milestones.",
    icon: TrendingUp,
  },
  {
    title: "Rollover Equity",
    description: "Allows owners to retain minority upside when desired.",
    icon: LineChart,
  },
  {
    title: "Hybrid Structures",
    description:
      "I regularly combine debt, seller paper, earnout, and equity to match transaction needs.",
    icon: PiggyBank,
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="How I will finance your deal"
        description="I have $1.5M+ in deployable capital and current lender pre-qualification up to $8M. I structure transactions to fit seller goals and business cash flow, using SBA, conventional bank debt, seller notes, earnouts, rollover equity, and hybrid combinations when appropriate."
      />

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Capital Snapshot
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Credible capital with flexible structure options.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capitalSnapshot.map((point) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="rounded-2xl border border-slate-200 p-6 shadow-sm"
                >
                  <Icon className="h-8 w-8 text-sky-600" />
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{point.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{point.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Financing Structures
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Open to all forms of financing — and any combination.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Every deal is different. I focus on creating a structure that balances purchase
              price, certainty of close, post-close cash flow, transition risk, and timeline.
              My goal is straightforward: get to a structure that is financeable, fair, and
              executable.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {financingStructures.map((structure) => {
                const Icon = structure.icon;

                return (
                  <article key={structure.title} className="rounded-2xl bg-white p-6 shadow-sm">
                    <Icon className="h-7 w-7 text-sky-600" />
                    <h3 className="mt-4 text-lg font-bold text-slate-950">{structure.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{structure.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative h-[520px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
              alt="Acquisition financing documents"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-sky-100 bg-slate-50 p-8 shadow-sm lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            SBA Pre-Approval
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950">
            Broker-issued SBA pre-approval letter for up to $8M.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            This letter supports early-stage diligence conversations with owners, brokers,
            and advisors evaluating transaction readiness and close certainty.
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
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white"
            >
              Download PDF
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Current as of June 2026. Subject to lender underwriting, final deal terms, and
            standard SBA closing conditions.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              For Owners & Brokers
            </p>
            <h2 className="mt-4 text-3xl font-bold">Have a deal to discuss?</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              If you are an owner or broker with a potential fit, send a teaser or CIM and I
              can provide initial structure feedback quickly.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Financing statements are provided for discussion purposes only and do not
              constitute a commitment to lend or acquire. All transactions are subject to
              underwriting, diligence, legal documentation, and final negotiated terms.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-100"
          >
            Share Opportunity
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
