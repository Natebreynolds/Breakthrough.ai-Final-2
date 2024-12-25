"use client";

import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 p-3 bg-card/50 border border-white/10 rounded-2xl max-w-[80%]"
    >
      <div className="flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="w-2 h-2 bg-blue-400 rounded-full"
          />
        ))}
      </div>
      <span className="text-sm text-foreground/60">
        Breakthrough AI is typing...
      </span>
    </motion.div>
  );
}