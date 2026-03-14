import { Metadata } from "next";
import { HeroIb } from "@/components/sections/independent-brand/HeroIb";
import { AboutIb } from "@/components/sections/independent-brand/AboutIb";
import { BenefitIb } from "@/components/sections/independent-brand/BenefitIb";
import { TimelineSection } from "@/components/sections/shared/TimelineSection";

export const metadata: Metadata = {
  title: "Independent Brand - Paket Kemitraan Sagawa Group",
  description: "Peluang bisnis kemitraan Independent Brand. Bangun brand kuliner unik Anda dengan dukungan penuh dari manajemen Sagawa Group.",
};

export default function IndependentBrandPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroIb />
      <AboutIb />
      <TimelineSection />
      <BenefitIb />
    </div>
  );
}
