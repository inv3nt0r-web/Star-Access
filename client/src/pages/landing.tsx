import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { BenefitsSection } from "@/components/benefits-section";
import { MarketSection } from "@/components/market-section";
import { FounderSection } from "@/components/founder-section";
import { JourneySection } from "@/components/journey-section";
import { ProsperaSection } from "@/components/prospera-section";
import { StoriesSection } from "@/components/stories-section";
import { FeedbackSection } from "@/components/feedback-section";
import { PricingSection } from "@/components/pricing-section";
import { Footer } from "@/components/footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <MarketSection />
        <FounderSection />
        <JourneySection />
        <ProsperaSection />
        <StoriesSection />
        <FeedbackSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
