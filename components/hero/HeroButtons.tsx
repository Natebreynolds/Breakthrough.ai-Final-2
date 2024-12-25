"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="flex flex-col md:flex-row gap-6 justify-center"
    >
      <Button
        size="lg"
        className="text-lg px-10 py-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
      >
        Discover Our Services
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="text-lg px-10 py-6 border-2 hover:bg-foreground/5 transition-all duration-300 hover:scale-105"
      >
        Watch Demo
      </Button>
    </motion.div>
  );
}