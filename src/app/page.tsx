import HeroSection from "@/components/home/HeroSection";
import ValueSection from "@/components/home/ValueSection";
import ServicesSection from "@/components/home/ServicesSection";
import ShashaSection from "@/components/home/ShashaSection";
import ProcessSection from "@/components/home/ProcessSection";
import WhyVelquorinSection from "@/components/home/WhyVelquorinSection";
import ConnectedExperienceSection from "@/components/home/ConnectedExperienceSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ValueSection />
      <ServicesSection />
      <ShashaSection />
      <ProcessSection />
      <WhyVelquorinSection />
      <ConnectedExperienceSection />
      <FinalCtaSection />
    </main>
  );
}