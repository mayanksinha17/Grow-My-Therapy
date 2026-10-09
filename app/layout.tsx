import type { Metadata } from "next";
import { Cormorant_Infant, Mulish } from "next/font/google";
import "./globals.css";

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica, CA",
  description:
    "Grounded, evidence-based therapy for adults navigating anxiety, trauma, EMDR, and burnout. In-person therapy in Santa Monica, CA and secure telehealth statewide across California.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantInfant.variable} ${mulish.variable}`}>
      <body className="bg-theme-bg text-theme-text font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
