import { SectionIntro } from "@/components/SectionIntro";
import { faqItems, sectionIds } from "@/lib/site";

export function FaqSection() {
  return (
    <section id={sectionIds.faq} className="section section-y scroll-mt-24 bg-bg">
      <div className="container">
        <SectionIntro
          eyebrow="FAQ"
          title="Questions owners and brokers ask"
          description="Straight answers for business owners, brokers, and advisors evaluating fit before a conversation starts."
        />

        <div className="prose-narrow mt-12 space-y-8">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-slate-200 pb-8 last:border-none last:pb-0">
              <h3 className="subheading text-xl">{item.question}</h3>
              <p className="body mt-3">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
