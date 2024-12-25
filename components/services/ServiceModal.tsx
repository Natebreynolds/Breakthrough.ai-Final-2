"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useServiceModal } from "@/hooks/use-service-modal";
import ServiceModalHeader from "./modal/ServiceModalHeader";
import ServiceModalContent from "./modal/ServiceModalContent";

export default function ServiceModal() {
  const { isOpen, closeModal, service } = useServiceModal();

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-background border border-border rounded-lg shadow-xl overflow-hidden"
            >
              <ServiceModalHeader 
                title={service.title}
                price={service.price}
                onClose={closeModal}
              />
              
              <div className="p-6 overflow-y-auto max-h-[calc(85vh-82px)]">
                <ServiceModalContent service={service} />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}