import React from "react";
import Image from "next/image";

export default function TransitionBanner() {
  return (
    <section className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle overlay for readable contrast */}
      <Image
        src="/images/clone/transitionSunset.jpg"
        alt="Peaceful coastal California sunset reflecting healing and new beginnings"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered Heading */}
      <div className="section-container relative z-10 text-center px-4">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-normal text-white max-w-3xl mx-auto leading-tight drop-shadow-sm">
          Honoring where you’ve been & helping shape where you’re headed.
        </h2>
      </div>
    </section>
  );
}
