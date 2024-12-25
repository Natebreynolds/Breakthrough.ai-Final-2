"use client";

import { motion } from "framer-motion";

export default function PageBackground() {
  return (
    <>
      {/* Base dark background */}
      <div className="fixed inset-0 bg-[#030303]" />
      
      {/* Ambient gradients */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="fixed inset-0"
      >
        {/* Subtle purple glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
        
        {/* Blue accent glow */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/50 to-[#030303]" />
      </motion.div>
      
      {/* Subtle grid pattern */}
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
    </>
  );
}