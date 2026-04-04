'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Gift, AlertCircle, Clock, Star } from 'lucide-react';
import { FluidLink } from '@/components/ui/FluidLink';

const TAB_DATA = [
  {
    id: 'mas-gaw',
    title: 'MAS GAW',
    themeColor: 'var(--masgaw-color)',
    hoverColor: 'var(--masgaw-color-hover)',
    packages: [
      {
        name: 'Paket A',
        price: '139',
        originalPrice: '169.000.000',
        description: 'Solusi kemitraan yang fleksibel bagi mitra yang telah memiliki/menyiapkan kebutuhan dasar operasional secara mandiri',
        benefits: [
          'Tidak termasuk renovasi outlet',
          'Peralatan & furnitur disiapkan oleh mitra',
          'Dukungan sistem operasional & supply chain',
          'Cocok untuk lokasi existing/usaha berjalan'
        ]
      },
      {
        name: 'Paket B',
        price: '179',
        originalPrice: '219.000.000',
        description: 'Solusi kemitraan menyeluruh bagi mitra yang menginginkan kesiapan operasional yang lebih lengkap dan terstandarisasi.',
        benefits: [
          'Termasuk renovasi outlet',
          'Penyediaan peralatan & furnitur lengkap',
          'Sistem operasional terintegrasi',
          'Dukungan penuh dari set up hingga operasional'
        ]
      }
    ]
  },
  {
    id: 'warnas',
    title: 'WARNAS',
    themeColor: 'var(--warnas-color)',
    hoverColor: 'var(--warnas-color-hover)',
    packages: [
      {
        name: 'Paket 1',
        price: '69',
        originalPrice: '89.000.000',
        description: 'Solusi awal bagi mitra yang ingin memulai bisnis dengan konsep sederhana dan fleksibel.',
        benefits: [
          'Konsep booth/gerobak',
          'Peralatan & bahan baku dasar',
          'Cocok untuk area dengan mobilitas tinggi',
          'Operasional sederhana dan efisien'
        ]
      },
      {
        name: 'Paket 2',
        price: '115',
        originalPrice: '145.000.000',
        description: 'Paket pengembangan bisnis dengan skala operasional yang lebih stabil dan terstruktur.',
        benefits: [
          'Konsep kios/ruko (min 3x4)',
          'Peralatan lebih lengkap',
          'Dukungan bahan baku yang lebih komprehensif',
          'Cocok untuk operasional harian yang lebih optimal'
        ]
      },
      {
        name: 'Paket 3',
        price: '139',
        originalPrice: '169.000.000',
        description: 'Solusi menyeluruh bagi mitra yang menginginkan kesiapan bisnis secara maksimal dengan dukungan penuh dari Sagawa.',
        benefits: [
          'Setup operasional lengkap',
          'Peralatan dan bahan baku fully supported',
          'Sistem operasional terintegrasi',
          'Siap langsung berjalan (ready to operate)'
        ]
      }
    ]
  },
  {
    id: 'masakan-mas-gawa',
    title: 'MASAKAN MAS GAWA',
    themeColor: 'var(--masakanmasgawa-color)',
    hoverColor: 'var(--masakanmasgawa-color-hover)',
    packages: [
      {
        name: 'Paket A',
        price: '139',
        originalPrice: '169.000.000',
        description: 'Menghadirkan konsep seafood dengan fleksibilitas tinggi, memberikan ruang bagi investor untuk menyesuaikan fasilitas dan pengembangan usaha.',
        benefits: [
          'Tidak termasuk renovasi outlet',
          'Peralatan & furnitur disiapkan oleh mitra',
          'Dukungan sistem operasional & supply chain',
          'Cocok untuk lokasi existing/usaha berjalan'
        ]
      },
      {
        name: 'Paket B',
        price: '179',
        originalPrice: '219.000.000',
        description: 'Menghadirkan konsep seafood dengan dukungan fasilitas yang lebih lengkap, dirancang untuk memaksimalkan efisiensi setup sejak awal.',
        benefits: [
          'Termasuk renovasi outlet',
          'Penyediaan peralatan & furnitur lengkap',
          'Sistem operasional terintegrasi',
          'Dukungan penuh dari set up hingga operasional'
        ]
      }
    ]
  }
];

export default function PricingTabsRmn() {
  const [activeTab, setActiveTab] = useState(0);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 27);
    targetDate.setHours(23, 59, 59, 0);

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    // Initial update
    updateCountdown();

    const interval = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" id="packages">
      <div 
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "var(--rmn-color)" }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-white opacity-[0.05] rounded-full blur-[100px] z-0 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span 
              className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-md border border-white/20"
            >
              Pilihan Kemitraan
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
              Investasi Cerdas <br className="hidden sm:block" />
              <span className="text-white/90">untuk Masa Depan Anda.</span>
            </h2>
            <p className="text-lg text-white/80 font-medium text-balance">
              Temukan paket kemitraan yang paling sesuai dengan target pasar dan kemampuan investasi Anda.
            </p>
          </motion.div>
        </div>

        {/* Bonus Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20 flex flex-col items-center justify-between text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.05]"></div>
            
            <div className="flex flex-col gap-6 w-full relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                {/* Title Section */}
                <div className="flex items-center gap-4">
                    <Gift className="w-10 h-10 text-white" />
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl tracking-tight text-white mb-1">Bonus Spesial Kemitraan</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/80 text-white text-xs font-bold border border-red-400/50 shadow-sm">
                      Hanya untuk 5 pendaftar pertama bulan ini!
                    </div>
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="flex flex-col items-center md:items-end w-full md:w-auto mt-2 md:mt-0 bg-black/10 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none">
                  <div className="flex items-center justify-center md:justify-end gap-1.5 mb-3 md:mb-2 w-full">
                    <Clock className="w-4 h-4 text-white/70" />
                    <span className="text-sm font-medium text-white/80">Promo Berakhir Dalam:</span>
                  </div>
                  <div className="flex gap-2">
                    {/* Days */}
                    <div className="flex flex-col items-center bg-black/20 rounded-xl px-2 py-1.5 w-14 backdrop-blur-sm shadow-inner">
                      <span className="text-xl sm:text-2xl font-black tabular-nums tracking-tighter" suppressHydrationWarning>
                        {String(timeLeft.days).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] font-bold text-white/60 uppercase">Hari</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white/30 pt-1">:</div>
                    {/* Hours */}
                    <div className="flex flex-col items-center bg-black/20 rounded-xl px-2 py-1.5 w-14 backdrop-blur-sm shadow-inner">
                      <span className="text-xl sm:text-2xl font-black tabular-nums tracking-tighter" suppressHydrationWarning>
                        {String(timeLeft.hours).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] font-bold text-white/60 uppercase">Jam</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white/30 pt-1">:</div>
                    {/* Minutes */}
                    <div className="flex flex-col items-center bg-black/20 rounded-xl px-2 py-1.5 w-14 backdrop-blur-sm shadow-inner">
                      <span className="text-xl sm:text-2xl font-black tabular-nums tracking-tighter" suppressHydrationWarning>
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] font-bold text-white/60 uppercase">Menit</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white/30 pt-1">:</div>
                    {/* Seconds */}
                    <div className="flex flex-col items-center bg-black/20 rounded-xl px-2 py-1.5 w-14 backdrop-blur-sm shadow-inner">
                      <span 
                        className="text-xl sm:text-2xl font-black tabular-nums tracking-tighter transition-colors"
                        style={{ color: timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds <= 10 && timeLeft.seconds > 0 ? '#fca5a5' : '#ffffff' }}
                        suppressHydrationWarning
                      >
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] font-bold text-white/60 uppercase">Detik</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Benefits */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-around gap-4 md:gap-2">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-1.5 rounded-full"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <span className="text-sm font-semibold text-white/90">FREE 100 Porsi Menu GO</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-1.5 rounded-full"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <span className="text-sm font-semibold text-white/90">FREE Sistem Kasir POS 1 Thn</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-1.5 rounded-full"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <span className="text-sm font-semibold text-white/90">FREE Media Promosi Lokal</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-nowrap overflow-x-auto justify-start md:justify-center scrollbar-hide border-b border-white/20 mb-8 sm:mb-12 relative pb-1 hide-scrollbar">
            {TAB_DATA.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`
                    relative px-6 py-4 flex items-center justify-center gap-2.5 
                    text-sm sm:text-base font-bold whitespace-nowrap transition-all duration-300 ease-in-out
                    ${isActive ? 'text-white' : 'text-white/60 hover:text-white/90 hover:bg-white/5'}
                  `}
                >
                  {tab.title}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute -bottom-px left-0 right-0 h-[3px] rounded-t-full"
                      style={{ backgroundColor: tab.themeColor }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
                  {TAB_DATA[activeTab].packages.map((pkg, pIdx) => (
                    <div 
                      key={pIdx}
                      className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group border border-white/10 relative"
                    >
                      {pIdx === TAB_DATA[activeTab].packages.length - 1 && (
                        <div className="absolute top-0 right-0 z-10 overflow-hidden w-[100px] h-[100px] pointer-events-none">
                          <div className="absolute top-[22px] -right-[32px] w-[140px] rotate-50 bg-yellow-400 text-yellow-950 text-[9px] font-black py-1 shadow-md flex items-center justify-center gap-1 tracking-wider border-y border-yellow-300">
                            <Star className="w-2.5 h-2.5 fill-yellow-950 text-yellow-950" />
                            REKOMENDASI
                          </div>
                        </div>
                      )}

                      {/* Package Header */}
                      <div className="p-6 sm:p-8 bg-slate-50 relative overflow-hidden border-b border-slate-100">
                        <h4 className="text-xl font-black text-slate-800 mb-2 uppercase relative z-10">{pkg.name}</h4>
                        
                        {/* Pricing */}
                        <div className="flex flex-col gap-1 mb-4 relative z-10">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-slate-400 line-through decoration-slate-400 decoration-2">
                              Rp {pkg.originalPrice}
                            </span>
                            <span 
                              className="px-2 py-0.5 rounded text-[10px] bg-red-500 font-bold text-white border border-slate-900/10 shadow-sm"
                            >
                              PROMO
                            </span>
                          </div>
                          <div className="flex items-baseline gap-1" style={{ color: TAB_DATA[activeTab].hoverColor }}>
                            <span className="text-xl font-bold">Rp</span>
                            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">{pkg.price}</span>
                            <span className="text-xl font-bold">.000.000</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-slate-600 leading-relaxed font-medium relative z-10">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Package Benefits */}
                      <div className="p-6 sm:p-8 grow flex flex-col relative bg-white">
                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <AlertCircle className="w-3.5 h-3.5" />
                          Termasuk dalam paket
                        </h5>
                        <ul className="space-y-4 mb-8 grow relative z-10">
                          {pkg.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3">
                              <div className="mt-0.5 shrink-0">
                                <CheckCircle2 className="w-5 h-5" style={{ color: TAB_DATA[activeTab].themeColor }} />
                              </div>
                              <span className="text-sm text-slate-700 font-medium leading-tight">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <div className="mt-auto pt-2 relative z-10">
                          <FluidLink
                            href={`https://wa.me/6281234567890?text=Halo%20Sagawa%20Group,%20saya%20tertarik%20dengan%20info%20Kemitraan%20RM%20Nusantara%20Paket%20${TAB_DATA[activeTab].title}%20-%20${pkg.name}...`}
                            target="_blank"
                            className={`block w-full py-3.5 px-4 text-center rounded-xl font-bold hover:text-white transition-all overflow-hidden border-2 ${
                              pIdx === TAB_DATA[activeTab].packages.length - 1
                                ? "text-slate-100 border-transparent shadow-md hover:shadow-lg"
                                : "text-slate-800 bg-transparent hover:shadow-md"
                            }`}
                            style={{ 
                              backgroundColor: pIdx === TAB_DATA[activeTab].packages.length - 1 ? TAB_DATA[activeTab].themeColor : "transparent",
                              borderColor: pIdx === TAB_DATA[activeTab].packages.length - 1 ? "transparent" : TAB_DATA[activeTab].themeColor
                            }}
                            fluidColor={TAB_DATA[activeTab].hoverColor}
                          >
                            <span className="relative z-10 pointer-events-none drop-shadow-sm">Pilih Paket</span>
                          </FluidLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
