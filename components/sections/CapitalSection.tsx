import { SectionIntro } from "@/components/SectionIntro";
import { StructureChips } from "@/components/StructureChips";
import { capitalCoInvestNote, financingStructures, sectionIds } from "@/lib/site";

export function CapitalSection() {
  return (
    <section id={sectionIds.capital} className="section section-y scroll-mt-24 bg-dark text-white">
      <div className="container">
        <SectionIntro
          dark
          eyebrow="Capital"
          title="Credible capital with flexible structure options."
          description="I have $1.5M+ in deployable capital and lender pre qualification up to $8M. Every deal is different. The goal is a structure that is financeable, fair, and executable."
        />

        <div className="mt-10">
          <p className="eyebrow-dark">Open to all forms of financing</p>
          <div className="mt-5">
            <StructureChips structures={financingStructures} dark />
          </div>
          <p className="body-dark mt-8">{capitalCoInvestNote}</p>
        </div>

        <div className="mt-14 rounded-5 border border-white/10 bg-white/5 p-8 lg:p-10">
          <p className="eyebrow-dark">SBA Pre Approval</p>
          <h3 className="subheading mt-4 text-white sm:text-3xl">
            Broker issued SBA pre approval letter for up to $8M.
          </h3>
          <p className="body-dark mt-5">
            This letter supports early stage diligence conversations with owners, brokers,
            and advisors evaluating transaction readiness and close certainty.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/sba-pre-approval-letter.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary shadow-none"
            >
              View letter
            </a>
            <a href="/sba-pre-approval-letter.pdf" download className="btn-secondary">
              Download PDF
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-400">
            Current as of June 2026. Subject to lender underwriting, final deal terms, and
            standard SBA closing conditions.
          </p>
        </div>

        <p className="mt-10 text-sm leading-7 text-slate-400">
          Financing statements are provided for discussion purposes only and do not
          constitute a commitment to lend or acquire. All transactions are subject to
          underwriting, diligence, legal documentation, and final negotiated terms.{" "}
          <a href="#contact" className="text-accent-light underline-offset-2 hover:underline">
            Discuss a fit
          </a>
          .
        </p>
      </div>
    </section>
  );
}
