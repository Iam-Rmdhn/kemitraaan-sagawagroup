"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";

const texts = ["Hubungi Kami!", "Konsultasi Gratis!"];

export function FloatingWhatsApp() {
  const waNumber = "6281214703690";
  const defaultMessage = "Halo Tim Sagawa Group! 👋\n\nSaya tertarik dan ingin mengetahui informasi lebih lanjut mengenai peluang Kemitraan bisnisnya. Boleh minta detailnya?\n\nTerima kasih.";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ scale: 0, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, type: "spring", stiffness: 200 }}
      >
        <Link
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-6 py-3.5 bg-linear-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.5)] transition-all duration-300 overflow-hidden"
          aria-label="Chat via WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-white drop-shadow-md z-10 shrink-0">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>

          <div className="relative h-6 w-[125px] overflow-hidden flex items-center z-10">
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex}
                initial={{ y: 20, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -20, opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute font-semibold tracking-wide whitespace-nowrap drop-shadow-md text-[15px] inset-0 flex items-center"
                style={{ transformOrigin: "center" }}
              >
                {texts[textIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="absolute inset-0 -translate-x-[150%] bg-linear-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-0" />
        </Link>
      </motion.div>
    </div>
  );
}

