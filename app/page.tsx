import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Handshake,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { criteriaCards, trustSignals } from "@/lib/site";
import { FeatureCard } from "@/components/FeatureCard";

export default function Home() {
  return (
    <>
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
              Washington Operator-Buyer
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Building a company where people can grow old in.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">
              I&apos;m Nathanael Nienaber — a hands-on operator acquiring a Washington
              service business through Attuned Holdings LLC. I&apos;m not a fund flipping
              assets. I&apos;m here to protect what works, strengthen the team, and build
              something that lasts.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-950/20 transition hover:bg-sky-400"
              >
                About Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/financing"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                Financing
              </Link>
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
              {[
                ["Revenue Target", "$1M - $15M+"],
                ["EBITDA / SDE", "$250K - $2M"],
                ["Deployable Capital", "$1.5M+"],
                ["Pre-Qualification", "Up to $8M acquisition"],
                ["Closing Readiness", "30-45 days from LOI"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-medium text-slate-500">{label}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-8 text-slate-600">
            Most sellers don&apos;t want a financial buyer who disappears after closing.
            They want someone who will show up, keep the team intact, and invest in the
            business year after year. That&apos;s the company I&apos;m building.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Key Highlights
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              An operator-buyer building for the long term.
            </h2>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-4">
            {[
              {
                icon: Flame,
                title: "Essential Service Industries",
                text: "Fire & life safety, compliance & inspection, MSPs, commercial field services, and other recurring B2B service businesses.",
              },
              {
                icon: ShieldCheck,
                title: "Operational Strength",
                text: "Modernize systems without disrupting the people who make the business work.",
              },
              {
                icon: HeartHandshake,
                title: "Built to Last",
                text: "Bellevue-based, long-term operator — continuity for employees and customers.",
              },
              {
                icon: Handshake,
                title: "Hands-On Operator",
                text: "Works with existing leadership; builds on a foundation that already works.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-2xl bg-slate-50 p-7">
                  <Icon className="h-8 w-8 text-sky-600" />
                  <h2 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              What Fits
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Clear acquisition criteria for serious conversations.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {criteriaCards.slice(0, 4).map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
          <Link
            href="/criteria"
            className="mt-10 inline-flex items-center text-base font-bold text-sky-700 hover:text-sky-600"
          >
            Review full criteria
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 p-8 text-white shadow-xl lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3 text-sky-300">
                <CheckCircle2 className="h-6 w-6" />
                <p className="font-semibold uppercase tracking-[0.2em]">Ready for NDA</p>
              </div>
              <h2 className="mt-4 text-3xl font-bold">Have a business that matches?</h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                If you&apos;re planning a transition and want a buyer who will honor your
                team&apos;s legacy, let&apos;s talk confidentially.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-100"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
