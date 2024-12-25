"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        delay: 1,
      }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-6 h-10 border-2 border-blue-400/20 rounded-full flex justify-center"
      >
        <motion.div 
          className="w-1.5 h-3 bg-blue-400/30 rounded-full mt-2"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      <span className="mt-4 text-sm text-blue-400/40 font-light">Scroll to explore</span>
    </motion.div>
  );
}