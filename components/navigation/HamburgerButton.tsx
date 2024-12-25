"use client";

import { motion } from "framer-motion";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative z-50 p-2 focus:outline-none"
      aria-label="Toggle menu"
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-full h-0.5 bg-foreground origin-left transition-all duration-300"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-full h-0.5 bg-foreground transition-all duration-300"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-full h-0.5 bg-foreground origin-left transition-all duration-300"
        />
      </div>
    </button>
  );
}