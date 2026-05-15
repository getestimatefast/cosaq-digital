import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PositioningSection } from "@/components/PositioningSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyCOSAQSection } from "@/components/WhyCOSAQSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cosaq-background text-cosaq-white">
      <div className="soft-grid pointer-events-none absolute inset-0 opacity-70" />
      <Navbar />
      <HeroSection />
      <PositioningSection />
      <ServicesSection />
      <WhyCOSAQSection />
      <PortfolioSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
