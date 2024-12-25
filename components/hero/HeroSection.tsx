"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import HeroContent from "./HeroContent";
import SplineScene from "./SplineScene";
import SectionTransition from "../shared/SectionTransition";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section ref={containerRef} className="relative min-h-[150vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Scene */}
        <SplineScene />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-16">
          <HeroContent scrollProgress={scrollYProgress} />
        </div>

        {/* Section Transition */}
        <SectionTransition type="fade" position="bottom" className="z-20" />
      </div>
    </section>
  );
}