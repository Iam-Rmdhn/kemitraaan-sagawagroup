import { Metadata } from "next";
import { HeroRmn } from "@/components/sections/rm-nusantara/HeroRmn";
import { AboutRmn } from "@/components/sections/rm-nusantara/AboutRmn";
import { WhyChooseUsRmn } from "@/components/sections/rm-nusantara/WhyChooseUsRmn";
import { MenuRmn } from "@/components/sections/rm-nusantara/MenuRmn";
import { ProblemSolutionRmn } from "@/components/sections/rm-nusantara/ProblemSolutionRmn";
import PricingTabsRmn from "@/components/sections/rm-nusantara/PricingTabsRmn";
import RoiSectionRmn from "@/components/sections/rm-nusantara/RoiSectionRmn";
import { GalleryRmn } from "@/components/sections/rm-nusantara/GalleryRmn";
import { FaqRmn } from "@/components/sections/rm-nusantara/FaqRmn";
import { TimelineSection } from "@/components/sections/shared/TimelineSection";

export const metadata: Metadata = {
  title: "RM Nusantara - Paket Kemitraan Sagawa Group",
  description: "Peluang bisnis kemitraan RM Nusantara. Sajian kuliner otentik Indonesia dengan dukungan penuh dari manajemen Sagawa Group.",
};

export default function RmNusantaraPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroRmn />
      <AboutRmn />
      <ProblemSolutionRmn />
      <WhyChooseUsRmn />
      <MenuRmn />
      <TimelineSection />
      <PricingTabsRmn />
      <RoiSectionRmn />
      <GalleryRmn />
      <FaqRmn />
    </div>
  );
}
