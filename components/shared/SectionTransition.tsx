"use client";

import { motion } from "framer-motion";

interface SectionTransitionProps {
  position?: "top" | "bottom" | "both";
  className?: string;
}

export default function SectionTransition({ 
  position = "bottom",
  className = "" 
}: SectionTransitionProps) {
  return (
    <div className={`absolute w-full pointer-events-none ${className}`}>
      {position !== "bottom" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#030303] to-transparent transform rotate-180"
        />
      )}
      
      {position !== "top" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#030303]"
        />
      )}
    </div>
  );
}