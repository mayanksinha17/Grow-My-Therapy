import React from "react";
import Image from "next/image";
import { cloneContent } from "@/data/cloneContent";

export default function QuoteBanner() {
  const { quote, texture } = cloneContent.quoteBanner;

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Texture/photo background */}
      <Image
        src={texture}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-theme-bg-dark/60" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white leading-snug">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
