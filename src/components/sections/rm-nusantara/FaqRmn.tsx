"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export function FaqRmn() {
  const brandColor = "var(--rmn-color)";

  const faqs = [
    {
      question: "Apakah saya harus punya pengalaman masak?",
      answer: "Tidak perlu. Semua bumbu dan SOP sudah kami standarisasi sehingga siapapun bisa menyajikan rasa yang sama."
    },
    {
      question: "Bagaimana jika saya belum punya lokasi?",
      answer: "Tim kami akan membantu melakukan riset pasar dan mencari lokasi terbaik untuk outlet Anda."
    },
    {
      question: "Berapa lama rata-rata waktu yang dibutuhkan dari pendaftaran sampai outlet buka?",
      answer: "Proses normal memakan waktu sekitar 30 hingga 60 hari kerja. Hal ini mencakup proses survei lokasi, desain interior, renovasi, hingga pelatihan SDM. Kami akan mendampingi Anda di setiap tahapannya agar Grand Opening berjalan tepat waktu dan meriah."
    },
    {
      question: "Apakah saya boleh menambah menu sendiri di luar menu RM Nusantara?",
      answer: "Untuk menjaga standar kualitas dan branding nasional, mitra wajib menggunakan menu utama dari pusat. Namun, kami sangat terbuka untuk diskusi jika ada potensi menu pendamping khas daerah setempat yang ingin ditambahkan, selama tidak mengubah konsep utama dan telah mendapatkan persetujuan tertulis dari tim RnD Sagawa Group."
    },
    {
      question: "Bagaimana jika saya kesulitan mencari karyawan atau koki?",
      answer: "Anda tidak perlu khawatir. Kami akan membantu proses rekrutmen hingga pelatihan intensif (training) sesuai standar operasional kami. Sistem memasak kami sudah dibuat sangat mudah (SOP-based), sehingga operasional restoran tidak akan bergantung pada satu sosok koki \"bintang\". Siapapun bisa menyajikan rasa otentik RM Nusantara!"
    },
    {
      question: "Apakah ada biaya bulanan (Royalty Fee) yang harus dibayarkan?",
      answer: "Kami menerapkan sistem kemitraan yang transparan. Untuk detail Royalty Fee atau Management Fee, kami akan paparkan secara transparan saat sesi Presentasi Bisnis. Biaya ini kami gunakan kembali untuk dukungan marketing nasional, pengembangan menu baru, dan supervisi rutin agar outlet Anda tetap kompetitif dan up-to-date."
    },
    {
      question: "Bagaimana jika di kemudian hari saya ingin pindah lokasi atau tutup?",
      answer: "Dalam perjanjian kemitraan, kami mencantumkan klausul mengenai relokasi jika lokasi awal dirasa kurang optimal setelah evaluasi berkala. Tim kami akan membantu melakukan survei ulang lokasi baru. Kami berkomitmen untuk menjadi mitra tumbuh Anda, bukan sekadar penjual paket usaha."
    },
    {
      question: "Berapa proyeksi omset dan waktu balik modal untuk RM Nusantara?",
      answer: "Rata-rata estimasi balik modal (BEP) dapat dicapai dalam waktu kurang dari 12 bulan (estimasi optimal di bawah 10 bulan), tergantung dari seberapa strategis lokasi Anda. Potensi omset yang dihasilkan sangat kompetitif untuk kelas rumah makan nusantara."
    },
    {
      question: "Apakah biaya paket kemitraan ini sudah termasuk sewa tempat dan renovasi?",
      answer: "Paket kemitraan yang kami cantumkan belum termasuk biaya sewa lahan/bangunan dan renovasi fisik secara menyeluruh, karena kebutuhan setiap lokasi berbeda. Namun, biaya kemitraan sudah men-cover lisensi brand, dukungan operasional, sistem POS, serta standar peralatan inti yang Anda butuhkan."
    },
    {
      question: "Saya tertarik! Bagaimana langkah awal pendaftarannya?",
      answer: "Sangat mudah! Silakan klik tombol 'Hubungi Kami' atau logo WhatsApp di halaman ini. Tim representatif kemitraan Sagawa Group akan segera menghubungi Anda dengan ramah untuk menjadwalkan sesi konsultasi dan presentasi bisnis secara gratis."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight text-balance leading-tight"
          >
            Pertanyaan <span style={{ color: brandColor }}>Sering Diajukan</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 text-balance leading-relaxed"
          >
            Semua yang perlu Anda ketahui tentang berbisnis dan kemitraan RM Nusantara.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-slate-300 shadow-md' : 'border-slate-200 shadow-sm hover:border-slate-300'}`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-2xl"
                  style={{ outlineColor: brandColor }}
                >
                  <span className={`text-lg font-bold pr-4 transition-colors duration-300 ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        <div className="w-full h-px bg-slate-100 mb-4"></div>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
