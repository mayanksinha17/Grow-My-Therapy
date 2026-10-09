import React from "react";
import Image from "next/image";
import { mayaContent } from "@/data/mayaContent";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const { eyebrow, heading, subheading, cta, secondaryCta, images } = mayaContent.hero;

  return (
    <section className="relative bg-theme-bg py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 sm:space-y-8 pr-0 lg:pr-6">
            <div className="inline-block">
              <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-widest text-theme-primary uppercase">
                {eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-normal text-theme-text leading-[1.12] tracking-tight">
              {heading}
            </h1>

            <p className="font-sans text-base sm:text-lg text-theme-text-muted max-w-xl leading-relaxed font-light">
              {subheading}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href={cta.href} variant="primary" className="!px-8 !py-4 text-xs uppercase tracking-widest font-medium">
                {cta.text}
              </Button>
              <Button href={secondaryCta.href} variant="secondary" className="!px-8 !py-4 text-xs uppercase tracking-widest font-medium">
                {secondaryCta.text}
              </Button>
            </div>
          </div>

          {/* Right Column: Staggered Imagery Frame */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5]">
              {/* Primary Large Image: Dr. Maya Reynolds Portrait */}
              <div className="relative w-[82%] h-[82%] rounded-t-[140px] rounded-b-none overflow-hidden shadow-md border-2 border-theme-border/50">
                <Image
                  src={images.headshot.src}
                  alt={images.headshot.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Secondary Overlapping Arched Image: Sunlit Santa Monica Office */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 w-[54%] h-[58%] rounded-t-[90px] rounded-b-none overflow-hidden shadow-lg border-4 border-theme-bg">
                <Image
                  src={images.officePreview.src}
                  alt={images.officePreview.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 220px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
