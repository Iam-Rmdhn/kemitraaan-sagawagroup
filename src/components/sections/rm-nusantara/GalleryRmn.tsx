'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const galleryImages = [
  {
    src: '/assets/img/doc/RM/2.webp',
    className: 'md:col-span-1 md:row-span-1 h-[200px] md:h-[250px]',
  },
  {
    src: '/assets/img/doc/RM/4.webp',
    className: 'md:col-span-2 md:row-span-1 h-[200px] md:h-[250px]',
  },
  {
    src: '/assets/img/doc/RM/3.webp',
    className: 'md:col-span-1 md:row-span-1 h-[200px] md:h-[250px]',
  },
  {
    src: '/assets/img/doc/RM/7.webp',
    className: 'md:col-span-2 md:row-span-1 h-[200px] md:h-[250px]',
  },
  {
    src: '/assets/img/doc/RM/5.webp',
    className: 'md:col-span-1 md:row-span-1 h-[200px] md:h-[250px]',
  },
  {
    src: '/assets/img/doc/RM/1.webp',
    className: 'md:col-span-1 md:row-span-1 h-[200px] md:h-[250px]',
  },
];

export function GalleryRmn() {
  return (
    <section className="py-20 sm:py-28 bg-linear-to-b from-green-900 to-green-700 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-green-700/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-green-950/50 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-sm">
              Dokumentasi & <br className="hidden sm:block" />
              <span className="text-amber-400">Aktivitas Outlet Kami</span>
            </h2>
            <p className="text-lg text-red-100/90 font-medium text-balance drop-shadow-sm">
              Momen berharga dari berbagai outlet RM Nusantara, mulai dari kemeriahan pembukaan (Grand Opening), 
              suasana pelayanan yang ramah, hingga proses kerja sama dengan para mitra.
            </p>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
        >
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden group shadow-lg bg-green-950/40 border border-green-800/50 ${image.className}`}
            >
              <Image
                src={image.src}
                fill
                loading ="eager"
                sizes ="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" alt={''}/>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
