import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesOverviewSection from "@/components/services/ServicesOverviewSection";
import AiChatbotsSection from "@/components/services/AiChatbotsSection";
import AiAutomationSection from "@/components/services/AiAutomationSection";
import ConversationalFormsSection from "@/components/services/ConversationalFormsSection";
import WebSolutionsSection from "@/components/services/WebSolutionsSection";
import CustomSolutionsSection from "@/components/services/CustomSolutionsSection";
import ServicesCtaSection from "@/components/services/ServicesCtaSection";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <ServicesOverviewSection />
      <AiChatbotsSection />
      <AiAutomationSection />
      <ConversationalFormsSection />
      <WebSolutionsSection />
      <CustomSolutionsSection />
      <ServicesCtaSection />
    </main>
  );
}