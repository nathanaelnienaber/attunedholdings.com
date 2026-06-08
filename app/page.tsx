import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, MapPin, ShieldCheck } from "lucide-react";
import { criteriaCards, trustSignals } from "@/lib/site";
import { FeatureCard } from "@/components/FeatureCard";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=1800&q=80"
            alt="Industrial manufacturing floor"
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
              Acquiring Washington Manufacturing & Industrial Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">
              Led by Nathanael Nienaber | Operating via Attuned Holdings | $1M+ Equity Capital
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
              Acquisition Snapshot
            </p>
            <div className="mt-6 grid gap-4">
              {[
                ["Revenue Target", "$1M - $5M"],
                ["EBITDA / SDE", "$250K - $800K"],
                ["Deployable Equity", "$200K - $800K via ROBS"],
                ["Closing Readiness", "45-90 days from LOI"],
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

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Key Highlights
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              A personal operator-buyer with a clear legal acquisition vehicle.
            </h2>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-4">
            {[
              {
                icon: Factory,
                title: "Industrial Focus",
                text: "Focused on enduring manufacturing, infrastructure, construction, and environmental services companies.",
              },
              {
                icon: ShieldCheck,
                title: "Technical Modernization",
                text: "Experienced in IT modernization, Zero Trust Architecture, automation, and legacy system transformation.",
              },
              {
                icon: MapPin,
                title: "Washington Commitment",
                text: "Bellevue-based and committed to operating a local legacy business for the next 20 years.",
              },
              {
                icon: CheckCircle2,
                title: "Legal Vehicle",
                text: "Legal Vehicle: Attuned Holdings C-Corp, established for acquisition and operating control.",
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
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {criteriaCards.slice(0, 3).map((feature) => (
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
                Founder, broker, and advisor conversations are handled directly and confidentially.
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
