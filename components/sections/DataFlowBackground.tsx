"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

export default function DataFlowBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    [0, 0.15, 0.15, 0]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create flowing lines with improved aesthetics
    const lines: THREE.Line[] = [];
    const lineCount = 100;

    for (let i = 0; i < lineCount; i++) {
      const points = [];
      const length = Math.random() * 8 + 4;
      const startX = (Math.random() - 0.5) * 20;
      const startZ = (Math.random() - 0.5) * 20;
      
      for (let j = 0; j < length; j++) {
        const segment = j / (length - 1);
        points.push(new THREE.Vector3(
          startX + Math.sin(segment * Math.PI * 2) * (Math.random() * 2),
          j * 1.5,
          startZ + Math.cos(segment * Math.PI * 2) * (Math.random() * 2)
        ));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.BufferGeometry().setFromPoints(
        curve.getPoints(50)
      );
      
      const material = new THREE.LineBasicMaterial({ 
        color: new THREE.Color(0x3b82f6),
        transparent: true,
        opacity: 0.2 + Math.random() * 0.3
      });
      
      const line = new THREE.Line(geometry, material);
      lines.push(line);
      scene.add(line);
    }

    camera.position.z = 15;
    camera.position.y = 5;
    camera.lookAt(0, 5, 0);

    const animate = () => {
      requestAnimationFrame(animate);

      lines.forEach((line, i) => {
        const time = Date.now() * 0.0005;
        line.rotation.y = Math.sin(time + i * 0.1) * 0.1;
        line.rotation.z = Math.cos(time + i * 0.1) * 0.1;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity }}
      className="absolute inset-0"
    />
  );
}