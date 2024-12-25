"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Learning",
    description: "AI-powered analysis of your current sales approach and challenges."
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Custom-tailored improvement plans based on data-driven insights."
  },
  {
    number: "03",
    title: "Implementation",
    description: "Seamless integration of AI tools and coaching into your workflow."
  }
];

export default function AboutProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A simple, yet effective 3 steps process
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-8xl font-bold opacity-10 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}