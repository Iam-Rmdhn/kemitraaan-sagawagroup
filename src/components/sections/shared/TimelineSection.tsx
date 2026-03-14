"use client";

import React from "react";
import { 
  MessagesSquare, 
  FileSignature, 
  MapPin, 
  Hammer, 
  Users, 
  Truck, 
  Store 
} from "lucide-react";
import { motion } from "motion/react";

const timelineSteps = [
  {
    id: 1,
    title: "Konsultasi, Presentasi & test food",
    description: "Pertemuan awal untuk mendiskusikan konsep, presentasi bisnis, dan mencoba sampel makanan.",
    icon: <MessagesSquare className="w-6 h-6 text-white" />,
    color: "bg-red-600"
  },
  {
    id: 2,
    title: "Registrasi & Dp 10jt",
    description: "Penandatanganan kesepakatan awal dan pembayaran down payment (DP) untuk mengamankan kemitraan.",
    icon: <FileSignature className="w-6 h-6 text-white" />,
    color: "bg-red-600"
  },
  {
    id: 3,
    title: "Pencarian Lokasi",
    description: "Proses survei dan pemilihan lokasi strategis yang paling sesuai untuk outlet baru Anda.",
    icon: <MapPin className="w-6 h-6 text-white" />,
    color: "bg-red-600"
  },
  {
    id: 4,
    title: "Renovasi",
    description: "Proses pembangunan dan penyesuaian desain interior maupun eksterior outlet sesuai standar.",
    icon: <Hammer className="w-6 h-6 text-white" />,
    color: "bg-red-600"
  },
  {
    id: 5,
    title: "Recrutment SDM & training",
    description: "Perekrutan karyawan dan pelatihan intensif untuk memastikan operasional berjalan sesuai SOP.",
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-red-600"
  },
  {
    id: 6,
    title: "Pengirimman Bahan baku & Equipment",
    description: "Distribusi perlengkapan, peralatan, dan bahan baku awal ke outlet yang sudah siap.",
    icon: <Truck className="w-6 h-6 text-white" />,
    color: "bg-red-600"
  },
  {
    id: 7,
    title: "Soft opening & Grand opening",
    description: "Fase percobaan operasional dan peresmian outlet secara penuh untuk masyarakat umum.",
    icon: <Store className="w-6 h-6 text-white" />,
    color: "bg-red-600"
  }
];

export function TimelineSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Langkah Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
            Timeline Kemitraan
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Perjalanan kemitraan yang transparan dan terukur untuk memastikan kesuksesan bisnis Anda bersama Sagawa Group.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-red-600 via-red-400 to-red-600"></div>
          <div className="md:hidden absolute left-8 h-full w-1 bg-linear-to-b from-red-600 via-red-400 to-red-600"></div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            className="space-y-12 md:space-y-16"
          >
            {timelineSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={step.id} 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="relative flex flex-col md:flex-row items-center justify-between w-full group"
                >
                  
                  <div className={`hidden md:block w-5/12 ${isEven ? 'text-right pr-12' : 'opacity-0'}`}>
                    {isEven && (
                      <div className="hover:transform hover:-translate-x-2 transition-all duration-300 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg border border-slate-100">
                        <span className="text-red-600 font-bold text-sm tracking-widest uppercase mb-1 block">Langkah 0{step.id}</span>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="absolute left-0 md:left-1/2 transform translate-x-3 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-slate-100 shadow-md z-10 group-hover:border-red-100 transition-colors duration-300">
                    <div className={`flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full ${step.color} shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                  </div>

                  <div className={`hidden md:block w-5/12 ${!isEven ? 'text-left pl-12' : 'opacity-0'}`}>
                    {!isEven && (
                      <div className="hover:transform hover:translate-x-2 transition-all duration-300 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg border border-slate-100">
                        <span className="text-red-600 font-bold text-sm tracking-widest uppercase mb-1 block">Langkah 0{step.id}</span>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="md:hidden w-full pl-20 pr-4 pt-1">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <span className="text-red-600 font-bold text-sm tracking-widest uppercase mb-1 block">Langkah 0{step.id}</span>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">{step.description}</p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
