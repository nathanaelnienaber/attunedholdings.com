import { SectionIntro } from "@/components/SectionIntro";
import { StructureChips } from "@/components/StructureChips";
import { capitalCoInvestNote, financingStructures, sectionIds } from "@/lib/site";

export function CapitalSection() {
  return (
    <section
      id={sectionIds.capital}
      className="scroll-mt-24 bg-slate-950 px-6 py-20 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          dark
          eyebrow="Capital"
          title="Credible capital with flexible structure options."
          description="I have $1.5M+ in deployable capital and lender pre qualification up to $8M. Every deal is different. The goal is a structure that is financeable, fair, and executable."
        />

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Open to all forms of financing
          </p>
          <div className="mt-5">
            <StructureChips structures={financingStructures} dark />
          </div>
          <p className="mt-8 max-w-3xl leading-8 text-slate-300">{capitalCoInvestNote}</p>
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            SBA Pre Approval
          </p>
          <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Broker issued SBA pre approval letter for up to $8M.
          </h3>
          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            This letter supports early stage diligence conversations with owners, brokers,
            and advisors evaluating transaction readiness and close certainty.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/sba-pre-approval-letter.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400"
            >
              View letter
            </a>
            <a
              href="/sba-pre-approval-letter.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              Download PDF
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-400">
            Current as of June 2026. Subject to lender underwriting, final deal terms, and
            standard SBA closing conditions.
          </p>
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-7 text-slate-400">
          Financing statements are provided for discussion purposes only and do not
          constitute a commitment to lend or acquire. All transactions are subject to
          underwriting, diligence, legal documentation, and final negotiated terms.{" "}
          <a href="#contact" className="text-sky-300 underline-offset-2 hover:underline">
            Discuss a fit
          </a>
          .
        </p>
      </div>
    </section>
  );
}
