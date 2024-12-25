"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface MainTitleProps {
  scrollProgress: MotionValue<number>;
}

export default function MainTitle({ scrollProgress }: MainTitleProps) {
  const scale = useTransform(scrollProgress, [0, 0.5], [1, 0.7]);
  const opacity = useTransform(scrollProgress, [0, 0.4, 0.5], [1, 1, 0.95]);
  const y = useTransform(scrollProgress, [0, 0.5], [0, -20]);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      style={{ scale, opacity, y }}
      className="relative my-12 origin-center"
    >
      <h1 className="text-center">
        <span className="relative inline-block text-[72px] md:text-[120px] lg:text-[180px] font-bold leading-none tracking-tight">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600">
            Breakthrough
            <br />
            <span className="inline-block mt-4">Coaching AI</span>
          </span>
          <div className="absolute inset-0 blur-[120px] opacity-20 bg-gradient-to-r from-blue-400 to-blue-600" />
        </span>
      </h1>
    </motion.div>
  );
}