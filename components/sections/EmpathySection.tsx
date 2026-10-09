import React from "react";
import Image from "next/image";
import { cloneContent } from "@/data/cloneContent";

export default function EmpathySection() {
  const { heading, paragraphs, image } = cloneContent.empathy;

  return (
    <section className="bg-theme-bg-secondary py-16 sm:py-20 lg:py-28 border-t border-theme-border/40">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full max-w-md mx-auto rounded-t-[120px] rounded-b-none overflow-hidden shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Narrative Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
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
