import type { Metadata } from "next";
import { HeroHubungiKami } from "@/components/sections/hubungi-kami/HeroHubungiKami";
import { ContactHubungiKami } from "@/components/sections/hubungi-kami/ContactHubungiKami";
import { PaketNavigationHubungiKami } from "@/components/sections/hubungi-kami/PaketNavigationHubungiKami";

export const metadata: Metadata = {
  title: "Hubungi Kami | Sagawa Group Kemitraan",
  description: "Tertarik dengan kemitraan? Kirim pesan Anda dan tim kami akan segera menghubungi Anda melalui WhatsApp.",
};

export default function HubungiKamiPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroHubungiKami />
      <ContactHubungiKami />
      <PaketNavigationHubungiKami />
    </main>
  );
}