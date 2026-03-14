"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Twitter, Youtube, ArrowUp } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Tentang Kami", href: "https://sagawagroup.id/about/", target: "_blank" },
  ];

  const partnershipLinks = [
    { label: "Kagawa Rice Bowl", href: "/paket-kemitraan/kagawa-ricebowl" },
    { label: "Kagawa Coffee Conner", href: "/paket-kemitraan/kagawa-coffee" },
    { label: "Kagawa Coffe & Rice Bowl Conner", href: "/paket-kemitraan/kagawa-coffee-ricebowl" },
    { label: "RM Nusantara", href: "/paket-kemitraan/rm-nusantara" },
    { label: "Independent Brand", href: "/paket-kemitraan/independent-brand" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-4 lg:pr-8">
            <Link href="/" className="inline-block py-2 rounded-md shadow-sm">
              <Image 
                src="/assets/logos/sagawa.png" 
                alt="Sagawa Logo" 
                width={340} 
                height={46} 
                className="h-16 w-auto" 
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Sagawa Group adalah perusahaan holding yang berdedikasi untuk mengembangkan berbagai lini usaha di bidang makanan & minuman (F&B), jasa, dan kemitraan mikro.
            </p>
            
            {/* Contact Info */}
            <ul className="space-y-4 pt-2">
              <li className="flex items-start text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-red-500 mr-3 shrink-0 mt-0.5" />
                <span>Jl. Sawo No. 156, RT: 04/01 Cipedak-Jagakarsa, Jakarta Selatan.</span>
              </li>
              <li className="flex items-center text-sm text-slate-400 hover:text-red-500 transition-colors">
                <Phone className="w-5 h-5 text-red-500 mr-3 shrink-0" />
                <a href="tel:+6281808985548">+62 818-0898-5548</a>
              </li>
              <li className="flex items-center text-sm text-slate-400 hover:text-red-500 transition-colors">
                <Mail className="w-5 h-5 text-red-500 mr-3 shrink-0" />
                <a href="mailto:info@sagawagroup.id">info@sagawagroup.id</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} target={link.target} className="group flex items-center text-slate-400 hover:text-red-500 transition-colors text-sm font-medium">
                    <span className="w-0 h-[2px] bg-red-500 transition-all duration-300 ease-out group-hover:w-4 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Paket Kemitraan */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Paket Kemitraan</h3>
            <ul className="space-y-4">
              {partnershipLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="group flex items-center text-slate-400 hover:text-red-500 transition-colors text-sm font-medium">
                    <span className="w-0 h-[2px] bg-red-500 transition-all duration-300 ease-out group-hover:w-4 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-3 space-y-6">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Lokasi Kami</h3>
            <div className="w-[250px] h-[250px] rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 relative group">              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.3627264051825!2d106.7975550750388!3d-6.347054993642766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjAnNDkuNCJTIDEwNsKwNDgnMDAuNSJF!5e0!3m2!1sid!2sid!4v1772729695233!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
            
            {/* Social Links */}
            <div className="pt-2">
              <h3 className="text-white font-bold text-sm mb-4 tracking-wide">Ikuti Kami</h3>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/sagawagroup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://x.com/sagawagroup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@sagawamedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@sagawamedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-6 md:gap-4 relative pb-6 md:pb-0">
          <p className="flex-1 text-center md:text-left">&copy; {new Date().getFullYear()} by Sagawa Group. Hak Cipta Dilindungi.</p>
          
          <div className="flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-all shadow-[0_0_10px_rgba(255,49,49,0.5)] cursor-pointer"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-5 h-5 transition-all duration-300 ease-out hover:-translate-y-1" />
            </button>
          </div>

          <div className="flex gap-6 flex-1 justify-center md:justify-end">
            <Link href="#" className="hover:text-slate-300 transition-colors">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
