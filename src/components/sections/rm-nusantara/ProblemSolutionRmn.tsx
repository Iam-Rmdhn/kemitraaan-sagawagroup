"use client";

import { motion } from "motion/react";
import { X, Check } from "lucide-react";

export function ProblemSolutionRmn() {
  const brandColor = "var(--rmn-color)";

  const painPoints = [
    {
      problem: "Ditinggal koki andalan saat rumah makan lagi ramai-ramainya?",
      solution: "Kami sediakan SOP & Bumbu Rahasia. Siapapun bisa masak, rasa dijamin 100% konsisten terus."
    },
    {
      problem: "Takut bisnis hancur berantakan karena Anda tidak bisa stand-by tiap hari?",
      solution: "Sistem operasional Autopilot. Biarkan sistem yang bekerja, Anda tetap bisa menikmati waktu luang."
    },
    {
      problem: "Baru buka resto tapi sepi pembeli dan bingung cara promosinya?",
      solution: "Support tim marketing Sagawa Group siap mendatangkan traffic lewat kampanye digital & lokal."
    },
    {
      problem: "Margin tipis karena harga bahan baku di pasar yang selalu naik turun?",
      solution: "Akses ke jaringan supplier besar kami memastikan HPP rendah dan margin profit maksimal."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-widest uppercase mb-4"
          >
            Fakta di Lapangan
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight text-balance leading-tight"
          >
            Sering Mengalami{" "}
            <span className="relative whitespace-nowrap">
              <motion.span 
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", bounce: 0.5 }}
                className="absolute -top-10 -right-4 md:-top-12 md:-right-6 w-12 h-12 md:w-14 md:h-14 z-10"
              >
              </motion.span>
              <span className="relative z-0 text-red-500 underline decoration-red-200 underline-offset-4">Kendala Ini</span>
            </span>{" "}
            Saat Buka Rumah Makan?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 text-balance leading-relaxed"
          >
            Jangan biarkan kerumitan operasional menghentikan mimpi Anda memiliki bisnis kuliner yang menguntungkan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-4xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-slate-200 hover:border-slate-300 hover:-translate-y-1"
            >
              {/* Problem */}
              <div className="flex gap-4 lg:gap-5 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white text-red-500 shadow-sm flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  <X className="w-6 h-6" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-slate-800 font-bold text-lg md:text-xl leading-snug">
                    {item.problem}
                  </h3>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-slate-200 my-6 relative">
              </div>

              {/* Solution */}
              <div className="flex gap-4 lg:gap-5 mt-8">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-all duration-300"
                  style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                >
                  <Check className="w-6 h-6" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-slate-700 font-medium leading-relaxed md:text-lg">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-center p-10 text-slate-600 text-balance leading-relaxed"
          >
            Kemitraan <strong>RM Nusantara hadir sebagai solusinya</strong>. Kami memberikan bisnis <strong>Siap Pakai</strong> di mana semua kerumitan operasional sudah kami tangani. Anda fokus pada pertumbuhan profit!
          </motion.p>
      </div>
    </section>
  );
}
