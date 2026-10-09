import React from "react";
import { cloneContent } from "@/data/cloneContent";
import Button from "@/components/ui/Button";

export default function SpecialtiesGrid() {
  const { heading, items } = cloneContent.specialties;

  return (
    <section className="bg-theme-bg-secondary py-16 sm:py-20 lg:py-28 border-t border-theme-border/40">
      <div className="section-container">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-theme-text">
            {heading}
          </h2>
        </div>

        {/* 2x2 Grid of Specialty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-theme-bg p-8 sm:p-10 flex flex-col justify-between border border-theme-border/60 shadow-sm"
            >
              <div className="space-y-4 mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-theme-text">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-theme-text-muted leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div>
                <Button href={item.ctaHref} variant="primary" className="!px-6 !py-3 text-xs uppercase tracking-wider">
                  {item.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
