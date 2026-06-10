import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { heroFitCardRows, site, trustSignals } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1800&q=80"
          alt="Commercial field service technician at work"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            Washington operator buyer
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Building a company where people can grow old in.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">
            I&apos;m {site.founder}, a former founder and operator acquiring a Washington
            service business through {site.entity} {site.entityType}. I&apos;m not a fund flipping
            assets. I&apos;m here to protect what works, strengthen the team, and build
            something that lasts.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#fit"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-950/20 transition hover:bg-sky-400"
            >
              View Acquisition Fit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              Discuss a Business
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {trustSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/95 p-6 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Operator Fit
          </p>
          <div className="mt-6 grid gap-4">
            {heroFitCardRows.map((row) => (
              <div key={row.label} className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">{row.label}</p>
                <p className="mt-2 text-2xl font-bold text-slate-950">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
