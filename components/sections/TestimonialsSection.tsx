"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The AI-powered insights have revolutionized how we approach sales strategy. Game-changing results!",
    author: "Sarah Chen",
    role: "VP of Sales, TechCorp"
  },
  {
    quote: "Working with their Fractional CSO service has transformed our entire sales organization.",
    author: "Michael Rodriguez",
    role: "CEO, GrowthWorks"
  }
];

export default function TestimonialsSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Voices of Trust</h2>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
            Hear from leaders who've experienced breakthrough results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.21, 0.45, 0.15, 1.0]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="relative bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-transform duration-300 group-hover:translate-y-[-4px]">
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
                  <Quote className="h-10 w-10 text-blue-400" />
                </motion.div>
                <p className="text-lg text-foreground/80 mb-8">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}