import { HeroSection } from "@/components/sections/HomePage";
import { POSFeatureSection } from "@/components/sections/POSFeatureSection";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <POSFeatureSection />
    </div>
  );
}
