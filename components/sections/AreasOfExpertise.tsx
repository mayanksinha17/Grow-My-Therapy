import React from "react";
import { cloneContent } from "@/data/cloneContent";

export default function AreasOfExpertise() {
  const { heading, areas } = cloneContent.areasOfExpertise;

  return (
    <section className="bg-theme-bg py-16 sm:py-20 lg:py-24">
      <div className="section-container text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-normal text-theme-text mb-10 sm:mb-12">
          {heading}
        </h2>

        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 sm:gap-4">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-theme-bg-secondary text-theme-text font-sans text-xs sm:text-sm tracking-wide rounded-full border border-theme-border/40 hover:border-theme-primary/40 transition-colors"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
