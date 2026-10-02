import AboutHeroSection from "@/components/about/AboutHeroSection";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import WhatWeBuildSection from "@/components/about/WhatWeBuildSection";
import ApproachSection from "@/components/about/ApproachSection";
import AboutCtaSection from "@/components/about/AboutCtaSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <WhoWeAreSection />
      <WhatWeBuildSection />
      <ApproachSection />
      <AboutCtaSection />
    </main>
  );
}