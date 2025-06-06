import HeroSection from '@/components/sections/HeroSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import HallsSection from '@/components/sections/HallsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfollioSection from '@/components/sections/PortfollioSection';
import CommentsSection from '@/components/sections/CommentsSection';
export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutUsSection />
            <HallsSection />
            <ServicesSection />
            <PortfollioSection />
            <CommentsSection />
        </main>
    );
}
