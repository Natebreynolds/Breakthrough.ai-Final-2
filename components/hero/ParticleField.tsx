"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function ParticleField() {
  const particles = useMemo(() => Array.from({ length: 20 }), []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
        />
      ))}
    </div>
  );
}