"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { FluidLink } from "@/components/ui/FluidLink";

export function PaketNavigationHubungiKami() {
  const packages = [
    {
      id: "krb",
      name: "Kagawa Rice Bowl",
      color: "var(--kagawaricebowl-color)",
      href: "/paket-kemitraan/kagawa-ricebowl",
    },
    {
      id: "kc",
      name: "Kagawa Coffee Conner",
      color: "var(--kagawacoffee-color)",
      href: "/paket-kemitraan/kagawa-coffee",
    },
    {
      id: "kcrb",
      name: "Kagawa Coffee & Rice Bowl Conner",
      color: "var(--kagawacoffeebowl-color)",
      href: "/paket-kemitraan/kagawa-coffee-ricebowl",
    },
    {
      id: "rmn",
      name: "RM Nusantara",
      color: "var(--rmn-color)",
      href: "/paket-kemitraan/rm-nusantara",
    },
    {
      id: "ib",
      name: "Independent Brand",
      color: "var(--independent-color)",
      href: "/paket-kemitraan/independent-brand",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Pelajari Paket Kemitraan
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Temukan informasi detail mengenai benefit, fasilitas, dan proyeksi ROI dari masing-masing paket kemitraan kami.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <FluidLink
                href={pkg.href}
                className="group flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 outline-none"
                style={{ color: pkg.color }}
                fluidColor="rgba(0, 0, 0, 0.05)"
              >
                <span className="font-bold relative z-10">{pkg.name}</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </FluidLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
