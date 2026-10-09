import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cloneContent } from "@/data/cloneContent";

export default function Footer() {
  const { missionStatement, quickLinks, contactInfo, team, legalDisclaimer } =
    cloneContent.footer;

  return (
    <footer className="bg-theme-bg text-theme-text border-t border-theme-border/60">
      {/* Main 4-Column Footer */}
      <div className="section-container py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Logo & Mission Statement (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="relative h-12 w-48 sm:h-14 sm:w-56">
              <Image
                src={cloneContent.header.logoImage}
                alt={cloneContent.header.logoText}
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-sans text-xs sm:text-sm text-theme-text-muted leading-relaxed font-light max-w-sm">
              {missionStatement}
            </p>
          </div>

          {/* Column 2: Navigation Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-normal text-theme-text">
              Navigate
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-theme-text-muted hover:text-theme-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Service Areas (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-normal text-theme-text">
              Contact
            </h4>
            <div className="space-y-2 font-sans text-xs sm:text-sm text-theme-text-muted leading-relaxed font-light">
              <p>{contactInfo.address}</p>
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-theme-primary transition-colors underline underline-offset-2"
                >
                  {contactInfo.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="hover:text-theme-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </p>
            </div>
            <p className="pt-2 font-sans text-[11px] sm:text-xs text-theme-text-muted/80 leading-relaxed italic">
              {contactInfo.serviceAreas}
            </p>
          </div>

          {/* Column 4: Our Team Roster (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-normal text-theme-text">
              Our Team
            </h4>
            <ul className="space-y-1.5 font-sans text-xs text-theme-text-muted font-light">
              {team.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-Footer Legal Disclaimer */}
      <div className="border-t border-theme-border/40 py-6 bg-theme-bg-secondary/50">
        <div className="section-container text-center font-sans text-[11px] sm:text-xs text-theme-text-muted/80">
          <p>{legalDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
