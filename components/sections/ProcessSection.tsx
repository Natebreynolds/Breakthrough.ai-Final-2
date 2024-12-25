"use client";

import { motion } from "framer-motion";
import { Workflow, Target, BarChart3, Rocket } from "lucide-react";

const processes = [
  {
    icon: Workflow,
    title: "Discovery",
    description: "We analyze your current sales process and identify opportunities for improvement."
  },
  {
    icon: Target,
    title: "Strategy Development",
    description: "Create a customized plan leveraging AI and proven methodologies."
  },
  {
    icon: BarChart3,
    title: "Implementation",
    description: "Execute the strategy with ongoing monitoring and optimization."
  },
  {
    icon: Rocket,
    title: "Growth & Scale",
    description: "Accelerate results and expand success across your organization."
  }
];

export default function ProcessSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
            A systematic approach to transforming your sales performance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.21, 0.45, 0.15, 1.0]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="relative bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full transition-transform duration-300 group-hover:translate-y-[-4px]">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                    ease: "backOut"
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="mb-6"
                >
                  <process.icon className="h-10 w-10 text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-foreground/60">{process.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}