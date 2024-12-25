"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TypewriterText from "../shared/TypewriterText";

export default function WelcomeSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2
      }
    })
  };

  return (
    <section className="relative py-20 overflow-hidden bg-[#030303]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2"
          >
            <motion.h2 
              custom={0}
              variants={fadeUpVariants}
              className="text-4xl md:text-6xl font-bold"
            >
              Services Tailored for
            </motion.h2>
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              className="text-4xl md:text-6xl font-bold text-blue-400"
            >
              <TypewriterText 
                text="Breakthrough Success"
                delay={0.5}
              />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto"
          >
            We combine AI innovation, proven sales frameworks, and personalized coaching 
            to drive measurable results. Our approach transforms your sales process into 
            a powerful engine for growth.
          </motion.p>

          {/* Features */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "AI-Powered Insights",
              "Proven Frameworks",
              "Expert Coaching"
            ].map((feature, index) => (
              <motion.div
                key={feature}
                custom={index + 3}
                variants={fadeUpVariants}
                className="bg-card/20 backdrop-blur-sm border border-white/5 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-foreground/60 text-sm">
                  Leverage our {feature.toLowerCase()} to accelerate your sales growth
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={6}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              asChild
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="text-lg px-8 py-6 border-2"
            >
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}