import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { BenefitsSection } from "@/components/benefits-section";
import { MarketSection } from "@/components/market-section";
import { FounderSection } from "@/components/founder-section";
import { GovernmentSection } from "@/components/government-section";
import { JourneySection } from "@/components/journey-section";
import { ProsperaSection } from "@/components/prospera-section";
import { StoriesSection } from "@/components/stories-section";
import { FeedbackSection } from "@/components/feedback-section";
import { PremierPassSection } from "@/components/premier-pass-section";
import { PricingSection } from "@/components/pricing-section";
import { Footer } from "@/components/footer";

export default function Landing() {
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
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <MarketSection />
        <FounderSection />
        <GovernmentSection />
        <JourneySection />
        <ProsperaSection />
        <StoriesSection />
        <FeedbackSection />
        <PremierPassSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
