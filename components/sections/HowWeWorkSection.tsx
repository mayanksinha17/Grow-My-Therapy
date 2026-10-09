import React from "react";
import Image from "next/image";
import { cloneContent } from "@/data/cloneContent";
import Button from "@/components/ui/Button";

export default function HowWeWorkSection() {
  const { eyebrow, heading, paragraphs, cta, image } = cloneContent.howWeWork;

  return (
    <section className="bg-theme-bg-secondary py-16 sm:py-20 lg:py-28 border-t border-theme-border/40">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-t-[120px] rounded-b-none overflow-hidden shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-sans font-semibold tracking-widest text-theme-primary uppercase block">
              {eyebrow}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-theme-text leading-tight">
              {heading}
            </h2>

            <div className="space-y-4 font-sans text-theme-text-muted text-sm sm:text-base leading-relaxed font-light">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-4">
              <Button href={cta.href} variant="primary" className="!px-7 !py-3.5 text-xs uppercase tracking-widest">
                {cta.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
