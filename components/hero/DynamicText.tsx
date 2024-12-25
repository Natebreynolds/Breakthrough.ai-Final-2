"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MainTitle from "./MainTitle";

export default function DynamicText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Main title animations - start immediately on scroll
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  // Subtitle animations with adjusted timing
  const topTextOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const topTextY = useTransform(scrollYProgress, [0, 0.15], [30, 0]);
  const topTextSpacing = useTransform(scrollYProgress, [0, 0.2], [0, 120]);
  
  const bottomTextOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const bottomTextY = useTransform(scrollYProgress, [0.05, 0.2], [30, 0]);
  const bottomTextSpacing = useTransform(scrollYProgress, [0.05, 0.2], [0, 120]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        {/* Top text */}
        <motion.div
          initial={{ opacity: 0 }}
          style={{ 
            opacity: topTextOpacity, 
            y: topTextY,
            marginBottom: topTextSpacing 
          }}
          className="relative mb-8 transition-all duration-300"
        >
          <p className="text-[32px] md:text-[48px] font-light text-blue-400/80 text-center">
            Your AI-Powered Virtual CSO
          </p>
        </motion.div>

        {/* Main Title */}
        <motion.div
          style={{ 
            scale: titleScale,
            opacity: titleOpacity,
            y: titleY
          }}
          className="relative my-12 transition-all duration-300"
        >
          <MainTitle />
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          style={{ 
            opacity: bottomTextOpacity, 
            y: bottomTextY,
            marginTop: bottomTextSpacing
          }}
          className="relative mt-8 transition-all duration-300"
        >
          <p className="text-[24px] md:text-[32px] font-light text-blue-400/60 max-w-4xl mx-auto text-center">
            Empowering businesses with AI-driven sales strategies to achieve breakthrough results
          </p>
        </motion.div>
      </div>
    </div>
  );
}