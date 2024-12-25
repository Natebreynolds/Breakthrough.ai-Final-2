"use client";

import { motion } from "framer-motion";
import { Brain, LineChart, Users, Lightbulb } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Virtual CSO Services",
    description: "Strategic sales leadership powered by AI, providing executive-level guidance for your business growth.",
    icon: Brain
  },
  {
    title: "AI-Powered Sales Coaching",
    description: "Personalized coaching strategies using advanced AI to elevate your sales team's performance.",
    icon: LineChart
  },
  {
    title: "Sales Automation Solutions",
    description: "Streamline your sales processes with intelligent automation tools and workflows.",
    icon: Users
  },
  {
    title: "Custom Training Programs",
    description: "Tailored training solutions designed to address your specific sales challenges and goals.",
    icon: Lightbulb
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI-powered solutions to transform your sales performance
            and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}