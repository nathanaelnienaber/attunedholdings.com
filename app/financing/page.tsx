import type { Metadata } from "next";
import Image from "next/image";
import { Banknote, Clock, Landmark, WalletCards } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Capital Structure: Attuned Holding",
  description:
    "Nathanael Nienaber controls $1M+ in ROBS equity capital deployed through Attuned Holding for Washington business acquisitions.",
};

const financingPoints = [
  {
    title: "Deployable Equity",
    description: "$1M+ in equity capital deployed through Attuned Holding.",
    icon: WalletCards,
  },
  {
    title: "Speed",
    description: "Can move from LOI to closing in 30-45 days.",
    icon: Clock,
  },
  {
    title: "Structure",
    description: "ROBS capital inside the C-Corp creates equity without immediate debt service drag.",
    icon: Banknote,
  },
  {
    title: "Readiness",
    description: "Banking relationships established.",
    icon: Landmark,
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="Capital Structure: Attuned Holding"
        description="I have established Attuned Holding as the legal vehicle for this acquisition. Through a ROBS structure within this C-Corp, I have deployed $1M+ in equity capital."
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
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            ROBS Ready
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950">
            Why the ROBS structure matters for sellers.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            The entity holds the acquisition capital, but I control how it is deployed.
            For a seller, that means the conversation is personal and accountable while
            the transaction is supported by a clear legal structure, committed capital,
            and established banking relationships.
          </p>
        </div>
      </section>
    </>
  );
}
