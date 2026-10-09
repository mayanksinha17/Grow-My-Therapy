import React from "react";
import Link from "next/link";
import { cloneContent } from "@/data/cloneContent";

export default function AreasOfExpertise() {
  const { heading, areas } = cloneContent.areasOfExpertise;

  // Link mappings for specialty pages where available
  const links: Record<string, string> = {
    Dissociation: "/dissociative-identity-disorder-therapist-newbury-park",
    Trauma: "/trauma-counseling-newbury-park",
    "Special needs parenting": "/counseling-special-needs-parents-newbury-park",
    marriage: "/couples-therapy",
    relationships: "/couples-therapy",
    children: "/children-and-teens",
    teens: "/children-and-teens",
    "intimacy & connection": "/couples-therapy",
  };

  return (
    <section className="bg-theme-bg py-16 sm:py-20 lg:py-24 border-t border-theme-border/40">
      <div className="section-container text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-normal text-theme-text mb-10 sm:mb-12">
          {heading}
        </h2>

        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4">
          {areas.map((area, idx) => {
            const href = links[area];
            const content = (
              <span className="font-serif italic text-lg sm:text-xl md:text-2xl text-theme-text font-normal hover:text-theme-primary transition-colors">
                {area}
              </span>
            );

            return (
              <React.Fragment key={idx}>
                {href ? (
                  <Link href={href} className="underline underline-offset-4 decoration-theme-border hover:decoration-theme-primary">
                    {content}
                  </Link>
                ) : (
                  content
                )}
                {idx < areas.length - 1 && (
                  <span className="text-theme-border text-lg select-none hidden sm:inline" aria-hidden="true">
                    |
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
