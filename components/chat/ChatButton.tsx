"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatButton({ onClick, isOpen }: ChatButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        fixed bottom-6 right-6 
        px-6 py-3 
        rounded-lg
        text-sm font-medium
        bg-transparent
        border-0
        group
        transition-all duration-300
        ${isOpen ? 'scale-0' : 'scale-100'}
      `}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600">
        <MessageSquare className="w-4 h-4" />
        Breakthrough AI Chat
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all duration-300 rounded-lg" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-blue-400/20 to-blue-600/20" />
    </motion.button>
  );
}