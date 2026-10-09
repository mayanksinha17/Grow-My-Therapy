import React from "react";
import { Check } from "lucide-react";
import { mayaContent } from "@/data/mayaContent";
import Button from "@/components/ui/Button";

export default function WhoWeHelpSection() {
  const { eyebrow, heading, subtitle, items } = mayaContent.services;

  return (
    <section id="services" className="bg-theme-bg py-16 sm:py-20 lg:py-28">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-widest text-theme-primary uppercase block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-theme-text mb-4">
            {heading}
          </h2>
          <p className="font-sans text-sm sm:text-base text-theme-text-muted leading-relaxed font-light">
            {subtitle}
          </p>
        </div>

        {/* 3 Columns Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {items.map((svc) => (
            <div
              key={svc.title}
              className="bg-theme-bg-secondary/60 p-8 sm:p-9 flex flex-col justify-between border border-theme-border/60 hover:border-theme-primary/40 transition-all rounded-none shadow-sm hover:shadow-md"
            >
              <div className="space-y-4 mb-8">
                <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-theme-text leading-snug">
                  {svc.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm font-medium text-theme-secondary italic">
                  {svc.tagline}
                </p>
                <p className="font-sans text-xs sm:text-sm text-theme-text-muted leading-relaxed font-light">
                  {svc.description}
                </p>

                <div className="pt-4 border-t border-theme-border/50 space-y-2.5">
                  {svc.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-sans text-theme-text/90">
                      <Check className="w-4 h-4 text-theme-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Button href={svc.ctaHref} variant="secondary" className="w-full !py-3 text-xs uppercase tracking-wider font-semibold">
                  {svc.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
