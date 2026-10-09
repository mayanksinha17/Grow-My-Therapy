import React from "react";
import Image from "next/image";
import { mayaContent } from "@/data/mayaContent";
import Button from "@/components/ui/Button";

export default function HowWeWorkSection() {
  const { eyebrow, heading, credentials, paragraphs, cta, image } = mayaContent.about;

  return (
    <section id="about" className="bg-theme-bg-secondary py-16 sm:py-20 lg:py-28 border-t border-theme-border/40">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Dr. Maya Reynolds Portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-[280px] sm:max-w-md mx-auto rounded-t-[110px] sm:rounded-t-[140px] rounded-b-none overflow-hidden shadow-md border-2 border-theme-border/50">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column: Bio & Clinical Approach */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-widest text-theme-primary uppercase block mb-1">
                {eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-theme-text leading-tight mb-2">
                {heading}
              </h2>
              <p className="font-sans text-xs sm:text-sm font-semibold text-theme-secondary">
                {credentials}
              </p>
            </div>

            <div className="space-y-4 font-sans text-theme-text-muted text-sm sm:text-base leading-relaxed font-light">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2 sm:pt-4">
              <Button href={cta.href} variant="primary" className="w-full sm:w-auto text-center !px-7 !py-3.5 text-xs uppercase tracking-widest">
                {cta.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
