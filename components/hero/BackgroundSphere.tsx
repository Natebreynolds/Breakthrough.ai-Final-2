"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BackgroundSphere() {
  const sphereRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sphereRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.3], [60, 100]);

  return (
    <motion.div
      ref={sphereRef}
      style={{
        scale,
        opacity,
        filter: `blur(${blur}px)`,
      }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.8 }}
      transition={{ duration: 1.5 }}
    >
      <div 
        className="w-full h-full rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0.1) 50%, transparent 80%)",
        }}
      />
    </motion.div>
  );
}