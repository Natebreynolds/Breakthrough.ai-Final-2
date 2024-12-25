"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Breakthrough Coaching AI transformed our sales process, delivering unmatched insights and results!",
    author: "Sarah Johnson",
    role: "VP of Sales, TechCorp",
    rating: 5
  },
  {
    text: "The AI-powered insights have revolutionized how we approach our sales strategy. Incredible results!",
    author: "Michael Chen",
    role: "Sales Director, InnovateX",
    rating: 5
  },
  {
    text: "A game-changing platform that has significantly improved our sales performance and team efficiency.",
    author: "Emily Rodriguez",
    role: "CEO, GrowthWorks",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            See how Breakthrough Coaching AI is transforming sales teams and driving exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-lg mb-6 text-foreground/80 italic">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}