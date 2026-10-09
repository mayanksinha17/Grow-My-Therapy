import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import EmpathySection from "@/components/sections/EmpathySection";
import WhoWeHelpSection from "@/components/sections/WhoWeHelpSection";
import QuoteBanner from "@/components/sections/QuoteBanner";
import AreasOfExpertise from "@/components/sections/AreasOfExpertise";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import TransitionBanner from "@/components/sections/TransitionBanner";
import SpecialtiesGrid from "@/components/sections/SpecialtiesGrid";
import AppointmentCTA from "@/components/sections/AppointmentCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-theme-bg text-theme-text selection:bg-theme-primary/10 selection:text-theme-primary">
      <Header />
      <main id="page" className="flex-1">
        <HeroSection />
        <EmpathySection />
        <WhoWeHelpSection />
        <QuoteBanner />
        <AreasOfExpertise />
        <HowWeWorkSection />
        <TransitionBanner />
        <SpecialtiesGrid />
        <AppointmentCTA />
      </main>
      <Footer />
    </div>
  );
}
