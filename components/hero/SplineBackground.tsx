"use client";

import { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';
import { motion } from "framer-motion";

export default function SplineBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    containerRef.current.appendChild(canvas);

    const app = new Application(canvas);
    
    app.load('https://my.spline.design/particlenebula-9849302fffed6cd03ece704728ab22ca/')
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error loading Spline scene:', err);
        setError(true);
        setIsLoading(false);
      });

    return () => {
      app.dispose();
      canvas.remove();
    };
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Loading State */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
          <div className="absolute inset-0 blur-xl bg-blue-500/20 animate-pulse" />
        </div>
      </motion.div>

      {/* Fallback/Error Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: error ? 1 : 0 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-blue-600/10 to-background" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </motion.div>

      {/* Spline Scene Container */}
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading || error ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/30 to-background/90 pointer-events-none" />
    </div>
  );
}