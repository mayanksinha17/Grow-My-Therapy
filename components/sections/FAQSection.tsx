"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { mayaContent } from "@/data/mayaContent";

export default function FAQSection() {
  const { eyebrow, heading, items } = mayaContent.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-theme-bg-secondary py-16 sm:py-20 lg:py-28 border-t border-theme-border/40">
      <div className="section-container max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-widest text-theme-primary uppercase block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-theme-text mb-4">
            {heading}
          </h2>
        </div>

        {/* Accordion FAQ list */}
        <div className="space-y-3.5 sm:space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-theme-bg border border-theme-border/60 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-8 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary transition-colors hover:bg-theme-bg-secondary/30"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg lg:text-xl font-normal text-theme-text pr-3 sm:pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-theme-primary shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-8 pb-5 sm:pb-6 pt-1 border-t border-theme-border/30 font-sans text-xs sm:text-sm text-theme-text-muted leading-relaxed font-light">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
