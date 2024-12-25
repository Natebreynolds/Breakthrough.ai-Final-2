"use client";

import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";

export default function SplineScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const loadSpline = async () => {
      try {
        const viewer = document.createElement('spline-viewer');
        viewer.setAttribute('url', 'https://prod.spline.design/8Of0NpUSvZ50zBiI/scene.splinecode');
        viewer.setAttribute('loading-anim', 'false');
        viewer.style.width = '100%';
        viewer.style.height = '100%';
        
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js';
        
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });

        await customElements.whenDefined('spline-viewer');
        containerRef.current?.appendChild(viewer);
      } catch (err) {
        console.error('Error loading Spline scene:', err);
      }
    };

    loadSpline();

    return () => {
      const viewer = containerRef.current?.querySelector('spline-viewer');
      if (viewer) viewer.remove();
    };
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Spline Scene Container */}
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      />

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#030303]/30 to-[#030303]/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/20 to-[#030303]" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#030303] via-[#030303]/95 to-transparent" />
      
      {/* Accent Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
    </div>
  );
}