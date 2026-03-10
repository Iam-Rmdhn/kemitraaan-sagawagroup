"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import React from "react";

export const FluidLink = ({
  href,
  className,
  style,
  fluidColor,
  children,
  onClick,
  target,
}: {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  fluidColor: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: string;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      href={href}
      ref={linkRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      target={target}
      className={`relative overflow-hidden ${className || ""}`}
      style={style}
    >
      {children}
      <div
        className="absolute pointer-events-none rounded-full transition-transform duration-1300 ease-out z-0"
        style={{
          width: "300%",
          paddingBottom: "300%",
          backgroundColor: fluidColor,
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
        }}
      />
    </Link>
  );
};
