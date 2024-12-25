"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface HeroBackgroundProps {
  scrollProgress: MotionValue<number>;
}

export default function HeroBackground({ scrollProgress }: HeroBackgroundProps) {
  const opacity = useTransform(scrollProgress, [0, 0.2], [0.5, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
    </motion.div>
  );
}