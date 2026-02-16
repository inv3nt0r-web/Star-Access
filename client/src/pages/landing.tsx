import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { BenefitsSection } from "@/components/benefits-section";
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
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
