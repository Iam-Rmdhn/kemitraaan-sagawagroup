"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!progressRef.current) return;
      
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = 
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      const scrollProgress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      progressRef.current.style.height = `${scrollProgress}%`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    updateProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 h-full w-[5px] z-9999 pointer-events-none hidden lg:block">
      <div 
        ref={progressRef}
        className="w-full bg-linear-to-b from-red-400 to-orange-500 rounded-b-full shadow-[0_0_10px_rgba(255,49,49,0.7)] will-change-[height]"
        style={{ height: "0%" }}
      />
    </div>
  );
}
