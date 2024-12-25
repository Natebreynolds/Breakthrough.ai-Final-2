"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedSphere() {
  const sphereRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sphereRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [40, 80]);

  return (
    <motion.div
      ref={sphereRef}
      style={{
        scale,
        opacity,
        filter: `blur(${blur}px)`,
      }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      <div 
        className="w-full h-full rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.1) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}