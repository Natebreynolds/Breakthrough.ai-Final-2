"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "50+", label: "Satisfied Clients" },
  { number: "100+", label: "Projects Completed" },
  { number: "100%", label: "Project Success Rate" }
];

export default function StatsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-blue-500/10 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Proven Track Record of
          <span className="block text-blue-400">Exceptional Results</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.21, 0.45, 0.15, 1.0]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="relative p-6 text-center">
                <motion.span 
                  className="block text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600 mb-3"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                    ease: "backOut"
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {stat.number}
                </motion.span>
                <span className="text-sm md:text-base text-foreground/60">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}