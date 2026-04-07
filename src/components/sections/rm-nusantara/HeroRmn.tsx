"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { trackEvent, trackCustomEvent } from "@/lib/meta-pixel";

export function HeroRmn() {
  const brandColor = "var(--rmn-color)";
  
  return (
    <section className="relative pt-20 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-slate-50">      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 lg:mb-12"
        >
          <Link 
            href="/paket-kemitraan" 
            className="inline-flex items-center text-sm font-bold transition-colors duration-300 w-fit hover:opacity-80"
            style={{ color: brandColor }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Paket Kemitraan
          </Link>
          
          <div className="hidden sm:block w-px h-4 bg-slate-300" />
          
          <div className="flex items-center text-sm text-slate-500 font-medium space-x-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/paket-kemitraan" className="hover:text-slate-900 transition-colors">Paket Kemitraan</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-bold">RM Nusantara</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 mb-6 lg:mb-8 mx-auto lg:mx-0"
            >
              <Image 
                src="/assets/logos/rm-nusantara.webp" 
                alt="RM Nusantara Logo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                priority
              />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 lg:mb-6 drop-shadow-sm tracking-tight text-balance"
            >
              Bangun Bisnis Rumah Makan Nusantara dengan<span className="text-red-500 underline decoration-red-200 underline-offset-4"> System Autopilot</span>, Balik Modal Dalam 10 Bulan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl text-balance"
            >
              Gabungkan kelezatan otentik dengan manajemen modern.Tanpa perlu jago masak, kami siapkan sistem operasional hingga suplai bahan baku untuk Anda.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-4 lg:mb-6 relative flex justify-center lg:justify-start w-full lg:w-auto"
            >
              <div className="relative inline-block group">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce z-20 pointer-events-none">
                  <div className="relative flex flex-col items-center">
                    <div className="bg-linear-to-r from-yellow-400 to-amber-500 text-amber-950 text-[10px] sm:text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-xl shadow-lg relative z-10 whitespace-nowrap">
                      Konsultasi Gratis!
                    </div>
                    <div className="w-3 h-3 bg-amber-500 rotate-45 -mt-2 shadow-sm relative z-0 rounded-[2px]" />
                  </div>
                </div>

                <a 
                  href="https://wa.me/62812147036900?text=Halo%20Sagawa%20Group,%20saya%20tertarik%20dengan%20info%20Kemitraan%20RM%20Nusantara%20beserta%20promonya..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-2 bg-slate-900 text-white px-8 sm:px-10 py-4 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-slate-800 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden"
                  onClick={() => {
                    trackEvent("Contact", { content_name: "RM Nusantara Hero" });
                    trackCustomEvent("WhatsAppClick", { source: "rmn_hero" });
                  }}
                >
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block" />
                  Klaim Promo Sekarang
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full mt-8 lg:mt-0 flex flex-col items-center justify-center h-full"
          >            
            <div className="relative w-full rounded-4xl sm:rounded-4xl p-4 sm:p-2 mb-6 pointer-events-none drop-shadow-xl hover:drop-shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <Image 
                src="/assets/img/gerai/all-rmn.webp" 
                alt="Highlight RM Nusantara Product"
                width={1200}
                height={600}
                className="w-full h-auto object-contain transform scale-100 group-hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Sub brands line separator */}
            <div className="w-full h-px bg-slate-200 mb-6"></div>
            
            <div className="w-full flex justify-center items-center gap-6 sm:gap-10 opacity-80">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 hover:opacity-100 transition-opacity">
                <Image src="/assets/logos/masgaw.webp" alt="Mas Gaw Logo" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain" />
              </div>
              <div className="h-10 w-px bg-slate-300"></div>
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 hover:opacity-100 transition-opacity">
                <Image src="/assets/logos/warnas.webp" alt="Warnas Menu Logo" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain" />
              </div>
              <div className="h-10 w-px bg-slate-300"></div>
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 hover:opacity-100 transition-opacity">
                <Image src="/assets/logos/masakan mas gawa.webp" alt="Masakan Mas Gawa Logo" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain" />
              </div>
            </div>
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 p-2 mt-4"
            >
                {/* Stat 1 */}
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center lg:items-start text-center lg:text-left transition-transform hover:-translate-y-1 duration-300">
                  <h4 className="text-2xl font-black text-slate-900 mb-1">{"< 1"} <span className="text-xl">Tahun</span></h4>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest leading-snug">Balik Modal</p>
                </div>
                
                {/* Stat 2 */}
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center lg:items-start text-center lg:text-left transition-transform hover:-translate-y-1 duration-300">
                  <h4 className="text-2xl font-black text-slate-900 mb-1">24/7</h4>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest leading-snug">Support</p>
                </div>
                
                {/* Stat 3 */}
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center lg:items-start text-center lg:text-left col-span-2 sm:col-span-1 transition-transform hover:-translate-y-1 duration-300">
                  <h4 className="text-2xl font-black text-slate-900 mb-1">99%</h4>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest leading-snug">Kepuasan</p>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
