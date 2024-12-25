"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HamburgerButton from "./navigation/HamburgerButton";
import MenuItems from "./navigation/MenuItems";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const headerHeight = useTransform(scrollY, [0, 100], ["5rem", "4rem"]);
  const buttonScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50"
    >
      {/* Header Background */}
      <motion.div
        className="absolute inset-0 bg-background backdrop-blur-md"
        style={{ opacity: headerBgOpacity }}
      />

      {/* Header Content */}
      <motion.div
        style={{ height: headerHeight }}
        className="relative container mx-auto px-4 flex items-center justify-between"
      >
        <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        
        <motion.div style={{ scale: buttonScale }}>
          <Button
            size="default"
            className={cn(
              "relative group overflow-hidden",
              "bg-transparent border-0",
              "px-6 py-2 text-sm font-medium",
              "transition-all duration-300"
            )}
            asChild
          >
            <Link href="/free-sales-call-analysis">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600">
                Free Sales Call Analysis
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-blue-400/20 to-blue-600/20" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Menu Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          clipPath: isOpen 
            ? "inset(0% 0% 0% 0%)" 
            : "inset(0% 0% 100% 0%)",
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut"
        }}
        className="absolute top-full left-0 w-full bg-background/80 backdrop-blur-md"
      >
        <MenuItems onItemClick={() => setIsOpen(false)} />
      </motion.div>
    </motion.nav>
  );
}