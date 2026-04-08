"use client";

import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { FluidLink } from "@/components/ui/FluidLink";
import { trackEvent, trackCustomEvent } from "@/lib/meta-pixel";

export function PaketKemitraanListSection() {
  const packages = [
    {
      id: "krb",
      slug: "kagawa-ricebowl",
      name: "Kagawa Rice Bowl",
      color: "var(--kagawaricebowl-color)",
      image: "/assets/img/gerai/kagawa-ricebowl.webp",
      originalPrice: 99000000,
      discountPrice: 79000000,
      features: [
        "Bahan Baku & Peralatan Premium", 
        "Dibantu Mencari Karyawan Berkualitas", 
        "SOP & Training Komprehensif",
        "Media Promosi Digital & Konvensional",
        "Dukungan 24/7 dari Pusat",
        "Akses ke jaringan supplier resmi Kagawa Rice Bowl",
        "Cocok untuk entry-level high traffic area "
      ]
    },
    {
      id: "kc",
      slug: "kagawa-coffee",
      name: "Kagawa Coffee Conner",
      color: "var(--kagawacoffee-color)",
      image: "/assets/img/gerai/kagawa-coffee-conner.webp",
      originalPrice: 169000000,
      discountPrice: 139000000,
      features: [
        "Bahan Baku & Peralatan Coffee Grade A", 
        "Dibantu Mencari Karyawan Barista", 
        "SOP & Training Barista Profesional",
        "Media Promosi & Digital Marketing",
        "Dukungan Operasional dari Pusat",
        "Akses ke jaringan supplier resmi Kagawa Coffee",
      ]
    },
    {
      id: "kcrb",
      slug: "kagawa-coffee-ricebowl",
      name: "Kagawa Coffee & Rice Bowl Conner",
      color: "var(--kagawacoffeebowl-color)",
      image: "/assets/img/gerai/coffee-ricebowl.webp",
      originalPrice: 199000000,
      discountPrice: 169000000,
      features: [
        "Potensi revenue lebih optimal",
        "Bahan Baku & Peralatan Lengkap", 
        "Dibantu Mencari Tim Profesional", 
        "SOP & Training Multi-Skill",
        "Media Promosi Terintegrasi",
        "Dukungan Penuh dari Pusat",
        "Akses ke semua jaringan supplier",
      ]
    },
    {
      id: "rmn",
      slug: "rm-nusantara",
      name: "RM Nusantara",
      color: "var(--rmn-color)",
      image: "/assets/img/gerai/all-rmn.webp",
      originalPrice: 199000000,
      discountPrice: 139000000,
      features: [
        "Setup operasional lengkap",
        "Peralatan dan bahan baku fully suported", 
        "Dibantu Mencari Karyawan Berpengalaman", 
        "Siap langsung berjalan (ready to operate)",
        "Media Promosi Lokal & Digital",
        "Dukungan Operasional Harian",
        "Sistem operasional terintegrasi"
      ]
    },
    {
      id: "ib",
      slug: "independent-brand",
      name: "Independent Brand",
      color: "var(--independent-color)",
      image: "/assets/img/gerai/indepandent.webp",
      originalPrice: 119000000,
      discountPrice: 99000000,
      features: [
        "Konsultasi Bisnis Mendalam", 
        "Dibantu Mencari Lokasi Strategis", 
        "Sistem Operasional Outlet Custom",
        "SOP & Training Sesuai Kebutuhan",
        "Lisensi Seumur Hidup"
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.3 } },
  };

  return (
    <section id="paket-list" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16 md:mb-24"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 drop-shadow-sm tracking-tight text-balance">
          5 Paket Kemitraan
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">
          Pilih konsep bisnis yang sesuai dengan budget dan visi Anda
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center gap-8 md:gap-10"
      >
        {packages.map((pkg) => (
          <motion.div 
            variants={itemVariants}
            key={pkg.id} 
            className="w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.67rem)] bg-white rounded-4xl shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col border border-slate-100 group relative mt-24 pt-32 px-6 pb-8"
          >

            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-52 drop-shadow-xl group-hover:-translate-y-4 transition-transform duration-500 z-10">
              <Image 
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 256px, 256px"
              />
            </div>
            
            <div className="text-center relative z-20">
              <h3 
                className="text-2xl font-black mb-6 drop-shadow-sm"
                style={{ color: pkg.color }}
              >
                {pkg.name}
              </h3>
            </div>
            
            <div className="space-y-4 mb-8 bg-slate-50/50 p-6 rounded-2xl border border-slate-100 flex-1 relative z-20">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Benefit Utama</h4>
              {pkg.features.map((feature, i) => (
                <div key={i} className="flex items-start text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 mr-3 shrink-0 mt-0.5 font-bold" style={{ color: pkg.color }} strokeWidth={3} />
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="flex flex-col items-center mb-6 relative z-20">
              <span className="text-sm font-medium text-slate-400 line-through decoration-slate-400 opacity-80 mb-1">
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(pkg.originalPrice)}
              </span>
              <span 
                className="text-3xl lg:text-4xl font-black shrink-0" 
                style={{ color: pkg.color }}
              >
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(pkg.discountPrice)}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full mt-auto relative z-20">
              <FluidLink 
                href={`/paket-kemitraan/${pkg.slug}`}
                className="group/btn-detail flex-1 flex items-center justify-center py-3.5 px-4 rounded-xl font-bold transition-all active:scale-[0.98] border-2 bg-white"
                style={{ borderColor: pkg.color, color: pkg.color }}
                fluidColor={pkg.color}
              >
                <span className="relative z-10 group-hover/btn-detail:text-white transition-colors duration-300">
                  Lihat Detail
                </span>
              </FluidLink>

              <FluidLink 
                href={`https://wa.me/6281214703690?text=${encodeURIComponent(
                  `Halo Tim Kemitraan Sagawa Group! 👋\n\nSaya sangat tertarik dengan peluang bisnis kemitraan *${pkg.name}*.\n\nMohon informasi lebih lanjut terkait:\n1. Skema kemitraan & proyeksi ROI\n2. Ketersediaan lokasi di wilayah saya\n3. Tahapan awal bergabung memanfaatkan penawaran spesial saat ini\n\nTerima kasih.`
                )}`}
                target="_blank"
                className="group/btn-join flex-[1.2] flex items-center justify-center py-3.5 px-4 rounded-xl font-bold text-white transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] active:scale-[0.98]"
                style={{ backgroundColor: pkg.color }}
                fluidColor="rgba(0, 0, 0, 0.15)"
                onClick={() => {
                  trackEvent("Contact", { content_name: pkg.name });
                  trackCustomEvent("WhatsAppClick", { source: "paket_list", package: pkg.name });
                }}
              >
                <span className="relative z-10 flex items-center">
                  Bergabung
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn-join:translate-x-1.5 transition-transform duration-300" />
                </span>
              </FluidLink>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
