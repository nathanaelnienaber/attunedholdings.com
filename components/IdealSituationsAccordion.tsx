"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

type IdealSituation = {
  title: string;
  description: string;
};

type IdealSituationsAccordionProps = {
  items: readonly IdealSituation[];
};

export function IdealSituationsAccordion({ items }: IdealSituationsAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <div className="divide-y divide-slate-200 rounded-5 border border-slate-200 bg-bg">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.title}>
            <h4>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-bold text-text transition hover:bg-slate-50"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                {item.title}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h4>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-4"
            >
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
