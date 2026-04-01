import { OrganizationJsonLd } from "@/components/JsonLd";
import { HeroSection } from "@/components/HeroSection";
import { LogoTicker } from "@/components/LogoTicker";
import { CasesSection } from "@/components/CasesSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { AIDiscoverySection } from "@/components/AIDiscoverySection";
import { DiscoverySection } from "@/components/DiscoverySection";
import { ServicesSection } from "@/components/ServicesSection";
import { NotListSection } from "@/components/NotListSection";
import { TeamSection } from "@/components/TeamSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <main>
        <HeroSection />
        <LogoTicker />
        <ScrollReveal>
          <ProblemSolutionSection />
        </ScrollReveal>
        <ScrollReveal>
          <CasesSection />
        </ScrollReveal>
        <ScrollReveal>
          <AIDiscoverySection />
        </ScrollReveal>
        <ScrollReveal>
          <DiscoverySection />
        </ScrollReveal>
        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal>
          <NotListSection />
        </ScrollReveal>
        <ScrollReveal>
          <TeamSection />
        </ScrollReveal>
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
      </main>
    </>
  );
}
