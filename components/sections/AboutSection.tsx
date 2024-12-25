"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { name: "AI Strategy", level: 95 },
  { name: "Sales Optimization", level: 90 },
  { name: "Team Leadership", level: 85 },
  { name: "Performance Analytics", level: 92 }
];

export default function AboutSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-5xl font-bold">
                Get to Know Our
                <span className="block text-blue-400">Expertise</span>
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed">
                We bring decades of sales leadership experience enhanced by cutting-edge AI technology. Our Fractional CSO service combines human expertise with data-driven insights to deliver exceptional results.
              </p>
            </div>

            {/* Skills Bars */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              variant="ghost"
              className="group text-lg"
            >
              Learn More About Our Approach
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:h-[600px] space-y-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-transparent rounded-2xl" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
            
            <div className="relative h-full p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Years of Experience", value: "10+" },
                    { label: "Satisfied Clients", value: "50+" },
                    { label: "Projects Completed", value: "100+" },
                    { label: "Success Rate", value: "100%" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-card/30 backdrop-blur-sm p-4 rounded-lg border border-white/10"
                    >
                      <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                      <div className="text-sm text-foreground/60">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}