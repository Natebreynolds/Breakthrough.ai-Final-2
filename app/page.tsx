import HeroSection from "@/components/hero/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FrameworksSection from "@/components/sections/FrameworksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <FrameworksSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}