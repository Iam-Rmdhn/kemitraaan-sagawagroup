"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function MenuKrb() {
  const brandColor = "var(--kagawaricebowl-color)";

  const menus = [
    {
      id: 1,
      name: "Kushiyaki Rice Bowl",
      image: "/assets/img/menu/ricebowl/1.webp",
    },
    {
      id: 2,
      name: "Teriyaki Chicken Rice Bowl",
      image: "/assets/img/menu/ricebowl/2.webp",
    },
    {
      id: 3,
      name: "Coconut Chicken Rice Bowl",
      image: "/assets/img/menu/ricebowl/3.webp",
    },
    {
      id: 4,
      name: "Bulgogi Beef Rice Bowl",
      image: "/assets/img/menu/ricebowl/4.webp",
    },
    {
      id: 5,
      name: "Coconut Egg Rice Bowl",
      image: "/assets/img/menu/ricebowl/5.webp",
    },
  ];

  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 drop-shadow-sm tracking-tight text-balance">
            Menu <span style={{ color: brandColor }}>Unggulan</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            Varian rasa autentik Jepang yang telah menjadi favorit pelanggan dan mesin pencetak omset.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {menus.map((menu, index) => (
            <motion.div
              key={menu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.6rem)] max-w-[200px]"
            >
              <div className="relative w-full aspect-square mb-4 drop-shadow-md group-hover:drop-shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <h3 className="text-center font-bold text-slate-800 text-sm sm:text-base group-hover:text-amber-600 transition-colors">
                {menu.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
