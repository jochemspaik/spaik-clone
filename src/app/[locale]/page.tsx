import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LogoTicker } from "@/components/LogoTicker";
import { CasesSection } from "@/components/CasesSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { DiscoverySection } from "@/components/DiscoverySection";
import { ServicesSection } from "@/components/ServicesSection";
import { TeamSection } from "@/components/TeamSection";
import { InsightsSection } from "@/components/InsightsSection";
import { AIDiscoverySection } from "@/components/AIDiscoverySection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogoTicker />
        <CasesSection />
        <ProblemSolutionSection />
        <DiscoverySection />
        <ServicesSection />
        <TeamSection />
        <InsightsSection />
        <AIDiscoverySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
