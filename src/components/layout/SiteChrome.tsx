"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAppSurface =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/daftar-kemitraan");

  if (isAppSurface) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
