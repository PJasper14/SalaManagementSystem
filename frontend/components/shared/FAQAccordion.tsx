"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      className={cn("space-y-0 border border-zinc-200  rounded-xl overflow-hidden", className)}
      role="region"
      aria-label="FAQ"
    >
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="border-b border-zinc-200 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full justify-between items-center gap-4 py-4 px-5 text-left font-medium text-zinc-900 hover:bg-zinc-50 transition-colors"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              id={`faq-trigger-${i}`}
            >
              {item.question}
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-zinc-500 transition-transform",
                  isOpen && "rotate-180"
                )}
                aria-hidden
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              className={cn(
                "overflow-hidden transition-all duration-200",
                isOpen ? "max-h-96" : "max-h-0"
              )}
            >
              <div className="px-5 pb-4 pt-0 text-zinc-600">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
