"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BackgroundGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gradientRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <motion.div
      ref={gradientRef}
      style={{ opacity }}
      className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-blue-600/5 to-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
}