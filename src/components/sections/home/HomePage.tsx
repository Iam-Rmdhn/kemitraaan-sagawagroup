"use client";

import { motion, Variants } from "motion/react";
import { FluidLink } from "@/components/ui/FluidLink";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    } 
  }
};

const actionVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2
    } 
  }
};

export function HeroSection() {
  const waNumber = "6281808985548";
  const defaultMessage = "Halo Tim Sagawa Group! 👋\n\nSaya tertarik untuk bergabung dengan Kemitraan Sagawa Group. Boleh minta informasi lebih detail mengenai prosedur dan paket yang tersedia?\n\nTerima kasih.";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <section 
      id="beranda" 
      className="relative w-full min-h-screen flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-24 bg-[url('/assets/img/hero-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 dark:bg-black/40 backdrop-blur-sm" />
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative container mx-auto px-4 text-center z-10"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-black uppercase text-slate-100 mb-6 drop-shadow-sm"
        >
          Mulai Usaha Anda Dengan <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500 drop-shadow-md">Dukungan Penuh</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl sm:text-sm text-slate-100 mb-8 max-w-3xl mx-auto drop-shadow-sm"
        >
          Sagawa Group merancang model kemitraan yang praktis. Anda menerima pelatihan, suplai bahan baku, dan panduan manajemen harian. Maksimalkan potensi keuntungan Anda.
        </motion.p>
        
        <motion.div 
          variants={actionVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <FluidLink 
            href={waUrl}
            target="_blank"
            className="group/btn-primary inline-flex items-center justify-center bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-shadow active:scale-[0.98] cursor-pointer"
            fluidColor="#b91c1c"
          >
            <span className="relative z-10 font-semibold tracking-wide">
              Gabung Kemitraan
            </span>
          </FluidLink>
          
          <FluidLink 
            href="#pos-feature"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#pos-feature')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group/btn-secondary inline-flex items-center justify-center text-slate-100 hover:text-slate-900 px-8 py-3 rounded-full font-medium border border-gray-200 shadow-md transition-colors duration-300 active:scale-[0.98] cursor-pointer"
            fluidColor="#ffffff"
          >
            <span className="relative z-10 font-semibold tracking-wide">
              Pelajari Lebih Lanjut
            </span>
          </FluidLink>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-50 to-transparent pointer-events-none z-20 backdrop-blur-[2px] mask-[linear-gradient(to_top,black,transparent)]" />
    </section>
  );
}
