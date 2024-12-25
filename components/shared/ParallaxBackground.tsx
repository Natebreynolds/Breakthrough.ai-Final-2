"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  intensity?: number;
}

export default function ParallaxBackground({ children, intensity = 0.2 }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${intensity * 100}%`]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-blue-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </motion.div>
      {children}
    </div>
  );
}