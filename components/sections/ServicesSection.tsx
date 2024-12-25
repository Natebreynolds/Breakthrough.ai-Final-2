"use client";

import { motion } from "framer-motion";
import { Brain, LineChart, Users, Lightbulb } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServiceCard from "./ServiceCard";
import SectionTransition from "../shared/SectionTransition";
import ParallaxBackground from "../shared/ParallaxBackground";

const services = [
  {
    title: "Fractional CSO Services",
    description: "Strategic sales leadership powered by AI, providing executive-level guidance for your business growth.",
    icon: Brain,
    link: "/services#fractional-cso"
  },
  {
    title: "AI-Powered Sales Coaching",
    description: "Personalized coaching strategies using advanced AI to elevate your sales team's performance.",
    icon: LineChart,
    link: "/services#sales-coaching"
  },
  {
    title: "Sales Automation Solutions",
    description: "Streamline your sales processes with intelligent automation tools and workflows.",
    icon: Users,
    link: "/services#automation"
  },
  {
    title: "Custom Training Programs",
    description: "Tailored training solutions designed to address your specific sales challenges and goals.",
    icon: Lightbulb,
    link: "/services#training"
  }
];

export default function ServicesSection() {
  return (
    <ParallaxBackground>
      <section className="relative py-24 overflow-hidden">
        <SectionTransition position="both" type="fade" />
        
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Solutions That
              <span className="block text-blue-400">Drive Success</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              From strategy to implementation, we offer a comprehensive suite of solutions
              to help you reach your goals.
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
                <Link href={service.link}>
                  <ServiceCard {...service} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button
              asChild
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </ParallaxBackground>
  );
}