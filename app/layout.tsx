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
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description:
    "Counseling for adults, couples, and children in Newbury Park & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more.",
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
