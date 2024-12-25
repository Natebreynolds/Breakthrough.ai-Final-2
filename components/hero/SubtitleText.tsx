"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface SubtitleTextProps {
  text: string;
  position: "top" | "bottom";
  scrollProgress: MotionValue<number>;
}

export default function SubtitleText({ text, position, scrollProgress }: SubtitleTextProps) {
  const [startFade, endFade] = position === "top" 
    ? [0.1, 0.3]
    : [0.2, 0.4];

  const opacity = useTransform(scrollProgress, [0, startFade, endFade], [0, 0, 1]);
  const y = useTransform(
    scrollProgress,
    [0, startFade, endFade],
    position === "top" ? [30, 30, 0] : [-30, -30, 0]
  );

  return (
    <motion.p
      initial={{ opacity: 0, y: position === "top" ? 30 : -30 }}
      style={{ opacity, y }}
      className={`text-center ${
        position === "top"
          ? "text-[32px] md:text-[48px] font-light text-blue-400/80 mb-8"
          : "text-[24px] md:text-[32px] font-light text-blue-400/60 max-w-4xl mx-auto mt-8"
      }`}
    >
      {text}
    </motion.p>
  );
}