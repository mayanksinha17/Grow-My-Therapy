import React from "react";
import Image from "next/image";
import { mayaContent } from "@/data/mayaContent";

export default function EmpathySection() {
  const { eyebrow, heading, paragraphs } = mayaContent.empathy;

  return (
    <section className="bg-theme-bg-secondary py-16 sm:py-20 lg:py-28 border-t border-theme-border/40">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image Column: Verified Office Interior */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full max-w-md mx-auto rounded-t-[120px] rounded-b-none overflow-hidden shadow-md border-2 border-theme-border/50">
              <Image
                src="/images/maya/office2.jpg"
                alt="Quiet, comfortable therapy space in Santa Monica designed to help clients feel at ease"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Narrative Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-widest text-theme-primary uppercase block">
              {eyebrow}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-theme-text leading-tight">
              {heading}
            </h2>

            <div className="space-y-4 font-sans text-theme-text-muted text-sm sm:text-base leading-relaxed font-light">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
