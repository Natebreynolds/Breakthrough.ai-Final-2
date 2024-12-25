"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import HeroButtons from "./HeroButtons";

interface FlowingContentProps {
  scrollProgress: MotionValue<number>;
}

export default function FlowingContent({ scrollProgress }: FlowingContentProps) {
  const flowingTextY = useTransform(scrollProgress, [0, 0.3], [50, 0]);
  const flowingTextOpacity = useTransform(scrollProgress, [0, 0.3], [0, 1]);
  
  const descriptionY = useTransform(scrollProgress, [0.1, 0.4], [50, 0]);
  const descriptionOpacity = useTransform(scrollProgress, [0.1, 0.4], [0, 1]);
  
  const buttonsY = useTransform(scrollProgress, [0.2, 0.5], [30, 0]);
  const buttonsOpacity = useTransform(scrollProgress, [0.2, 0.5], [0, 1]);

  return (
    <div className="relative space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 text-center">
      <motion.div
        style={{ y: flowingTextY, opacity: flowingTextOpacity }}
        className="relative"
      >
        <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground/90 font-medium tracking-wide">
          Your AI-Powered Virtual CSO
        </span>
      </motion.div>

      <motion.p
        style={{ y: descriptionY, opacity: descriptionOpacity }}
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 font-light leading-relaxed max-w-4xl mx-auto px-4"
      >
        Empowering businesses with AI-driven sales strategies to achieve breakthrough results
      </motion.p>

      <motion.div
        style={{ y: buttonsY, opacity: buttonsOpacity }}
        className="pt-8 sm:pt-12 md:pt-16"
      >
        <HeroButtons />
      </motion.div>
    </div>
  );
}