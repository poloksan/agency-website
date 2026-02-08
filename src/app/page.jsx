import CTA from '@/components/cta/CTA';
import AboutSection from '@/components/home/about/AboutSection';
import HeroSection from '@/components/home/hero/HeroSection';
import PortfolioSection from '@/components/home/portfolio/Portfolio';
import ServicesSection from '@/components/home/services/ServicesSection';
import TestimonialsSection from '@/components/home/testimonials/TestimonialsSection';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="overflow-hidden">
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <PortfolioSection />
            <TestimonialsSection />
            <CTA />
        </main>
    );
}
