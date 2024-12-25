"use client";

import { motion } from "framer-motion";
import { Shield, Users, Target, Zap, Brain, LineChart, UserCheck, Lightbulb } from "lucide-react";

const mainSections = [
  {
    title: "Who We Are",
    content: `We're not just a tool—we're your strategic partner in navigating the complex sales landscape. Whether you're mastering the first touch in a discovery call, overcoming tough objections, crafting proposals that captivate, or streamlining repetitive tasks, Breakthrough Coaching AI is designed to empower you at every stage of the sales cycle.`,
    icon: Shield,
  },
  {
    title: "Our Mission",
    content: `To empower sales professionals to bridge the gap between resistance and readiness by leveraging time-tested methodologies, personalized coaching, and cutting-edge AI tools. We aim to help you unlock your prospects' true needs, tell compelling stories, and offer solutions that resonate—all while giving your team the time to focus on what they do best: building relationships.`,
    icon: Target,
  }
];

const features = [
  {
    title: "AI-Powered Sales Automation",
    items: [
      "Automate mundane tasks like data entry, follow-up scheduling, and report generation",
      "Deliver instant insights and recommendations during sales calls",
      "Free your team to focus on high-value activities"
    ],
    icon: Brain
  },
  {
    title: "Frameworks That Deliver Results",
    items: [
      "The 7 Keys to Connecting system for moving prospects from skepticism to trust",
      "CDOci Framework for deep-diving into prospect situations",
      "Proven methodologies backed by decades of success"
    ],
    icon: LineChart
  },
  {
    title: "Client-Focused Strategies",
    items: [
      "Identify and adapt to client communication preferences",
      "Tailor interactions to each client's social style",
      "Align solutions with client challenges using Focused Selling"
    ],
    icon: UserCheck
  },
  {
    title: "Proven Sales Processes",
    items: [
      "Craft impactful agendas that build credibility",
      "Master the Capabilities Pitch for value demonstration",
      "Structure winning proposals with precision"
    ],
    icon: Lightbulb
  }
];

export default function AboutContent() {
  return (
    <div className="relative py-20 overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            At Breakthrough Coaching AI, we believe sales is more than a transaction—it's a profound opportunity to solve real problems, foster authentic connections, and drive meaningful change. Powered by decades of proven frameworks like Focused Selling and pioneering the integration of AI into sales automation, we combine the art of communication with advanced technologies to elevate your sales performance and accelerate your team's results.
          </p>
        </motion.div>

        {/* Main Sections */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-24">
          {mainSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/10"
            >
              <section.icon className="w-8 md:w-10 h-8 md:h-10 text-blue-400 mb-4" />
              <h2 className="text-xl md:text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/20 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/5"
            >
              <feature.icon className="w-6 md:w-8 h-6 md:h-8 text-blue-400 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-4">{feature.title}</h3>
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}