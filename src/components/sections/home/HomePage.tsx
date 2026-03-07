"use client";

import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section 
      id="beranda" 
      className="relative w-full min-h-screen flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-24 bg-[url('/assets/img/hero-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 dark:bg-black/40 backdrop-blur-sm" />
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            }
          }
        }}
        className="relative container mx-auto px-4 text-center z-10"
      >
        <motion.h1 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-4xl md:text-6xl font-black uppercase text-slate-100 mb-6 drop-shadow-sm"
        >
          Mulai Usaha Anda Dengan <br className="hidden md:block" /> <span className="text-amber-500 drop-shadow-md">Dukungan Penuh</span>
        </motion.h1>
        
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-lg md:text-xl sm:text-sm text-slate-100 mb-8 max-w-3xl mx-auto drop-shadow-sm"
        >
          Sagawa Group merancang model kemitraan yang praktis. Anda menerima pelatihan, suplai bahan baku, dan panduan manajemen harian. Maksimalkan potensi keuntungan Anda.
        </motion.p>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
          }}
          className="flex justify-center gap-4"
        >
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-all cursor-pointer">
            Gabung Kemitraan
          </button>
          <button className="hover:bg-white text-slate-100 hover:text-slate-900 px-8 py-3 rounded-full font-medium border border-gray-200 transition-all shadow-md cursor-pointer">
            Pelajari Lebih Lanjut
          </button>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-50 to-transparent pointer-events-none z-20 backdrop-blur-[2px] mask-[linear-gradient(to_top,black,transparent)]" />
    </section>
  );
}
