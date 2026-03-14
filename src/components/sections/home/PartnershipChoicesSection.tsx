"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export function PartnershipChoicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.add("cursor-grabbing");
      scrollContainerRef.current.classList.remove("snap-x", "snap-mandatory");
      startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
      scrollLeft.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.remove("cursor-grabbing");
      scrollContainerRef.current.classList.add("snap-x", "snap-mandatory");
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    if (scrollContainerRef.current) {
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX.current) * 2;
      scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const packages = [
    {
      title: "Kagawa Rice Bowl",
      subtitle: "Premium Japanese Rice Bowl Experience",
      description:
        "Kagawa Rice Bowl menggabungkan kelezatan autentik Jepang dengan sentuhan unik Nusantara, menciptakan sebuah konsep bisnis kuliner yang kuat dan mudah diterima pasar. Dengan menu andalan yang inovatif, kami tidak hanya membangun basis pelanggan yang loyal, tetapi juga membuka sebuah peluang nyata untuk kesuksesan bersama di industri kuliner yang terus berkembang.",
      slug: "kagawa-ricebowl",
    },
    {
      title: "Kagawa Coffee Corner",
      subtitle: "Artisan Coffee & Specialty Drinks",
      description:
        "Kagawa Coffee Corner menawarkan pengalaman coffee premium dengan specialty drinks dan atmosfer yang nyaman. Menghadirkan berbagai metode brewing, biji kopi pilihan, dan menu minuman kreatif yang menjadi tempat favorit untuk hangout, meeting, atau me time di tengah kesibukan sehari-hari.",
      slug: "kagawa-coffee",
    },
    {
      title: "Kagawa Coffee & Rice Bowl Corner",
      subtitle: "Complete F&B Solution",
      description:
        "Kagawa Coffee & Rice Bowl Corner menghadirkan solusi bisnis F&B yang lengkap dengan menggabungkan kekuatan coffee premium dan rice bowl dalam satu konsep terintegrasi. Memaksimalkan revenue stream dengan menyajikan menu lengkap yang memenuhi kebutuhan pelanggan dari pagi hingga malam.",
      slug: "kagawa-coffee-ricebowl",
    },
    {
      title: "RM Nusantara",
      subtitle: "WarNas/Warteg, Mas Gaw dan RM Sunda",
      description:
        "RM Nusantara menawarkan kelezatan otentik Indonesia dengan berbagai masakan daerah, menciptakan sebuah konsep bisnis kuliner yang melestarikan kekayaan kuliner nusantara. Dengan menu andalan yang bervariasi, kami tidak hanya memperkenalkan cita rasa lokal, tetapi juga membuka peluang nyata untuk kesuksesan bersama.",
      slug: "rm-nusantara",
    },
    {
      title: "Independent Brand",
      subtitle: "Custom Business Solutions",
      description:
        "Independent Brand membuka peluang bagi Anda untuk mengembangkan brand kuliner unik dengan dukungan SagawaGroup, menciptakan sebuah konsep bisnis kuliner yang sesuai dengan visi dan passion Anda. Dengan pendampingan yang komprehensif, kami memberikan dukungan penuh untuk kesuksesan jangka panjang.",
      slug: "independent-brand",
    },
  ];

  return (
    <section 
    id="partnership"
    className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-4 block">
            Pilihan Kemitraan
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Pilih Paket Bisnis <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-800">Sesuai Passion Anda</span>
          </h2>
          <p className="text-gray-600 lg:text-lg leading-relaxed">
            Beragam pilihan model bisnis F&B yang dirancang khusus untuk memaksimalkan potensi pasar dan disesuaikan dengan kebutuhan investasi Anda.
          </p>
        </motion.div>
      </div>

      <div className="container-fluid lg:container mx-auto px-4 lg:px-4">
        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto pb-8 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory gap-6 lg:gap-8 px-4 lg:px-0 select-none"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              className="relative group overflow-hidden rounded-4xl w-[85vw] sm:w-[360px] shrink-0 h-[480px] bg-stone-900 snap-center shadow-xl border border-stone-800 cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-br from-stone-800 to-stone-950 opacity-50 z-0"></div>         
              <div className={`absolute inset-0 bg-linear-to-t from-red-950/80 via-transparent to-transparent transition-opacity duration-500 z-0 ${activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <div className={`absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end h-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] sm:group-hover:-translate-y-40 ${activeCard === index ? '-translate-y-48 sm:-translate-y-40' : 'group-hover:-translate-y-48'}`}>
                <h3 className="text-2xl font-bold text-white mb-2 leading-snug">
                  {pkg.title}
                </h3>
                <p className="text-red-500 font-medium text-sm">
                  {pkg.subtitle}
                </p>
              </div>

            <div className={`absolute left-0 bottom-0 w-full p-8 z-20 flex flex-col justify-end transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeCard === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                  {pkg.description}
                </p>
                <div className="pt-4 border-t border-stone-700/50 mt-auto">
                  <Link href={`/paket-kemitraan/${pkg.slug}`} className="group/btn inline-flex items-center text-sm font-bold tracking-wide text-white uppercase transition">
                    Lihat Detail
                    <span className="ml-2 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center group-hover/btn:bg-red-500 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-end mt-6 pr-4 lg:pr-0">
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full shadow-sm p-1">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-10 flex items-center justify-center text-gray-500 hover:text-gray-900 focus:outline-hidden hover:bg-gray-50 transition-colors rounded-l-full cursor-pointer"
              aria-label="Geser ke kiri"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="w-px h-5 bg-gray-200 mx-1"></div>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-10 flex items-center justify-center text-gray-500 hover:text-gray-900 focus:outline-hidden hover:bg-gray-50 transition-colors rounded-r-full cursor-pointer"
              aria-label="Geser ke kanan"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
