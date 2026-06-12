"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle, Star } from "lucide-react";
import { FluidLink } from "@/components/ui/FluidLink";
import { trackEvent, trackCustomEvent } from "@/lib/meta-pixel";

const TAB_DATA = [
  {
    id: "license-package",
    title: "License Package",
    price: "99",
    originalPrice: "99.000.000",
    description:
      "Ditujukan bagi mitra yang telah memiliki brand dan operasional sendiri dengan kebutuhan utama pada akses supply chain dan sistem dari Sagawa.",
    benefits: [
      "Akses supply chain Sagawa",
      "Dukungan sistem operasional",
      "Fleksibilitas pengelolaan brand",
      "Konsultasi bisnis mendalam",
      "Lisensi seumur hidup",
    ],
  },
  {
    id: "independent-franchise-package",
    title: "Independent Franchise Package",
    price: "389",
    originalPrice: "389.000.000",
    description:
      "Solusi menyeluruh bagi mitra yang ingin membangun brand secara lebih terstruktur dengan dukungan penuh dari Sagawa.",
    benefits: [
      "Sistem operasional terintegrasi",
      "Akses supply chain Sagawa",
      "Pendampingan bisnis",
      "Potensi mengembangkan franchise sendiri",
      "Dibantu mencari lokasi strategis",
      "SOP & Training sesuai kebutuhan",
    ],
  },
] as const;

export function BenefitIb() {
  const brandColor = "var(--independent-color)";
  const [activeTab, setActiveTab] = useState(0);

  const activePricing = TAB_DATA[activeTab];

  const waMessage = `Halo Tim Kemitraan Sagawa Group! 👋\n\nSaya sangat tertarik dengan peluang bisnis kemitraan *Independent Brand* - *${activePricing.title}*.\n\nMohon informasi lebih lanjut terkait:\n1. Skema kemitraan & proyeksi ROI\n2. Ketersediaan lokasi di wilayah saya\n3. Tahapan awal bergabung untuk paket ${activePricing.title}\n\nTerima kasih.`;

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" id="packages">
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: brandColor }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-white opacity-[0.05] rounded-full blur-[100px] z-0 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-md border border-white/20"
            >
              Pilihan Kemitraan
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
              Investasi &
              <span className="text-white/90">Benefit</span>
            </h2>
            <p className="text-lg text-white/80 font-medium text-balance">
              Dapatkan fasilitas terlengkap dan dukungan penuh dari kami untuk memastikan bisnis kuliner unik Anda beroperasi optimal dan sukses di pasaran.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-nowrap overflow-x-auto justify-start md:justify-center scrollbar-hide border-b border-white/20 mb-8 sm:mb-12 relative pb-1 hide-scrollbar">
            {TAB_DATA.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`
                    relative px-6 py-4 flex items-center justify-center gap-2.5
                    text-sm sm:text-base font-bold whitespace-nowrap transition-all duration-300 ease-in-out
                    ${isActive ? "text-white" : "text-white/60 hover:text-white/90 hover:bg-white/5"}
                  `}
                >
                  {tab.title}
                  {isActive && (
                    <motion.div
                      layoutId="ibActiveTabUnderline"
                      className="absolute -bottom-px left-0 right-0 h-[3px] rounded-t-full bg-white"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePricing.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full"
              >
                <div className="max-w-lg mx-auto">
                  {/* Single Pricing Card */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group border border-white/10 relative">
                    {activeTab === 1 && (
                      <div className="absolute top-0 right-0 z-10 overflow-hidden w-[100px] h-[100px] pointer-events-none">
                        <div className="absolute top-[22px] -right-[32px] w-[140px] rotate-50 bg-yellow-400 text-yellow-950 text-[9px] font-black py-1 shadow-md flex items-center justify-center gap-1 tracking-wider border-y border-yellow-300">
                          <Star className="w-2.5 h-2.5 fill-yellow-950 text-yellow-950" />
                          REKOMENDASI
                        </div>
                      </div>
                    )}

                    {/* Package Header */}
                    <div className="p-6 sm:p-8 bg-slate-50 relative overflow-hidden border-b border-slate-100">
                      <h4 className="text-xl font-black text-slate-800 mb-2 uppercase relative z-10">{activePricing.title}</h4>

                      {/* Pricing */}
                      <div className="flex flex-col gap-1 mb-4 relative z-10">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-slate-400 line-through decoration-slate-400 decoration-2 opacity-0">
                            Rp {activePricing.originalPrice}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] bg-red-500 font-bold text-white border border-slate-900/10 shadow-sm">
                            PACKAGE
                          </span>
                        </div>
                        <div className="flex items-baseline gap-1" style={{ color: brandColor }}>
                          <span className="text-xl font-bold">Rp</span>
                          <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">{activePricing.price}</span>
                          <span className="text-xl font-bold">.000.000</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed font-medium relative z-10">
                        {activePricing.description}
                      </p>
                    </div>

                    {/* Benefits List */}
                    <div className="p-6 sm:p-8 grow flex flex-col relative bg-white">
                      <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Termasuk dalam paket
                      </h5>
                      <ul className="space-y-4 mb-8 grow relative z-10">
                        {activePricing.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <div className="mt-0.5 shrink-0">
                              <CheckCircle2 className="w-5 h-5" style={{ color: brandColor }} />
                            </div>
                            <span className="text-sm text-slate-700 font-medium leading-tight">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Single CTA */}
                      <div className="mt-auto pt-2 relative z-10">
                        <FluidLink
                          href={`https://wa.me/6281214703690?text=${encodeURIComponent(waMessage)}`}
                          target="_blank"
                          className="block w-full py-3.5 px-4 text-center rounded-xl font-bold text-white transition-all overflow-hidden border-2 shadow-md hover:shadow-lg"
                          style={{
                            backgroundColor: brandColor,
                            borderColor: "transparent",
                          }}
                          fluidColor="rgba(0, 0, 0, 0.15)"
                          onClick={() => {
                            trackEvent("Contact", { content_name: `Independent Brand - ${activePricing.title}` });
                            trackCustomEvent("WhatsAppClick", { source: "ib_benefit", package: activePricing.title });
                          }}
                        >
                          <span className="relative z-10 pointer-events-none drop-shadow-sm">Pilih Paket</span>
                        </FluidLink>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
