"use client";

import Image from "next/image";
import { LineChart, Smartphone, TrendingUp, Clock } from "lucide-react";
import { Dashboard3D } from "@/components/ui/Dashboard3D";
import { motion } from "motion/react";

export function POSFeatureSection() {
  const features = [
    {
      icon: <LineChart className="w-6 h-6 text-red-600" />,
      title: "Monitoring Real-time",
      description: "Pantau omset harian hingga bulanan outlet Anda dari mana saja secara real-time melalui dashboard eksklusif.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-red-600" />,
      title: "Sagawa POS Terintegrasi",
      description: "Aplikasi kasir pintar yang didesain khusus untuk efisiensi transaksi dan inventaris produk F&B.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-600" />,
      title: "Analitik Bisnis",
      description: "Dapatkan insight dan laporan penjualan mendalam untuk membantu mengambil keputusan bisnis yang lebih baik.",
    },
    {
      icon: <Clock className="w-6 h-6 text-red-600" />,
      title: "Efisiensi Operasional",
      description: "Mengurangi human error dan mempercepat pelayanan outlet dengan sistem kasir yang modern dan mudah digunakan.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 text-center lg:text-left"
          >
            <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Transaksi Cepat,<br /> <span className="text-red-600">Pelanggan Puas.</span>
            </h2>
            <p className="text-gray-600 lg:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Setiap langkah operasional bisnis Anda dipermudah. Sagawa POS memiliki antarmuka yang sangat responsif dirancang khusus untuk memenuhi kepadatan orderan di outlet-outlet kemitraan kami.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-red-600">99%</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900">Uptime Server</p>
                  <p className="text-xs text-gray-500">Selalu Terhubung</p>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600">&lt;6s</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900">Waktu Proses</p>
                  <p className="text-xs text-gray-500">Per Transaksi</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mockup POS Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full lg:w-7/12 overflow-hidden"
          >
            <Image
              src="/assets/img/mock/pos.webp"
              alt="Sagawa POS Application"
              width={800}
              height={500}
              className="w-full h-auto object-cover transform scale-[1.01]"
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* 3D Mockup */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-100 rounded-full blur-3xl opacity-30 -z-10" />
            <Dashboard3D />
          </motion.div>

          {/* Features Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Kendali Penuh Bisnis Anda di Ujung Jari
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl"
            >
              Tinggalkan cara manual. Kemitraan Sagawa Group dilengkapi dengan sistem kasir <span className="font-semibold text-gray-900">Sagawa POS</span> dan dashboard monitoring canggih untuk mengelola operasional outlet dengan lebih mudah dan transparan.
            </motion.p>

            {/* Feature */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed text-balance">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
