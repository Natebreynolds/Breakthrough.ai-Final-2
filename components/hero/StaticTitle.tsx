"use client";

import { motion } from "framer-motion";

export default function StaticTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative text-center"
    >
      <div className="relative inline-block">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[180px] leading-none font-bold tracking-tight">
          <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Breakthrough
          </span>
          <br />
          <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mt-4 sm:mt-6 md:mt-8 lg:mt-12">
            Coaching AI
          </span>
        </h1>
        <div className="absolute inset-0 blur-[120px] opacity-20 bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse scale-150" />
      </div>
    </motion.div>
  );
}