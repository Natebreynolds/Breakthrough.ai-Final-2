"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceType } from "@/types/services";
import { useServiceModal } from "@/hooks/use-service-modal";

export default function ServiceCard({
  title,
  description,
  features,
  price,
  tags,
  details
}: ServiceType) {
  const { openModal } = useServiceModal();

  return (
    <div className="bg-card/20 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-foreground/70">{description}</p>
          </div>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span className="text-foreground/70">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-blue-500/5 text-blue-400">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-xl font-semibold">{price}</p>
            <Button 
              onClick={() => openModal({ title, description, features, price, tags, details })}
              className="w-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}