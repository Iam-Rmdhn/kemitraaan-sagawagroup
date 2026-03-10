import { Metadata } from "next";
import { PaketKemitraanHeroSection } from "@/components/sections/paket-kemitraan/PaketKemitraanHeroSection";
import { PaketKemitraanListSection } from "@/components/sections/paket-kemitraan/PaketKemitraanListSection";

export const metadata: Metadata = {
  title: "Pilih Paket Kemitraan - Sagawa Group",
  description: "Dapatkan 5 konsep kemitraan kuliner teruji dengan support lengkap dari pusat.",
};

export default function PaketKemitraanPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PaketKemitraanHeroSection />
      <PaketKemitraanListSection />
    </div>
  );
}
