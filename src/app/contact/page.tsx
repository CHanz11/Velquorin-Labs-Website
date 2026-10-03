import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactCtaSection from "@/components/contact/ContactCtaSection";

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <ContactCtaSection />
    </main>
  );
}