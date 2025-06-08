import { useEffect } from "react";
import ModernBackground from "@/components/modern-background";
import HeroSection from "@/components/hero-section";
import SocialLinksSection from "@/components/social-links-section";

export default function Portfolio() {
  useEffect(() => {
    // Set page title
    document.title = "Ayush - Developer & Creator | Portfolio";
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ModernBackground />
      
      <main className="relative z-20">
        <HeroSection />
        <SocialLinksSection />
      </main>
    </div>
  );
}
