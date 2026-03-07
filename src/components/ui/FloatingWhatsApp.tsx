"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      <div className="group relative flex justify-end">
        <div className="absolute right-16 top-1/2 -translate-y-1/2 translate-x-4 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 origin-right pointer-events-none">
          <div className="bg-white text-gray-800 text-sm font-medium py-2 px-4 rounded-xl shadow-xl border border-gray-100 whitespace-nowrap">
            Hubungi Kami!
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white border-t border-r border-gray-100 rotate-45"></div>
          </div>
        </div>
        
        <Link
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Chat via WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </Link>
      </div>
    </motion.div>
  );
}
