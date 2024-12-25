"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Revolutionizing Sales Through AI Innovation
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              At Breakthrough Coaching AI, we combine cutting-edge AI solutions with 
              tailored sales strategies to help businesses achieve their full potential. 
              Our virtual CSO platform provides real-time insights, personalized coaching, 
              and data-driven recommendations.
            </p>
            <ul className="space-y-4">
              {[
                "Advanced AI-powered sales analytics",
                "Personalized coaching and strategy",
                "Real-time performance insights",
                "Automated sales optimization"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-lg text-foreground/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}