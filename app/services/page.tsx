"use client";

import { motion } from "framer-motion";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";

export default function ServicesPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
      <div className="relative z-10">
        <ServicesHero />
        <ServicesList />
      </div>
    </main>
  );
}