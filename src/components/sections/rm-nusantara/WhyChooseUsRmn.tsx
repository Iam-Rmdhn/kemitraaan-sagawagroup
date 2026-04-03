'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { ChefHat, Headset, Megaphone, Truck } from 'lucide-react';

const features = [
  {
    title: 'SOP Masakan Nusantara',
    description: 'Resep rahasia yang konsisten di setiap cabang. Tidak ketergantungan pada koki tertentu.',
    icon: ChefHat,
  },
  {
    title: 'Full Support 24/7',
    description: 'Kami dampingi dari survei lokasi, renovasi, hingga pelatihan karyawan di tempat.',
    icon: Headset,
  },
  {
    title: 'Marketing Nasional & Lokal',
    description: 'Dibantu promosi lewat Influencer, ads, dan pendaftaran online food (Grab/Gojek/Shopee).',
    icon: Megaphone,
  },
  {
    title: 'Supply Chain Terjamin',
    description: 'Bahan baku dikirim langsung dari pusat untuk menjaga kualitas dan harga pokok penjualan (HPP) yang rendah.',
    icon: Truck,
  }
];

export function WhyChooseUsRmn() {
  const brandColor = 'var(--rmn-color)';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-600 text-xs md:text-sm font-bold tracking-widest uppercase mb-4"
          >
            Keunggulan Kami
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Mengapa Memilih <span style={{ color: brandColor }}>RM Nusantara?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 font-medium"
          >
            Sistem terintegrasi yang dirancang khusus untuk mempercepat pengembalian modal dan meminimalkan kerumitan operasional bisnis kuliner Anda.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group relative overflow-hidden"
            >
              <div 
                className="absolute -right-6 -top-6 opacity-[0.03] rotate-12 transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                style={{ color: brandColor }}
              >
                <feature.icon className="w-32 h-32" />
              </div>

              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 relative z-10"
                style={{ backgroundColor: `color-mix(in srgb, ${brandColor} 12%, transparent)`, color: brandColor }}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight relative z-10">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
