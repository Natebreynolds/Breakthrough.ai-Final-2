"use client";

import { create } from "zustand";
import { ServiceType } from "@/types/services";

interface ServiceModalStore {
  isOpen: boolean;
  service: ServiceType | null;
  openModal: (service: ServiceType) => void;
  closeModal: () => void;
}

export const useServiceModal = create<ServiceModalStore>((set) => ({
  isOpen: false,
  service: null,
  openModal: (service) => set({ isOpen: true, service }),
  closeModal: () => set({ isOpen: false, service: null }),
}));