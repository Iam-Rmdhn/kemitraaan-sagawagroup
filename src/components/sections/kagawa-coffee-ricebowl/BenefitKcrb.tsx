"use client";

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { FluidLink } from "@/components/ui/FluidLink";
import { trackEvent, trackCustomEvent } from "@/lib/meta-pixel";

export function BenefitKcrb() {
  const brandColor = "var(--kagawacoffeebowl-color)";
  const secondColor = "var(--secondary-kagawacoffeebowl-color)";

  const features = [
    "Lisensi Brand Kagawa",
    "Booth & Peralatan Lengkap Premium",
    "Seragam Karyawan",
    "Bantuan Pencarian Karyawan",
    "Sistem Kasir (POS)",
    "Bahan Baku Awal Grade A",
    "Marketing & Promosi VIP",
    "Bimbingan Operasional Ekstra",
    "Menu Spesial Eksekutif",
    "Buku SOP Standar Jepang",
  ];

  const priceOriginal = 199000000;
  const priceDiscount = 169000000;

  const wamessage = encodeURIComponent(
    "Hai Sagawa Group, Saya tertarik dengan Program Kemitraan Kagawa Coffee & Rice Bowl Conner."
  );
  
  const whatsappUrl = `https://wa.me/6287823521666?text=${wamessage}`;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 drop-shadow-sm tracking-tight text-balance">
              Investasi & <span style={{ color: secondColor }}>Benefit</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl text-balance">
              Bergabunglah bersama kami dan dapatkan semua fasilitas eksklusif untuk memulai dan menjalankan bisnis Kagawa Coffee & Rice Bowl Conner yang sukses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6">
              {features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start group"
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center mr-4 shrink-0 mt-0.5 transition-colors duration-300"
                    style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                  >
                    <Check className="w-3.5 h-3.5 font-bold" strokeWidth={3} />
                  </div>
                  <span className="text-sm md:text-base text-slate-700 font-medium leading-snug group-hover:text-slate-900 transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-xl relative overflow-hidden group">
              <div className="relative z-10 text-center flex flex-col items-center">
                <span className="inline-block py-1.5 px-4 rounded-full bg-white text-xs font-bold tracking-widest uppercase mb-8 shadow-sm border border-slate-100" style={{ color: secondColor }}>
                  Investasi Bisnis Kombinasi
                </span>
                
                <div className="mb-2">
                  <p className="text-slate-400 font-medium mb-1">Harga Normal</p>
                  <p className="text-lg md:text-xl font-medium text-slate-400 line-through decoration-slate-400 opacity-80">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(priceOriginal)}
                  </p>
                </div>

                <div className="mb-10">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Harga Setelah Promo</p>
                  <p 
                    className="text-4xl md:text-5xl font-black drop-shadow-sm" 
                    style={{ color: brandColor }}
                  >
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(priceDiscount)}
                  </p>
                </div>

                <FluidLink 
                  href={whatsappUrl}
                  target="_blank"
                  className="w-full group/btn flex items-center justify-center py-4 px-6 rounded-2xl font-bold text-white transition-all shadow-lg hover:shadow-xl active:scale-[0.98] text-lg"
                  style={{ backgroundColor: secondColor }}
                  fluidColor="rgba(0, 0, 0, 0.15)"
                  onClick={() => {
                    trackEvent("Contact", { content_name: "Kagawa Coffee & Rice Bowl Conner" });
                    trackCustomEvent("WhatsAppClick", { source: "kcrb_benefit" });
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Mulai Kolaborasi
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </FluidLink>
                
                <p className="text-xs text-slate-400 mt-5 font-medium">FREE 100 Porsi Rice Bowl & Minuman Non Coffee. Promo saat Grand Opening</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
