"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { services } from "@/config/services";

export default function ServicesList() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
      <ServiceModal />
    </section>
  );
}