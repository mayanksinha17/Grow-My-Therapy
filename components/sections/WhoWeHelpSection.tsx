import React from "react";
import Image from "next/image";
import { cloneContent } from "@/data/cloneContent";

export default function WhoWeHelpSection() {
  const { heading, audiences } = cloneContent.whoWeHelp;

  return (
    <section className="bg-theme-bg py-16 sm:py-20 lg:py-28">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-theme-text">
            {heading}
          </h2>
        </div>

        {/* 3 Columns Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {audiences.map((aud) => (
            <div key={aud.title} className="flex flex-col group">
              <div className="relative aspect-[3/4] w-full rounded-t-[100px] overflow-hidden mb-6 bg-theme-bg-secondary">
                <Image
                  src={aud.image}
                  alt={aud.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="text-center space-y-3 px-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-theme-text">
                  {aud.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-theme-text-muted leading-relaxed font-light">
                  {aud.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
