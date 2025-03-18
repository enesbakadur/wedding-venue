import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import HallsSection from "@/components/sections/HallsSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <HallsSection />
      <ServicesSection />
    </main>
  );
}
