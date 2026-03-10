"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "motion/react";

export function PaketKemitraanHeroSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900 px-4 overflow-hidden">
      <motion.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className="relative z-10 text-center max-w-6xl mx-auto flex flex-col items-center"
      >
        <motion.h1 
          variants={item}
          className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tighter text-slate-900 drop-shadow-sm text-balance"
        >
          Pilih Paket Kemitraan Kuliner{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-400">
            Terbaik Untuk Anda.
          </span>
        </motion.h1>
        <motion.p 
          variants={item}
          className="text-lg md:text-2xl text-slate-600 font-normal mb-16 max-w-3xl mx-auto leading-relaxed text-balance"
        >
          5 Konsep Bisnis Teruji dengan <span className="font-semibold text-red-400">Support Lengkap dari Pusat</span>.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <Link 
          href="#paket-list" 
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#paket-list')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center group cursor-pointer focus:outline-none"
        >
          <span className="text-sm font-medium text-slate-400 mb-3">Pelajari lebih lanjut</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="p-1"
          >
            <ChevronDown className="w-6 h-6 text-red-500" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
