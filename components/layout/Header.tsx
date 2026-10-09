"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { mayaContent } from "@/data/mayaContent";
import Button from "@/components/ui/Button";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="w-full bg-theme-bg text-theme-text border-b border-theme-border/60 sticky top-0 z-40 backdrop-blur-md bg-theme-bg/95 transition-all">
      <div className="section-container flex items-center justify-between py-4 lg:py-5">
        {/* Clinician Branding Logo */}
        <Link
          href="/"
          className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary"
          aria-label="Dr. Maya Reynolds, PsyD Home"
        >
          <span className="font-serif text-xl sm:text-2xl font-normal text-theme-text tracking-tight group-hover:text-theme-primary transition-colors">
            {mayaContent.header.doctorName}
          </span>
          <span className="font-sans text-[10px] sm:text-xs text-theme-text-muted tracking-widest uppercase font-medium">
            {mayaContent.header.title}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Main Navigation">
          {mayaContent.header.navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              {item.children ? (
                <button
                  type="button"
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center gap-1 font-sans text-sm tracking-wide text-theme-text hover:text-theme-primary transition-colors py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-theme-primary"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="font-sans text-sm tracking-wide text-theme-text hover:text-theme-primary transition-colors py-2"
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.children && (
                <div
                  className={`absolute left-0 top-full w-60 bg-theme-bg border border-theme-border/70 shadow-lg py-2 transition-all duration-200 origin-top-left ${
                    openDropdown === item.label
                      ? "opacity-100 scale-100 visible pointer-events-auto"
                      : "opacity-0 scale-95 invisible pointer-events-none"
                  }`}
                  role="menu"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-xs font-sans text-theme-text hover:bg-theme-bg-secondary hover:text-theme-primary transition-colors"
                      role="menuitem"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Header Action Button (Desktop) */}
        <div className="hidden lg:flex items-center">
          <Button href={mayaContent.header.cta.href} variant="primary" className="!px-6 !py-2.5 text-xs uppercase tracking-wider">
            {mayaContent.header.cta.text}
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-theme-text hover:text-theme-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[65px] sm:top-[73px] bg-theme-bg z-50 overflow-y-auto px-6 py-8 border-t border-theme-border/40 lg:hidden">
          <nav className="flex flex-col space-y-5" aria-label="Mobile Navigation">
            {mayaContent.header.navItems.map((item) => (
              <div key={item.label} className="border-b border-theme-border/30 pb-4">
                {item.children ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full font-serif text-xl text-theme-text font-medium"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="mt-3 pl-4 space-y-2.5 border-l-2 border-theme-primary/20">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm font-sans text-theme-text-muted hover:text-theme-primary py-1"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-serif text-xl text-theme-text font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button
                href={mayaContent.header.cta.href}
                onClick={() => setMobileOpen(false)}
                variant="primary"
                className="w-full !py-3.5 text-xs uppercase tracking-wider"
              >
                {mayaContent.header.cta.text}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
