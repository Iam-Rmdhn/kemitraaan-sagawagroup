"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Paket Kemitraan", href: "/paket-kemitraan" },
    { name: "Hubungi Kami", href: "/hubungi-kami" },
    { name: "Tentang Kami", href: "https://sagawagroup.id/about/" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 w-full bg-white border-b border-gray-100 shadow-sm"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/assets/logos/sagawa.png" 
                alt="Sagawa Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto" 
                priority 
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.filter(link => link.name !== "Tentang Kami").map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-red-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://sagawagroup.id/about/"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              target="_blank"
            >
              Tentang Kami
              <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
            
            <button 
              onClick={toggleDrawer}
              className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 z-100 backdrop-blur-sm"
              onClick={toggleDrawer}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white z-100 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 px-6 border-b border-gray-100">
                <span className="font-bold text-gray-900 text-lg">Menu Navigasi</span>
                <button 
                  onClick={toggleDrawer}
                  className="p-2 text-gray-500 hover:text-red-600 rounded-full transition-colors cursor-pointer"
                  aria-label="Tutup menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
                <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Menu Utama
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={toggleDrawer}
                    className="px-4 py-3 text-gray-700 hover:text-red-600 hover:underline rounded-xl transition-all font-medium text-sm flex items-center"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <p className="text-xs text-gray-500 mb-4 text-center">
                  Siap memulai bisnis FnB Anda bersama Sagawa Group?
                </p>
                <Link
                  href="/hubungi-kami"
                  onClick={toggleDrawer}
                  className="w-full flex justify-center items-center h-12 rounded-full bg-red-600 px-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-red-700"
                >
                  Bergabung Sekarang
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
