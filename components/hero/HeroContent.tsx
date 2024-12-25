"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface HeroContentProps {
  scrollProgress: MotionValue<number>;
}

export default function HeroContent({ scrollProgress }: HeroContentProps) {
  const topTextY = useTransform(scrollProgress, [0, 0.2], [30, 0]);
  const topTextOpacity = useTransform(scrollProgress, [0, 0.2, 0.7, 0.8], [0, 1, 1, 0]);
  
  const bottomTextY = useTransform(scrollProgress, [0.1, 0.3], [30, 0]);
  const bottomTextOpacity = useTransform(scrollProgress, [0.1, 0.3, 0.7, 0.8], [0, 1, 1, 0]);

  return (
    <div className="w-full max-w-[1400px] mx-auto space-y-6 -mt-20">
      {/* Top Text */}
      <motion.div
        style={{ y: topTextY, opacity: topTextOpacity }}
        className="relative mb-4"
      >
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-medium text-white/90 text-center">
          Your AI-Powered Fractional CSO
        </p>
      </motion.div>

      {/* Main Title */}
      <div className="text-center">
        <div className="relative inline-block text-[42px] sm:text-[60px] md:text-[90px] lg:text-[120px] font-bold leading-none">
          <div className="relative z-10">
            <div className="relative">
              <span 
                className="block"
                style={{
                  background: "linear-gradient(135deg, #93C5FD 0%, #3B82F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 4px 8px rgba(0,0,0,0.3)",
                  padding: "0.1em 0"
                }}
              >
                Breakthrough
              </span>
              <div className="flex items-center justify-center mt-[-0.1em]">
                <span 
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #93C5FD 0%, #3B82F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 4px 8px rgba(0,0,0,0.3)",
                    padding: "0.1em 0"
                  }}
                >
                  Coaching
                </span>
                <span 
                  className="ml-4 inline-block"
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 4px 8px rgba(0,0,0,0.3)"
                  }}
                >
                  AI
                </span>
              </div>
            </div>
          </div>
          {/* Enhanced glow effect */}
          <div 
            className="absolute inset-0 blur-[100px] opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.1) 70%, transparent 100%)"
            }}
          />
        </div>
      </div>

      {/* Bottom Text */}
      <motion.div
        style={{ y: bottomTextY, opacity: bottomTextOpacity }}
        className="relative mt-8"
      >
        <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-white/90 max-w-4xl mx-auto text-center leading-relaxed px-4">
          Empowering businesses with AI-driven sales strategies to achieve breakthrough results
        </p>
      </motion.div>
    </div>
  );
}