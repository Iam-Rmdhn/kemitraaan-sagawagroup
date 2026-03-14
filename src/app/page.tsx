import { HeroSection } from "@/components/sections/home/HomePage";
import { POSFeatureSection } from "@/components/sections/home/POSFeatureSection";
import { PartnershipChoicesSection } from "@/components/sections/home/PartnershipChoicesSection";
import { TimelineSection } from "@/components/sections/shared/TimelineSection";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <POSFeatureSection />
      <PartnershipChoicesSection />
      <TimelineSection />
    </div>
  );
}
