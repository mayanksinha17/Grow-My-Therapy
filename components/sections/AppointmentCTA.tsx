"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, MapPin, Send } from "lucide-react";
import { mayaContent } from "@/data/mayaContent";
import Button from "@/components/ui/Button";

export default function AppointmentCTA() {
  const { eyebrow, heading, subheading, cta } = mayaContent.ctaSection;
  const { address, serviceArea, formInstructions } = mayaContent.contact;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionPreference: "In-Person (Santa Monica)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-theme-bg py-16 sm:py-20 lg:py-28 border-t border-theme-border/40">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Office Setting & Practice Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-widest text-theme-primary uppercase block mb-2">
                {eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-theme-text leading-tight mb-4">
                {heading}
              </h2>
              <p className="font-sans text-sm sm:text-base text-theme-text-muted leading-relaxed font-light">
                {subheading}
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-t-[100px] rounded-b-none overflow-hidden shadow-md border-2 border-theme-border/50">
              <Image
                src="/images/maya/office1.jpg"
                alt="Dr. Maya Reynolds Therapy Office in Santa Monica"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>

            <div className="p-5 bg-theme-bg-secondary/70 border border-theme-border/60 space-y-2">
              <div className="flex items-center gap-2 text-xs font-sans font-semibold text-theme-text">
                <MapPin className="w-4 h-4 text-theme-primary shrink-0" />
                <span>Santa Monica Location</span>
              </div>
              <p className="font-sans text-xs text-theme-text-muted">
                {address}
              </p>
              <p className="font-sans text-[11px] text-theme-secondary font-medium">
                {serviceArea}
              </p>
            </div>
          </div>

          {/* Right Column: Consultation Inquiry Form */}
          <div className="lg:col-span-7 bg-theme-bg-secondary/60 p-8 sm:p-10 border border-theme-border/70 shadow-sm">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-theme-text mb-2">
              Request an Initial Consultation
            </h3>
            <p className="font-sans text-xs sm:text-sm text-theme-text-muted font-light mb-6">
              {formInstructions}
            </p>

            {submitted ? (
              <div className="p-6 bg-theme-bg border border-theme-border/80 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-theme-secondary mx-auto" />
                <h4 className="font-serif text-xl text-theme-text">Inquiry Received</h4>
                <p className="font-sans text-xs sm:text-sm text-theme-text-muted">
                  Thank you for reaching out, {formData.name || "there"}. Dr. Maya Reynolds will review your message and be in touch within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block font-medium text-theme-text">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-theme-bg border border-theme-border/80 text-theme-text focus:border-theme-primary focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block font-medium text-theme-text">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-theme-bg border border-theme-border/80 text-theme-text focus:border-theme-primary focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block font-medium text-theme-text">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-theme-bg border border-theme-border/80 text-theme-text focus:border-theme-primary focus:outline-none"
                      placeholder="(310) 000-0000"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="preference" className="block font-medium text-theme-text">
                      Session Preference
                    </label>
                    <select
                      id="preference"
                      value={formData.sessionPreference}
                      onChange={(e) => setFormData({ ...formData, sessionPreference: e.target.value })}
                      className="w-full px-4 py-3 bg-theme-bg border border-theme-border/80 text-theme-text focus:border-theme-primary focus:outline-none"
                    >
                      <option>In-Person (Santa Monica)</option>
                      <option>Telehealth (Across California)</option>
                      <option>Undecided / Open to Both</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block font-medium text-theme-text">
                    What brings you to therapy? (Brief description)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-theme-bg border border-theme-border/80 text-theme-text focus:border-theme-primary focus:outline-none resize-none"
                    placeholder="Share what you are looking for support with..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-theme-primary text-white py-4 font-sans text-xs uppercase tracking-widest font-medium hover:bg-theme-primary-hover transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Consultation Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
