'use client';

import React from 'react';
import { motion } from 'motion/react';
import { LightbulbIcon} from 'lucide-react';

export default function RoiSectionRmn() {
  const roiData = [
    { keterangan: "PEMASUKAN", pesimis: "", normal: "", optimis: "", isSection: true },
    { keterangan: "Avg Penjualan Offline Per Hari (Porsi)", pesimis: "100", normal: "160", optimis: "250" },
    { keterangan: "Average Harga per Porsi", pesimis: "Rp 18.000", normal: "Rp 18.000", optimis: "Rp 18.000" },
    { keterangan: "Omset Offline Per Hari", pesimis: "Rp 1.800.000", normal: "Rp 2.880.000", optimis: "Rp 4.500.000" },
    { keterangan: "Omset Offline Per Bulan (26 hari)", pesimis: "Rp 46.800.000", normal: "Rp 74.880.000", optimis: "Rp 117.000.000", isSubTitle: true },
    { keterangan: "Avg Penjualan Online/Catering Per Hari (Porsi)", pesimis: "5", normal: "5", optimis: "5" },
    { keterangan: "Average Harga per Porsi", pesimis: "Rp 18.000", normal: "Rp 18.000", optimis: "Rp 18.000" },
    { keterangan: "Omset Online / Catering Per Hari", pesimis: "Rp 90.000", normal: "Rp 90.000", optimis: "Rp 90.000" },
    { keterangan: "Omset Online/Catering Per Bulan (26 hari)", pesimis: "Rp 2.340.000", normal: "Rp 2.700.000", optimis: "Rp 2.700.000", isSubTitle: true },
    { keterangan: "Total Omset Harian", pesimis: "Rp 1.890.000", normal: "Rp 2.970.000", optimis: "Rp 4.590.000", isHighlight: true },
    { keterangan: "Total Omset Bulanan (26 hari)", pesimis: "Rp 56.700.000", normal: "Rp 89.100.000", optimis: "Rp 137.700.000", isHighlight: true },
    
    { keterangan: "COST", pesimis: "", normal: "", optimis: "", isSection: true },
    { keterangan: "HPP 55%", pesimis: "Rp 31.185.000", normal: "Rp 49.005.000", optimis: "Rp 75.735.000" },
    { keterangan: "Gaji Karyawan (3-4 orang)", pesimis: "Rp 6.600.000", normal: "Rp 6.600.000", optimis: "Rp 9.600.000" },
    { keterangan: "Listrik, Air dan Wifi", pesimis: "Rp 2.000.000", normal: "Rp 2.000.000", optimis: "Rp 2.000.000" },
    { keterangan: "Sewa / Bulan", pesimis: "Rp 5.416.667", normal: "Rp 5.416.667", optimis: "Rp 5.416.667" },
    { keterangan: "Management Fee 5% (SMO)", pesimis: "Rp 0", normal: "Rp 0", optimis: "Rp 0" },
    { keterangan: "Bonus Target Outlet 2-3%", pesimis: "Rp 0", normal: "Rp 1.782.000", optimis: "Rp 4.131.000" },
    { keterangan: "Total Cost", pesimis: "Rp 45.201.667", normal: "Rp 64.803.667", optimis: "Rp 96.882.667", isHighlight: true },
    { keterangan: "Profit Bersih", pesimis: "Rp 11.498.333", normal: "Rp 24.296.333", optimis: "Rp 40.817.333", isHighlight: true, isProfit: true },

    { keterangan: "Bagi Hasil 60% (Tergantung Perjanjian Sistem)", pesimis: "Rp 6.899.000", normal: "Rp 14.577.800", optimis: "Rp 24.490.400", isSubTitle: true },
    { keterangan: "Return of Investment (Bulan)", pesimis: "33,9", normal: "16,1", optimis: "9,6", isSubTitle: true, isYellow: true },
    { keterangan: "IRR per bulan (dalam %)", pesimis: "3,8%", normal: "8,1%", optimis: "13,7%", isSubTitle: true, isYellow: true },
    { keterangan: "IRR per tahun (dalam %)", pesimis: "46,1%", normal: "97,5%", optimis: "163,8%", isSubTitle: true, isYellow: true }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden" id="roi-calculator">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Keuntungan <br className="hidden sm:block" />
              <span className="text-red-700">& Estimasi Balik Modal (ROI)</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium text-balance">
              Gambaran transparan mengenai perkiraan penjualan, keuntungan, serta perhitungan laba bersih harian hingga bulanan untuk mengukur titik balik modal secara realistis.
            </p>
          </motion.div>
        </div>

        {/* Initial Investment Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-slate-200 rounded-2xl shadow-sm mb-8 flex flex-col md:flex-row overflow-hidden max-w-5xl mx-auto"
        >
          <div className="p-6 md:p-8 flex-1">
            <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
              <LightbulbIcon className="w-5 h-5 text-yellow-500 mr-3 shrink-0" />
              Rincian Initial Investment (Financial Project)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex justify-between gap-4 border-b border-dashed border-slate-200 pb-2">
                <span className="text-slate-600 text-sm">Paket Usaha</span>
                <span className="font-semibold text-slate-800 text-sm">Rp 139.000.000</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-dashed border-slate-200 pb-2">
                <span className="text-slate-600 text-sm">Sewa / Tahun</span>
                <span className="font-semibold text-slate-800 text-sm">Rp 65.000.000</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-dashed border-slate-200 pb-2">
                <span className="text-slate-600 text-sm">Perkiraan Renovasi</span>
                <span className="font-semibold text-slate-800 text-sm">Rp 40.000.000</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-dashed border-slate-200 pb-2">
                <span className="text-slate-600 text-sm">Modal Kerja (Stock & Petty Cash)</span>
                <span className="font-semibold text-slate-800 text-sm">Rp 55.000.000</span>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-br from-green-50 to-green-100/50 p-6 md:p-8 border-t md:border-t-0 md:border-l border-green-200 flex flex-col items-center justify-center min-w-[280px]">
            <span className="text-xs font-bold text-green-600 mb-1 tracking-wider uppercase">Total Initial Investment</span>
            <span className="text-3xl font-black text-green-700">Rp 299.000.000</span>
          </div>
        </motion.div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden relative max-w-5xl mx-auto"
        >
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full min-w-[900px] text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-5 px-6 font-bold text-slate-800 text-base sm:text-lg w-[40%]">Keterangan</th>
                  <th className="py-5 px-4 font-bold text-center border-l border-slate-200 w-[20%]">
                    <span className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">Skenario</span>
                    <span className="text-slate-600">Low (Pesimis)</span>
                  </th>
                  <th className="py-5 px-4 font-bold text-center bg-green-50 border-x border-green-100/50 w-[20%] relative overflow-hidden">
                    <div className="flex flex-col items-center justify-center relative z-10">
                      <span className="block text-[11px] font-black text-green-500 mb-1 uppercase tracking-wider drop-shadow-sm">Target Realistis</span>
                      <span className="text-green-700 text-lg">Medium (Normal)</span>
                    </div>
                  </th>
                  <th className="py-5 px-4 font-bold text-center border-l border-slate-200 w-[20%]">
                    <span className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">Skenario</span>
                    <span className="text-slate-600">High (Optimis)</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {roiData.map((row, idx) => {
                  if (row.isSection) {
                    return (
                      <tr key={idx} className="bg-slate-800">
                        <td colSpan={4} className="py-3 px-6 text-sm font-bold text-white uppercase tracking-wider">
                          {row.keterangan}
                        </td>
                      </tr>
                    );
                  }

                  const rowClass = row.isYellow 
                    ? 'bg-yellow-50 hover:bg-yellow-100 border-yellow-200'
                    : row.isHighlight 
                      ? (row.isProfit ? 'bg-green-50/50 hover:bg-green-50 border-green-100' : 'bg-slate-50 border-slate-200') 
                      : 'bg-white hover:bg-slate-50/50';

                  const textStrong = row.isSubTitle || row.isHighlight || row.isYellow;

                  return (
                    <tr key={idx} className={`transition-colors ${rowClass}`}>
                      <td className={`py-3 px-6 text-sm sm:text-[15px] ${textStrong ? 'font-bold text-slate-800' : 'font-medium text-slate-600'}`}>
                        {row.keterangan}
                      </td>
                      <td className={`py-3 px-4 text-sm sm:text-[15px] text-center border-l border-slate-100/70 ${textStrong ? 'font-bold text-slate-800' : 'text-slate-600'}`}>
                        {row.pesimis}
                      </td>
                      <td className={`py-3 px-4 text-sm sm:text-[15px] text-center border-x relative z-0 ${row.isYellow || (row.isHighlight && row.isProfit) ? 'border-transparent' : 'bg-green-50/30 border-green-100/30'} flex flex-col justify-center h-full`}>
                        {row.isHighlight && row.isProfit ? (
                          <span className="inline-block px-3 py-1.5 bg-green-100 text-green-800 rounded-lg font-black text-base shadow-sm mx-auto">
                            {row.normal}
                          </span>
                        ) : row.isYellow ? (
                          <span className="font-black text-amber-700 text-base">{row.normal}</span>
                        ) : (
                          <span className={`font-semibold ${textStrong ? 'text-slate-900' : 'text-slate-800'}`}>{row.normal}</span>
                        )}
                      </td>
                      <td className={`py-3 px-4 text-sm sm:text-[15px] text-center border-l border-slate-100/70 ${textStrong ? 'font-bold text-slate-800' : 'text-slate-600'}`}>
                        {row.optimis}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 1 }}
          whileHover={{ rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-12 sm:mt-16 bg-[#FFF9CC] p-6 sm:p-10 max-w-4xl mx-auto shadow-xl border border-amber-200/50"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-red-200/50 backdrop-blur-md shadow-sm -rotate-3 border border-white/30" 
            style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)' }} />
          <div className="absolute bottom-0 right-0 w-0 h-0 border-b-30 border-l-30 border-b-slate-50 border-l-[#F2ECB8] shadow-[-2px_-2px_4px_rgba(0,0,0,0.05)]" />

          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 relative z-10">
            <div>
              <h4 className="font-bold text-lg sm:text-2xl text-slate-800 mb-3 font-serif italic border-b border-amber-300 pb-2 inline-block">
                Catatan Penting Skenario
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Perhitungan di atas adalah estimasi simulasi rata-rata outlet RM Nusantara. ROI dihitung dengan pembagian <strong className="text-slate-900 border-b border-amber-400">Total Initial Investment</strong> di luar Sewa Tempat. Omset dan laba bersih aktual dapat bervariasi bergantung pada pemilihan lokasi strategis, efektivitas promosi lokal, manajemen stok (HPP aktual), kualitas pelayanan, serta kondisi daya beli di wilayah masing-masing outlet.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
