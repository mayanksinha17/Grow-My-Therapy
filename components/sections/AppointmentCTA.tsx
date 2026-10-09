import React from "react";
import Image from "next/image";
import { cloneContent } from "@/data/cloneContent";
import Button from "@/components/ui/Button";

export default function AppointmentCTA() {
  const { eyebrow, heading, paragraphs, cta, images } = cloneContent.appointmentCTA;

  return (
    <section className="bg-theme-bg-secondary py-16 sm:py-20 lg:py-28 border-t border-theme-border/40">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Overlapping Photos */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5]">
              {/* Image 1 */}
              <div className="relative w-[80%] h-[80%] rounded-t-[120px] rounded-b-none overflow-hidden shadow-sm">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover"
                />
              </div>

              {/* Image 2 Overlapping */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 w-[52%] h-[58%] rounded-t-[80px] rounded-b-none overflow-hidden shadow-md border-4 border-theme-bg-secondary">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 200px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & CTA */}
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
              <Button href={cta.href} variant="primary" className="!px-8 !py-4 text-xs uppercase tracking-widest">
                {cta.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
