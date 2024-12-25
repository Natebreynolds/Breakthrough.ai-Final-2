"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AnalysisResponseProps {
  response: any;
  onReset: () => void;
}

export default function AnalysisResponse({ response, onReset }: AnalysisResponseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-card/30 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/10"
    >
      <h2 className="text-2xl font-semibold mb-6">Analysis Results</h2>
      
      <div className="prose prose-invert max-w-none">
        <div className="space-y-6">
          {/* Render the response data based on its structure */}
          {typeof response === "string" ? (
            <p>{response}</p>
          ) : (
            Object.entries(response).map(([key, value]) => (
              <div key={key}>
                <h3 className="text-lg font-medium capitalize">
                  {key.replace(/_/g, " ")}
                </h3>
                <p className="text-foreground/80">{String(value)}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <Button
        onClick={onReset}
        className="mt-8 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
      >
        Analyze Another Call
      </Button>
    </motion.div>
  );
}