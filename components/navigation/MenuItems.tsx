"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Book a Call", path: "/book" }
];

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

export default function MenuItems({ onItemClick }: { onItemClick: () => void }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6">
        {menuItems.map((item, i) => (
          <motion.div
            key={item.name}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <Link
              href={item.path}
              onClick={onItemClick}
              className="group block py-2 text-center"
            >
              <motion.span
                className="relative inline-block text-xl font-medium text-foreground/80"
                whileHover={{
                  color: "rgb(96, 165, 250)",
                  transition: { duration: 0.2 }
                }}
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}