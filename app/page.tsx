import { ApproachSection } from "@/components/sections/ApproachSection";
import { CapitalSection } from "@/components/sections/CapitalSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DealProfileSection } from "@/components/sections/DealProfileSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DealProfileSection />
      <StorySection />
      <CapitalSection />
      <ApproachSection />
      <ContactSection />
    </>
  );
}
