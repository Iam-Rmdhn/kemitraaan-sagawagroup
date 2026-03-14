"use client";

import { motion } from "motion/react";

export function AboutIb() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "var(--independent-color)" }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-white opacity-[0.05] rounded-full blur-[100px] z-0 pointer-events-none"
      />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-md border border-white/20"
          >
            Your Unique Food Brand Franchise
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 drop-shadow-lg tracking-tight text-balance uppercase"
          >
            Independent Brand
          </motion.h2>

          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="h-1.5 bg-white/40 rounded-full mb-10" 
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6 text-white text-lg md:text-xl font-medium leading-relaxed drop-shadow-sm text-balance"
          >
            <p>
              Independent Brand membuka peluang bagi Anda untuk mengembangkan brand kuliner unik dengan dukungan SagawaGroup, menciptakan sebuah konsep bisnis kuliner yang sesuai dengan visi dan passionmu.
            </p>
            <p className="opacity-90">
              Dengan pendampingan yang komprehensif, kami tidak hanya membantu membangun bisnis dari nol, tetapi juga memberikan dukungan penuh untuk kesuksesan jangka panjang di industri kuliner yang dinamis.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
