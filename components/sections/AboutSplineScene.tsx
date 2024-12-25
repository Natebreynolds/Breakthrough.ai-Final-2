"use client";

import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function AboutSplineScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (!containerRef.current || !isDesktop) return;

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    containerRef.current.appendChild(canvas);

    const app = new Application(canvas);
    app.load('https://prod.spline.design/855yYp8MrqN5UcgR/scene.splinecode')
      .catch(console.error);

    return () => {
      app.dispose();
      canvas.remove();
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 rounded-2xl overflow-hidden"
    />
  );
}