"use client";

import { motion } from "framer-motion";
import AnalysisForm from "@/components/analysis/AnalysisForm";

export default function SalesCallAnalysis() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600">
            Get Coaching Advice Now
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 text-center mb-12">
            Submit your sales call transcript for AI-powered analysis and receive personalized coaching insights.
          </p>

          <AnalysisForm />
        </motion.div>
      </div>
    </div>
  );
}