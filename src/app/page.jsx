import Image from 'next/image';
import Hero from './hero/page';
import ServicesSection from './services/page';
import AboutSection from './about/page';
import PortfolioSection from './portfolio/page';
import TestimonialsSection from './testimonials/page';

export default function Home() {
    return (
        <main>
            <Hero />
            <ServicesSection />
            <AboutSection />
            <PortfolioSection />
            <TestimonialsSection />
        </main>
    );
}
