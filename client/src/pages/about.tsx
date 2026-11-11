import { Header } from "@/components/header";
import { ProblemSection } from "@/components/problem-section";
import { MarketSection } from "@/components/market-section";
import { GovernmentSection } from "@/components/government-section";
import { JourneySection } from "@/components/journey-section";
import { ProsperaSection } from "@/components/prospera-section";
import { StoriesSection } from "@/components/stories-section";
import { Footer } from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" role="main" className="pt-14" data-testid="page-about">
        <ProblemSection />
        <JourneySection />
        <MarketSection />
        <GovernmentSection />
        <ProsperaSection />
        <StoriesSection />
      </main>
      <Footer />
    </div>
  );
}
