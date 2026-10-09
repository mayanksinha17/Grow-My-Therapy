"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { cloneContent } from "@/data/cloneContent";
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
    <header className="w-full bg-theme-bg text-theme-text border-b border-theme-border/50 relative z-40">
      <div className="section-container flex items-center justify-between py-5 lg:py-6">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary"
          aria-label="Conejo Valley Family Counseling Home"
        >
          <div className="relative h-12 w-48 sm:h-14 sm:w-56">
            <Image
              src={cloneContent.header.logoImage}
              alt={cloneContent.header.logoText}
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Main Navigation">
          {cloneContent.header.navItems.map((item) => (
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
                  className="flex items-center gap-1.5 font-sans text-sm tracking-wide text-theme-text hover:text-theme-primary transition-colors py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-theme-primary"
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
                  className={`absolute left-0 top-full w-64 bg-theme-bg border border-theme-border/70 shadow-lg py-2 transition-all duration-200 origin-top-left ${
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
                      className="block px-4 py-2 text-xs font-sans text-theme-text hover:bg-theme-bg-secondary hover:text-theme-primary transition-colors"
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
          <Button href={cloneContent.header.cta.href} variant="primary" className="!px-7 !py-2.5 text-xs uppercase tracking-wider">
            {cloneContent.header.cta.text}
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
        <div className="fixed inset-0 top-[73px] sm:top-[81px] bg-theme-bg z-50 overflow-y-auto px-6 py-8 border-t border-theme-border/40 lg:hidden">
          <nav className="flex flex-col space-y-5" aria-label="Mobile Navigation">
            {cloneContent.header.navItems.map((item) => (
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
                href={cloneContent.header.cta.href}
                onClick={() => setMobileOpen(false)}
                variant="primary"
                className="w-full !py-3.5 text-xs uppercase tracking-wider"
              >
                {cloneContent.header.cta.text}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
