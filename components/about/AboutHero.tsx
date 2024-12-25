"use client";

import { motion } from "framer-motion";
import { useWindowSize } from "@/hooks/use-window-size";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "Success Rate" },
  { number: "25K+", label: "Sales Calls Analyzed" },
  { number: "32K", label: "Active Users" }
];

export default function AboutHero() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <section className="relative min-h-screen pt-20 md:pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-[80px] sm:text-[120px] md:text-[180px] font-bold leading-none ${isMobile ? 'tracking-tighter' : ''}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600">AB</span>
              <span className="text-foreground">OUT</span>
            </h1>
            
            <div className="mt-8">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our journey the path to achieving success
              </h2>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
                Pioneering AI-driven sales transformation and empowering teams to achieve breakthrough results.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center p-4"
              >
                <span className="block text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600">
                  {stat.number}
                </span>
                <span className="text-xs md:text-sm text-foreground/60 mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}