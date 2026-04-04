"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function MenuRmn() {
  const brandColor = "var(--rmn-color)";

  const menus = [
    { id: 1, name: "Acar Kuning", image: "/assets/img/menu/rmn/acar-kuning.webp" },
    { id: 2, name: "Ati Ampela Balado", image: "/assets/img/menu/rmn/ati-ampela-balado.webp" },
    { id: 3, name: "Ayam Balado", image: "/assets/img/menu/rmn/ayam-balado.webp" },
    { id: 4, name: "Ayam Kecap", image: "/assets/img/menu/rmn/ayam-kecap.webp" },
    { id: 5, name: "Ayam Suwir Balado", image: "/assets/img/menu/rmn/ayam-suwir-balado.webp" },
    { id: 6, name: "Bakwan Jagung", image: "/assets/img/menu/rmn/bakwan-jagung.webp" },
    { id: 7, name: "Bakwan Sayur", image: "/assets/img/menu/rmn/bakwan-sayur.webp" },
    { id: 8, name: "Ikan Pesmol Kuning", image: "/assets/img/menu/rmn/ikan-pesmol-kuning.webp" },
    { id: 9, name: "Jengkol Balado", image: "/assets/img/menu/rmn/jengkol-balado.webp" },
    { id: 10, name: "Kentang Balado", image: "/assets/img/menu/rmn/kentang-balado.webp" },
    { id: 11, name: "Kerang Bumbu Kuning", image: "/assets/img/menu/rmn/kerang-bumbu-kuning.webp" },
    { id: 12, name: "Kikil", image: "/assets/img/menu/rmn/kikil.webp" },
    { id: 13, name: "Orek Basah", image: "/assets/img/menu/rmn/orek-basah.webp" },
    { id: 14, name: "Telur Balado", image: "/assets/img/menu/rmn/telur-balado.webp" },
    { id: 15, name: "Telur Dadar", image: "/assets/img/menu/rmn/telur-dadar.webp" },
    { id: 16, name: "Telur Semur", image: "/assets/img/menu/rmn/telur-semur.webp" },
    { id: 17, name: "Teri Kacang", image: "/assets/img/menu/rmn/teri-kacang.webp" },
    { id: 18, name: "Tongkol Balado", image: "/assets/img/menu/rmn/tongkol-balado.webp" },
    { id: 19, name: "Tumis Jamur", image: "/assets/img/menu/rmn/tumis-jamur.webp" },
    { id: 20, name: "Tumis Kacangpanjang", image: "/assets/img/menu/rmn/tumis-kacangpanjang.webp" },
    { id: 21, name: "Usus Bumbu Kuning", image: "/assets/img/menu/rmn/usus-bumbu-kuning.webp" },
  ];

  return (
    <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 drop-shadow-sm tracking-tight text-balance">
            20+ Menu <span style={{ color: brandColor }}>Otentik Nusantara</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            Dari racikan bumbu rahasia warisan leluhur, tersaji aneka hidangan menggugah selera yang dipastikan mencuri hati pelanggan Anda.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 gap-y-12">
          {menus.map((menu, index) => (
            <motion.div
              key={menu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
              className="flex flex-col items-center group w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(20%-1.2rem)] xl:w-[calc(16.666%-1.25rem)] max-w-[220px]"
            >
              <div className="relative w-full aspect-square mb-4 drop-shadow-md group-hover:drop-shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  loading="eager"
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                />
              </div>
              <h3 className="text-center font-bold text-slate-800 text-sm md:text-base px-2 group-hover:text-amber-700 transition-colors">
                {menu.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
