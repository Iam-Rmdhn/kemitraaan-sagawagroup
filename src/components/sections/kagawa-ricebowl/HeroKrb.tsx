"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowLeft, TrendingUp, Monitor, MessageCircleHeart } from "lucide-react";

export function HeroKrb() {
  const brandColor = "var(--kagawaricebowl-color)";
  
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
            <span className="text-slate-900 font-bold">Kagawa Rice Bowl</span>
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
                src="/assets/logos/kagawa-ricebowl.webp" 
                alt="Kagawa Rice Bowl Logo"
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
              Peluang Bisnis <span style={{ color: brandColor }}>Rice Bowl</span> Terlaris
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8 lg:mb-10 max-w-xl text-balance"
            >
              Konsep modern dengan ROI cepat dan menu berasaskan standar restoran premium Jepang. Dapatkan keuntungan maksimal bersama Sagawa Group.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 w-full"
            >
                {/* Stat 1 */}
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center lg:items-start text-center lg:text-left transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-1">{"< 1"} <span className="text-xl">Tahun</span></h4>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest leading-snug">Balik Modal</p>
                </div>
                
                {/* Stat 2 */}
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center lg:items-start text-center lg:text-left transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-1">24/7</h4>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest leading-snug">Support</p>
                </div>
                
                {/* Stat 3 */}
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center lg:items-start text-center lg:text-left col-span-2 sm:col-span-1 transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>
                    <MessageCircleHeart className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-1">98%</h4>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest leading-snug">Kepuasan</p>
                </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full mt-8 lg:mt-0"
          >            
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] rounded-[3rem]">
              <Image 
                src="/assets/img/gerai/kagawa-ricebowl.webp" 
                alt="Highlight Kagawa Rice Bowl Product"
                fill
                className="object-contain lg:object-right"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
