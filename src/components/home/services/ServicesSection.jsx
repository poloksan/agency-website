'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import HeadingBorderText from '@/components/headingBorderText/HeadingBorderText';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: 'design', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'marketing', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'prototype', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'branding', subTitle: 'Lorem ipsum dolor sit.' },
];

export default function ServicesSection() {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const serviceCardsRef = useRef([]);

    useGSAP(() => {
        const section = containerRef.current;
        const card = cardRef.current;

        if (!section || !card) return;

        const mm = gsap.matchMedia();

        mm.add('(min-width: 1280px)', () => {
            gsap.to(card, {
                x: '-30%',
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    scroller: 'body',
                    start: 'top 10%',
                    end: 'bottom -80%',
                    scrub: 1,
                    pin: true,
                    markers: false,
                },
            });
        });

        mm.add('(min-width: 1024px) and (max-width: 1279px)', () => {
            gsap.to(card, {
                x: '-55%',
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    scroller: 'body',
                    start: 'top 10%',
                    end: 'bottom -80%',
                    scrub: 1,
                    pin: true,
                    markers: false,
                },
            });
        });

        gsap.fromTo(
            headingRef.current,
            { opacity: 0, scale: 0 },
            {
                opacity: 1,
                scale: 1,
                duration: 2.5,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            },
        );

        gsap.fromTo(
            paragraphRef.current,
            { opacity: 0, scale: 0 },
            {
                opacity: 1,
                scale: 1,
                duration: 2.5,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                    trigger: paragraphRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            },
        );

        return () => mm.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative z-20 w-full overflow-x-hidden py-12 md:py-16 lg:py-20"
        >
            <div className="w-full flex flex-col gap-8 px-4">
                {/* heading */}
                <div className="w-full flex flex-col items-center space-y-5 max-w-360 mx-auto sm:px-16">
                    <div className="w-full flex flex-col md:flex-row items-center justify-center sm:justify-between gap-5">
                        <h1
                            ref={headingRef}
                            className="w-full max-w-130 text-4xl md:text-[40px] lg:text-6xl xl:text-7xl font-bold leading-10 sm:leading-12 lg:leading-16 xl:leading-20 tracking-tight text-center md:text-start"
                        >
                            Transform Creative Design
                        </h1>

                        <p
                            ref={paragraphRef}
                            className="w-full max-w-80 lg:max-w-95 text-sm lg:text-xl text-custom-white/70 leading-5 lg:leading-8 text-center sm:text-center md:text-end"
                        >
                            From branding to funding, we provide the tools & strategies startups
                            need to succeed in a competitive market.
                        </p>
                    </div>
                </div>

                {/* cards */}
                <div
                    ref={cardRef}
                    className="max-w-360 mx-auto grid grid-cols-1 md:grid-cols-2 lg:flex gap-5 md:gap-8"
                >
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="relative"
                            ref={(el) => (serviceCardsRef.current[i] = el)}
                        >
                            {/* gsap scale target wrapper */}
                            <div className="gsap-scale-target relative group">
                                {/* under card */}
                                <div className="border-[0.5px] border-custom-primary/50 rounded-md w-70 h-70 sm:w-80 sm:h-80 lg:w-100 lg:h-100 relative">
                                    <div className="h-30 w-30 bg-custom-primary/50 rounded-full blur-[90px] absolute top-12 right-12 animate-pulse group-hover:hidden" />
                                    <div className="absolute bottom-8 left-8 space-y-3 lg:space-y-5 pointer-events-none uppercase">
                                        <h4 className="text-4xl lg:text-5xl font-semibold">
                                            {service.title}
                                        </h4>
                                        <h6 className="text-base lg:text-lg">{service.subTitle}</h6>
                                    </div>
                                </div>

                                {/* over card */}
                                <div className="w-full h-full rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-custom-black bg-custom-primary lg:opacity-0 lg:scale-0 origin-bottom-left group-hover:scale-100 group-hover:opacity-100 duration-600 transition-all overflow-hidden">
                                    <div className="h-30 w-30 bg-custom-primary/50 rounded-full blur-[90px] absolute -top-12 -right-12 animate-pulse" />
                                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 space-y-2 md:space-y-5 pointer-events-none uppercase">
                                        <h4 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                                            {service.title}
                                        </h4>
                                        <h6 className="text-xs sm:text-sm lg:text-lg">
                                            {service.subTitle}
                                        </h6>
                                    </div>

                                    <button>
                                        <Link
                                            href="/"
                                            className="border-2 px-4 py-1 md:px-6 md:py-2 text-base sm:text-lg lg:text-xl font-medium rounded-md absolute bottom-6 left-4 sm:bottom-7 sm:left-6 lg:bottom-8 lg:left-8 cursor-pointer hover:bg-custom-black hover:text-custom-primary hover:border-custom-black duration-300 inline-block"
                                        >
                                            SHOW MORE
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
