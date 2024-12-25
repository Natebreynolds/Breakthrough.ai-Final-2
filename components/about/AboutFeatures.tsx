"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Innovation",
    description: "Leveraging cutting-edge AI technology to transform sales processes and drive results."
  },
  {
    icon: Shield,
    title: "Proven Methods",
    description: "Combining time-tested sales frameworks with modern AI capabilities."
  },
  {
    icon: Zap,
    title: "Real-Time Support",
    description: "Instant analysis and coaching during live sales calls for better outcomes."
  }
];

export default function AboutFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}