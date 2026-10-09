import React from "react";
import Image from "next/image";
import { cloneContent } from "@/data/cloneContent";

export default function TransitionBanner() {
  const { heading, image } = cloneContent.transitionBanner;

  return (
    <section className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle overlay for readable contrast */}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/35" />

      {/* Centered Heading */}
      <div className="section-container relative z-10 text-center px-4">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-white max-w-3xl mx-auto leading-tight drop-shadow-sm">
          {heading}
        </h2>
      </div>
    </section>
  );
}
