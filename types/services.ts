export interface ServiceDetailSection {
  title: string;
  description: string;
  bullets?: string[];
}

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  ctaText?: string;
  ctaLink?: string;
  tags: string[];
  details: ServiceDetailSection[];
}