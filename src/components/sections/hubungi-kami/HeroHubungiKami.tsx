"use client";

import { motion } from "motion/react";

export function HeroHubungiKami() {
  return (
    <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 drop-shadow-sm tracking-tight"
        >
          Hubungi Kami
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance mx-auto"
        >
          Tertarik dengan kemitraan? Kirim pesan Anda dan tim kami akan segera
          menghubungi Anda melalui WhatsApp.
        </motion.p>
      </div>
    </section>
  );
}