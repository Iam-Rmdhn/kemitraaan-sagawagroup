"use client";

import { motion } from "motion/react";

export function AboutKcrb() {
  const brandColor = "var(--kagawacoffeebowl-color)";
  const secondColor = "var(--secondary-kagawacoffeebowl-color)";

  return (
    <section className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-stone-900"
      />
      
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-(--secondary-kagawacoffeebowl-color) opacity-[0.4] rounded-full blur-[120px] z-0 pointer-events-none"
        style={{ backgroundColor: brandColor }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-5xl font-black text-white mb-4 drop-shadow-md tracking-tight"
          >
            Kagawa Coffee & Rice Bowl Conner
          </motion.h2>
          
          <motion.h3 
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-widest"
            style={{ color: secondColor }}
          >
            absolute combination
          </motion.h3>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="h-1.5 rounded-full mb-10" 
            style={{ backgroundImage: `linear-gradient(to top, ${brandColor}, ${secondColor})` }}
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6 text-base md:text-lg text-slate-200/90 leading-relaxed font-medium mx-auto max-w-3xl text-balance drop-shadow-sm"
          >
            <p>
              Kagawa Coffee & Rice Bowl Corner menghadirkan solusi bisnis F&B yang lengkap dengan menggabungkan kekuatan coffee premium dan rice bowl dalam satu konsep terintegrasi. Memaksimalkan revenue stream dengan menyajikan menu lengkap yang memenuhi kebutuhan pelanggan dari pagi hingga malam.
            </p>
            <p>
              Dengan konsep yang elegan, sederhana, dan mudah diterima semua kalangan Kagawa Coffee & Rice Bowl Corner siap menjadi peluang bisnis yang menjanjikan, sekaligus menghadirkan nilai lebih bagi mitra dan pelanggan. Kami percaya, setiap cangkir kopi dan seporsi rice bowl adalah bentuk nyata dari dedikasi kami dalam membangun brand yang kuat, berkelanjutan, dan bernilai.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
