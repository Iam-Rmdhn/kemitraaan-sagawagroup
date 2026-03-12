import { Metadata } from "next";
import { HeroKrb } from "@/components/sections/kagawa-ricebowl/HeroKrb";
import { AboutKrb } from "@/components/sections/kagawa-ricebowl/AboutKrb";
import { MenuKrb } from "@/components/sections/kagawa-ricebowl/MenuKrb";
import { BenefitKrb } from "@/components/sections/kagawa-ricebowl/BenefitKrb";

export const metadata: Metadata = {
  title: "Kagawa Rice Bowl - Paket Kemitraan Sagawa Group",
  description: "Peluang bisnis kemitraan terlaris dengan berbagai varian menu rice bowl berkualitas. Konsep modern, ROI cepat, dan didukung penuh oleh manajemen profesional Sagawa Group.",
};

export default function KagawaRiceBowlPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroKrb />
      <AboutKrb />
      <MenuKrb />
      <BenefitKrb />
    </div>
  );
}
