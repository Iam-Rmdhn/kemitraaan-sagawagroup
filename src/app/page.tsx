import { HeroSection } from "@/components/sections/home/HomePage";
import { POSFeatureSection } from "@/components/sections/home/POSFeatureSection";
import { PartnershipChoicesSection } from "@/components/sections/home/PartnershipChoicesSection";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <POSFeatureSection />
      <PartnershipChoicesSection />
    </div>
  );
}
