import { useEffect } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { LabUpdateSection } from "@/components/lab-update-section";
import { SolutionSection } from "@/components/solution-section";
import { VideoShowcaseSection } from "@/components/video-showcase-section";
import { BenefitsSection } from "@/components/benefits-section";
import { FounderSection } from "@/components/founder-section";
import { PricingSection } from "@/components/pricing-section";
import { Footer } from "@/components/footer";

export default function Landing() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:text-sm focus:font-medium"
        data-testid="link-skip-nav"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" role="main">
        <HeroSection />
        <LabUpdateSection />
        <SolutionSection />
        <VideoShowcaseSection />
        <BenefitsSection />
        <FounderSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
