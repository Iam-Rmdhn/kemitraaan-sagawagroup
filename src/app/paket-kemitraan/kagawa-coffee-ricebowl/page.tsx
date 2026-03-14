import { Metadata } from "next";
import { HeroKcrb } from "@/components/sections/kagawa-coffee-ricebowl/HeroKcrb";
import { AboutKcrb } from "@/components/sections/kagawa-coffee-ricebowl/AboutKcrb";
import { MenuKcrb } from "@/components/sections/kagawa-coffee-ricebowl/MenuKcrb";
import { BenefitKcrb } from "@/components/sections/kagawa-coffee-ricebowl/BenefitKcrb";
import { TimelineSection } from "@/components/sections/shared/TimelineSection";

export const metadata: Metadata = {
  title: "Kagawa Coffee & Rice Bowl Conner - Paket Kemitraan Sagawa Group",
  description: "Kombinasi F&B premium kopi dan rice bowl dari Sagawa Group. Solusi bisnis komprehensif untuk mendominasi pasar dari pagi hingga malam.",
};

export default function KagawaCoffeeRiceBowlPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroKcrb />
      <AboutKcrb />
      <MenuKcrb />
      <TimelineSection />
      <BenefitKcrb />
    </div>
  );
}
