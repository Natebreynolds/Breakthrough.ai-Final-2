"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative pt-20 md:pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Services Tailored for Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600">
              Breakthrough Success
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Welcome to the forefront of sales and service excellence. Our tailored solutions are designed to elevate your business performance, connect deeply with your clients, and achieve measurable breakthroughs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}