import React from "react";
import Image from "next/image";
import { mayaContent } from "@/data/mayaContent";

export default function QuoteBanner() {
  const { quote, author } = mayaContent.quoteBanner;

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-theme-bg-dark text-white">
      {/* Texture background */}
      <Image
        src="/images/clone/quoteTexture.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-25"
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-theme-bg-dark/80" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center px-4 space-y-6">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white leading-relaxed italic">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <p className="font-sans text-xs tracking-widest uppercase text-theme-text-light/80 font-medium">
            — {author}
          </p>
        </div>
      </div>
    </section>
  );
}
