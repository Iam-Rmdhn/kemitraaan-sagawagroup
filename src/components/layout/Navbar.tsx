"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto px-4 sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm"
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

        {/* Contact & Menu Btn */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-(--primary-color) px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Hubungi Kami
          </Link>
          
          <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
