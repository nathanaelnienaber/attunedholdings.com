import { SectionIntro } from "@/components/SectionIntro";
import { capitalIntroDescription, sectionIds } from "@/lib/site";

export function CapitalSection() {
  return (
    <section id={sectionIds.capital} className="section section-y scroll-mt-24 bg-dark text-white">
      <div className="container">
        <SectionIntro
          dark
          eyebrow="Capital"
          title="Credible capital with flexible structure options."
          description={capitalIntroDescription}
        />

        <div className="mt-16 rounded-5 border border-white/10 bg-white/5 p-8 lg:p-10">
          <p className="eyebrow-dark">SBA Pre Approval</p>
          <h3 className="subheading mt-4 text-white sm:text-3xl">
            Broker issued SBA pre approval letter for up to $8M.
          </h3>
          <p className="prose-narrow body-dark mt-5">
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

        <p className="prose-narrow mt-10 text-sm leading-relaxed text-slate-400">
          Financing statements are for discussion purposes only and do not constitute a
          commitment to lend or acquire. All transactions are subject to underwriting,
          diligence, and final negotiated terms.{" "}
          <a href="#contact" className="text-accent-light underline-offset-2 hover:underline">
            Discuss a fit
          </a>
          .
        </p>
      </div>
    </section>
  );
}
