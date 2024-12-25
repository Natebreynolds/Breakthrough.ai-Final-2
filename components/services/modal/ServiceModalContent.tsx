"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceType } from "@/types/services";

interface ServiceModalContentProps {
  service: ServiceType;
}

export default function ServiceModalContent({ service }: ServiceModalContentProps) {
  return (
    <div className="space-y-8">
      {/* Description */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Overview</h3>
        <p className="text-foreground/70">{service.description}</p>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-blue-500/10 text-blue-400">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Key Features</h3>
        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
              <span className="text-foreground/70">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Detailed Sections */}
      {service.details.map((section, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
          <p className="text-foreground/70 mb-4">{section.description}</p>
          {section.bullets && (
            <ul className="space-y-3">
              {section.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span className="text-foreground/70">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}