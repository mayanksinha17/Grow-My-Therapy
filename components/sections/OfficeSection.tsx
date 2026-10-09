import React from "react";
import Image from "next/image";
import { MapPin, Video } from "lucide-react";
import { mayaContent } from "@/data/mayaContent";

export default function OfficeSection() {
  const { eyebrow, heading, address, description, telehealthNotice, images } = mayaContent.office;

  return (
    <section id="office" className="bg-theme-bg py-16 sm:py-20 lg:py-28 border-t border-theme-border/40">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-widest text-theme-primary uppercase block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-theme-text mb-4">
            {heading}
          </h2>
          <p className="font-sans text-sm sm:text-base text-theme-text-muted leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* 2-Column Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {images.map((img, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="relative aspect-[4/3] w-full rounded-t-[80px] rounded-b-none overflow-hidden shadow-md border-2 border-theme-border/50 bg-theme-bg-secondary">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs font-sans text-theme-text-muted text-center italic">
                {img.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Location & Telehealth Callout Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-theme-bg-secondary/60 p-6 sm:p-7 border border-theme-border/60 flex items-start gap-4">
            <div className="p-2.5 bg-theme-primary text-white rounded-none shrink-0 mt-1">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-medium text-theme-text">
                In-Person Santa Monica Office
              </h3>
              <p className="font-sans text-xs sm:text-sm text-theme-text-muted font-light">
                {address}
              </p>
              <p className="font-sans text-[11px] text-theme-secondary pt-1">
                Quiet, private setting with abundant natural light
              </p>
            </div>
          </div>

          <div className="bg-theme-bg-secondary/60 p-6 sm:p-7 border border-theme-border/60 flex items-start gap-4">
            <div className="p-2.5 bg-theme-secondary text-white rounded-none shrink-0 mt-1">
              <Video className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-medium text-theme-text">
                Telehealth Statewide Across CA
              </h3>
              <p className="font-sans text-xs sm:text-sm text-theme-text-muted font-light">
                {telehealthNotice}
              </p>
              <p className="font-sans text-[11px] text-theme-secondary pt-1">
                Secure, confidential & HIPAA-compliant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
