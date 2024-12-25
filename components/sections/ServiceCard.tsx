"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="group relative">
      {/* Card Background with consistent gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
      
      <div className="relative bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full transition-all duration-300 group-hover:translate-y-[-4px]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="relative mb-6"
        >
          <Icon className="h-12 w-12 text-blue-400" />
          <div className="absolute inset-0 blur-2xl bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-foreground/60">{description}</p>
      </div>
    </div>
  );
}