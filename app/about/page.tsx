"use client";

import { motion } from "framer-motion";
import AboutHero from "@/components/about/AboutHero";
import AboutFeatures from "@/components/about/AboutFeatures";
import ProvenMethods from "@/components/about/ProvenMethods";
import AboutProcess from "@/components/about/AboutProcess";
import AboutContent from "@/components/about/AboutContent";

export default function AboutPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
      <div className="relative z-10">
        <AboutHero />
        <AboutFeatures />
        <ProvenMethods />
        <AboutContent />
        <AboutProcess />
      </div>
    </main>
  );
}