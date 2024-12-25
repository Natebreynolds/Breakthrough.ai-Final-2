"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative min-h-[200vh]">
      <div className="sticky top-0 h-screen bg-background overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <motion.div
            style={{ scale, opacity }}
            className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-blue-500/5 to-transparent"
          />
        </div>

        {/* Main Content */}
        <div className="relative h-full flex flex-col justify-center items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[1400px] mx-auto mt-[-10vh]"
          >
            {/* Title */}
            <motion.h1 
              className="text-[130px] md:text-[200px] font-bold leading-none tracking-tight text-center"
              style={{
                background: "linear-gradient(to right, #60A5FA, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Breakthrough
              <br />
              <span className="block mt-[-20px] md:mt-[-40px]">Coaching AI</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <p className="text-4xl md:text-5xl text-foreground/80 font-light">
                Your AI-Powered Virtual CSO
              </p>
              <p className="mt-6 text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto">
                Empowering businesses with AI-driven sales strategies to achieve breakthrough results
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 flex flex-col md:flex-row gap-6 justify-center"
            >
              <button className="px-8 py-4 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-105">
                Discover Our Services
              </button>
              <button className="px-8 py-4 text-lg font-medium text-foreground border-2 border-foreground/20 hover:border-foreground/40 rounded-lg transition-all duration-300 transform hover:scale-105">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/20 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}