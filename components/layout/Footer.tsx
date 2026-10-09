import React from "react";
import Link from "next/link";
import { MapPin, Video, ShieldCheck } from "lucide-react";
import { mayaContent } from "@/data/mayaContent";

export default function Footer() {
  const { doctorName, credentials, officeAddress, serviceNotice, quickLinks, legalDisclaimer } =
    mayaContent.footer;

  return (
    <footer className="bg-theme-bg text-theme-text border-t border-theme-border/60">
      {/* Main 3-Column Footer */}
      <div className="section-container py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Doctor Profile & Title (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-normal text-theme-text">
                {doctorName}
              </h3>
              <p className="font-sans text-xs font-semibold text-theme-secondary uppercase tracking-wider">
                {credentials}
              </p>
            </div>
            <p className="font-sans text-xs sm:text-sm text-theme-text-muted leading-relaxed font-light max-w-sm">
              Grounded, collaborative, and evidence-based psychological care for adults navigating anxiety, panic, trauma, and burnout.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-sans text-theme-secondary font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Private & Confidential Clinical Practice</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-normal text-theme-text">
              Quick Links
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

          {/* Column 3: Location & Service Notice (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-normal text-theme-text">
              Practice Locations
            </h4>
            <div className="space-y-3 font-sans text-xs sm:text-sm text-theme-text-muted leading-relaxed font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-theme-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-theme-text">Santa Monica Office</p>
                  <p>{officeAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Video className="w-4 h-4 text-theme-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-theme-text">California Telehealth</p>
                  <p>{serviceNotice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer Legal Disclaimer */}
      <div className="border-t border-theme-border/40 py-6 bg-theme-bg-secondary/60">
        <div className="section-container text-center font-sans text-[11px] sm:text-xs text-theme-text-muted/80 leading-relaxed max-w-4xl mx-auto">
          <p>{legalDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
