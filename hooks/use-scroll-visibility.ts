"use client";

import { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';

export function useScrollVisibility(threshold: number = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold && !isVisible) {
        setIsVisible(true);
      } else if (window.scrollY <= threshold && isVisible) {
        setIsVisible(false);
      }
    };

    const unsubscribe = scrollY.on('change', handleScroll);
    return () => unsubscribe();
  }, [scrollY, isVisible, threshold]);

  return isVisible;
}