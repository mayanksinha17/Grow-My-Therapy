import React from "react";
import { cloneContent } from "@/data/cloneContent";

export default function QuoteBanner() {
  const { quote } = cloneContent.quoteBanner;

  return (
    <section className="bg-theme-bg-accent py-20 sm:py-24 lg:py-32 relative overflow-hidden border-y border-theme-border/30">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-theme-text leading-snug italic">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
