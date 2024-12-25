"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProvenMethods() {
  return (
    <section className="py-24 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600">
            Achieve breakthrough performance with a proven process
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Our methodology is built on the foundation of Focus Selling, a proven system for sales success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Powered by Focus Selling</h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Focus Selling is a comprehensive methodology that has transformed countless sales professionals and organizations. By combining these proven principles with our AI-powered platform, we deliver unprecedented results for our clients.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://gofocusselling.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn more about Focus Selling →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[3/1] bg-card/30 backdrop-blur-sm rounded-xl border border-white/10 p-8"
          >
            <a 
              href="https://gofocusselling.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative w-full h-full"
            >
              <Image
                src="https://gofocusselling.com/wp-content/uploads/2023/02/Logo-header.png"
                alt="Focus Selling Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}