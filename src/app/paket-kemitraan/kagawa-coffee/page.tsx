import { Metadata } from "next";
import { HeroKc } from "@/components/sections/kagawa-coffee/HeroKc";
import { AboutKc } from "@/components/sections/kagawa-coffee/AboutKc";
import { MenuKc } from "@/components/sections/kagawa-coffee/MenuKc";
import { BenefitKc } from "@/components/sections/kagawa-coffee/BenefitKc";
import { TimelineSection } from "@/components/sections/shared/TimelineSection";

export const metadata: Metadata = {
  title: "Kagawa Coffee Conner - Paket Kemitraan Sagawa Group",
  description: "Peluang bisnis kedai kopi khas Jepang. Menawarkan sensasi minum kopi artisan grade A dengan desain minimalis dan ROI cepat di bawah dukungan Sagawa Group.",
};

export default function KagawaCoffeeConnerPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroKc />
      <AboutKc />
      <MenuKc />
      <TimelineSection />
      <BenefitKc />
    </div>
  );
}
