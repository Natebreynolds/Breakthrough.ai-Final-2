"use client";

import { motion } from "framer-motion";
import SectionTransition from "@/components/shared/SectionTransition";

export default function BookingPage() {
  return (
    <main className="relative min-h-screen pt-20 md:pt-32">
      <SectionTransition type="fade" position="top" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600">
              Breakthrough Session
            </span>
          </h1>
          <p className="text-lg text-foreground/60">
            Take the first step towards transforming your sales performance. 
            Book a discovery call to discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6"
        >
          <iframe 
            src="https://scorpion.chilipiper.com/book/me/nathan-reynolds?type=discovery-call"
            width="100%"
            height="700"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </main>
  );
}