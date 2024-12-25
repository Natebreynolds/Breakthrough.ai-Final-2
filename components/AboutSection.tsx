"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your AI-Powered Fractional CSO
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            At Breakthrough Coaching AI, we combine cutting-edge AI solutions with 
            personalized strategies to help businesses achieve their full potential. 
            Our Fractional CSO platform provides real-time insights, personalized coaching, 
            and data-driven recommendations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              Experience the power of having a Fractional Chief Sales Officer backed by 
              advanced AI technology, providing executive-level guidance for your business growth.
            </p>
            <ul className="space-y-4">
              {[
                "Data-driven sales strategies",
                "AI-powered performance analysis",
                "Personalized coaching solutions",
                "Real-time insights and optimization"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-foreground/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}