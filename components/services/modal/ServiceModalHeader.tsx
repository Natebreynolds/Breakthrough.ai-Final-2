"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceModalHeaderProps {
  title: string;
  price: string;
  onClose: () => void;
}

export default function ServiceModalHeader({ title, price, onClose }: ServiceModalHeaderProps) {
  return (
    <div className="flex items-center justify-between p-6 border-b border-border">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-foreground/60 mt-1">{price}</p>
      </div>
      <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-background/5">
        <X className="h-5 w-5" />
      </Button>
    </div>
  );
}