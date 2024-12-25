"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollTransition() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-64 z-10">
      {/* Diagonal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background transform -skew-y-3" />
      
      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-blue-400/60 mb-2">Ready to see the results?</span>
          <ChevronDown className="h-6 w-6 text-blue-400/60" />
        </motion.div>
      </motion.div>
    </div>
  );
}