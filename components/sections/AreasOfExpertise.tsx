import React from "react";
import { mayaContent } from "@/data/mayaContent";

export default function AreasOfExpertise() {
  const { eyebrow, heading, subtitle, methods } = mayaContent.modalities;

  return (
    <section className="bg-theme-bg py-16 sm:py-20 lg:py-24 border-t border-theme-border/40">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-widest text-theme-primary uppercase block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-normal text-theme-text mb-3">
            {heading}
          </h2>
          <p className="font-sans text-sm text-theme-text-muted leading-relaxed font-light">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {methods.map((method, idx) => (
            <div
              key={idx}
              className="bg-theme-bg-secondary/40 p-6 sm:p-7 border border-theme-border/50 flex flex-col justify-between hover:border-theme-primary/40 transition-colors"
            >
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-theme-text mb-3">
                {method.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-theme-text-muted leading-relaxed font-light">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
