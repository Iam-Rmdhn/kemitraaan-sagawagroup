"use client";

import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { FluidLink } from "@/components/ui/FluidLink";

export function ContactHubungiKami() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    package: "",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-slate-700" strokeWidth={1.5} />,
      title: "Telepon",
      details: "+62 812-3456-7890",
    },
    {
      icon: <Mail className="w-6 h-6 text-slate-700" strokeWidth={1.5} />,
      title: "Email",
      details: "info@sagawagroup.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-slate-700" strokeWidth={1.5} />,
      title: "Alamat",
      details: "Jl. Sawo No. 156, RT: 04/01 Cipedak-Jagakarsa, Jakarta Selatan.",
    },
    {
      icon: <Clock className="w-6 h-6 text-slate-700" strokeWidth={1.5} />,
      title: "Jam Operasional",
      details: "Senin - Jumat, 09:00 - 17:00 WIB",
    },
  ];

  const packages = [
    "Kagawa Rice Bowl",
    "Kagawa Coffee Conner",
    "Kagawa Coffee & Rice Bowl Conner",
    "RM Nusantara",
    "Independent Brand",
  ];

  const waNumber = "628123456789";
  const sanitizeInput = (str: string) => {
    if (!str) return "";
    return str.replace(/[<>]/g, "");  
  };

  const generateWAUrl = () => {
    const sName = sanitizeInput(formData.name);
    const sEmail = sanitizeInput(formData.email);
    const sPackage = formData.package;
    const sMessage = sanitizeInput(formData.message);

    const text = `Halo Tim Kemitraan Sagawa Group! 👋\n\nNama: ${sName}\nEmail: ${sEmail}\nPaket Diminati: ${sPackage}\n\nPesan:\n${sMessage}\n\nTerima kasih.`;
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
  };

  const generateQuickWAUrl = () => {
    const text = `Halo Tim Kemitraan Sagawa Group! 👋\n\nNama: \nPaket Diminati: \n\nPesan:\n\nTerima kasih.`;
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-24 bg-white relative z-10 border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 tracking-tight">
              Informasi Kontak
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-0.5">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">{info.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-linear-to-br from-[#10b981] to-[#047857] rounded-3xl p-8 text-white shadow-xl shadow-emerald-600/20 max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
                <h3 className="text-xl font-bold">Chat Langsung WhatsApp</h3>
              </div>
              <p className="text-emerald-50 mb-8 text-sm leading-relaxed">
                Lebih cepat? Chat langsung dengan tim kami di WhatsApp.
              </p>
              <FluidLink
                href={generateQuickWAUrl()}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-emerald-600 font-bold text-sm hover:shadow-md transition-all outline-none"
                fluidColor="rgba(16, 185, 129, 0.1)"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2} />
                Chat Sekarang
              </FluidLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">
              Formulir Kemitraan
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-slate-50 transition-colors text-slate-700"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-slate-50 transition-colors text-slate-700"
                  placeholder="Masukkan email aktif (opsional)"
                />
              </div>

              <div>
                <label htmlFor="package" className="block text-sm font-bold text-slate-700 mb-2">
                  Paket Kemitraan yang Diminati <span className="text-red-500">*</span>
                </label>
                <div className="relative" ref={dropdownRef}>
                  <div
                    className={`w-full px-5 py-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-colors bg-slate-50 text-slate-700 ${
                      isDropdownOpen ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200 hover:border-slate-300"
                    }`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className={formData.package ? "text-slate-700" : "text-slate-400"}>
                      {formData.package || "Pilih paket kemitraan"}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden"
                      >
                        <div className="max-h-60 overflow-y-auto">
                          <div
                            className="px-5 py-3 text-sm text-slate-400 bg-slate-50 border-b border-slate-100 cursor-default"
                          >
                            Pilih paket kemitraan
                          </div>
                          {packages.map((pkg, idx) => (
                            <div
                              key={idx}
                              className={`px-5 py-3 text-sm cursor-pointer transition-colors flex items-center ${
                                formData.package === pkg
                                  ? "bg-red-50 text-red-600 font-bold"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-red-500"
                              }`}
                              onClick={() => {
                                setFormData({ ...formData, package: pkg });
                                setIsDropdownOpen(false);
                              }}
                            >
                              {pkg}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-slate-50 transition-colors resize-none text-slate-700"
                  placeholder="Tuliskan pertanyaan atau pesan Anda..."
                  required
                ></textarea>
              </div>

              <p className="text-sm text-slate-500 mt-4 mb-2">
                * Pesan Anda akan dikirim langsung ke WhatsApp kami.
              </p>

              <FluidLink
                href={generateWAUrl()}
                target="_blank"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-linear-to-br from-[#10b981] to-[#047857] text-white font-bold text-lg shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:-translate-y-1 transition-all outline-none"
                fluidColor="rgba(255, 255, 255, 0.15)"
                onClick={(e: React.MouseEvent) => {
                  if (!formData.name || !formData.package || !formData.message) {
                    e.preventDefault();
                    alert("Mohon lengkapi Nama, Paket Kemitraan, dan Pesan sebelum mengirim.");
                  }
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 fill-white" />
                  Kirim via WhatsApp
                </span>
              </FluidLink>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}