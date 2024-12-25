"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const frameworks = [
  {
    title: "7 Keys to Connecting",
    description: "A proven system for building trust and rapport with prospects.",
    steps: ["Discovery", "Alignment", "Value Creation", "Trust Building"]
  },
  {
    title: "CDOci Framework",
    description: "Deep-dive methodology for understanding prospect situations.",
    steps: ["Challenge", "Desired Outcome", "Obstacles", "Current Impact"]
  }
];

export default function FrameworksSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frameworks That{" "}
            <span className="text-blue-400">Deliver Results</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Our proven methodologies combine decades of sales expertise with cutting-edge AI technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
              <div className="relative bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full transition-all duration-300 group-hover:translate-y-[-4px]">
                <h3 className="text-2xl font-bold mb-4">{framework.title}</h3>
                <p className="text-foreground/60 mb-6">{framework.description}</p>
                
                <div className="space-y-4">
                  {framework.steps.map((step, idx) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (idx * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-400" />
                      <span className="text-foreground/80">{step}</span>
                    </motion.div>
                  ))}
                </div>

                <Button variant="ghost" className="group mt-6">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}