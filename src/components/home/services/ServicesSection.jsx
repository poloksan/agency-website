'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import HeadingBorderText from '@/components/headingBorderText/HeadingBorderText';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: 'design', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'marketing', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'prototype', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'branding', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'branding', subTitle: 'Lorem ipsum dolor sit.' },
];

const container = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 1,
            staggerChildren: 0.6,
        },
    },
};

const item = {
    hidden: { y: 50, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6 },
    },
};

const animationScale = {
    hidden: { opacity: 0, scale: 0 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            scale: { type: 'spring', bounce: 0.5 },
        },
    },
};

export default function ServicesSection() {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const grid = gridRef.current;
        if (!section || !grid) return;

        const cards = grid.querySelectorAll('.gsap-scale-target');

        const ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                '(min-width: 768px)': function () {
                    const getScrollDistance = () => {
                        const totalWidth = grid.scrollWidth;
                        const windowWidth = window.innerWidth;
                        // prevent negative/invalid values
                        return Math.max(0, totalWidth - windowWidth + windowWidth * 0.1);
                    };

                    const dist = getScrollDistance();
                    // if no overflow, don't pin
                    if (!dist) {
                        gsap.set(grid, { x: 0 });
                        gsap.set(cards, { scale: 1 });
                        return;
                    }

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: 'top top',
                            end: () => `+=${getScrollDistance()}`,
                            pin: true,
                            pinSpacing: true, // important to keep next section from overlapping
                            scrub: 1,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                        },
                    });

                    tl.to(grid, {
                        x: () => -getScrollDistance(),
                        ease: 'none',
                    });

                    tl.to(
                        cards,
                        {
                            scale: 0.95,
                            stagger: { amount: 0.5, from: 'start' },
                            ease: 'power1.inOut',
                        },
                        '<',
                    );
                },

                '(max-width: 767px)': function () {
                    gsap.set(grid, { x: 0, clearProps: 'transform' });
                    gsap.set(cards, { scale: 1, clearProps: 'transform' });
                },
            });
        }, section);

        // refresh after layout is ready
        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);

    return (
        <motion.section
            ref={sectionRef}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            // FIX: remove h-[20vh]; give proper stacking + enough height for pinned area
            className="relative z-20 w-full max-w-360 mx-auto px-8 sm:px-16 py-20 min-h-screen overflow-hidden"
        >
            <div className="w-full flex flex-col items-center justify-center xl:gap-12">
                {/* heading */}
                <div className="w-full flex flex-col items-center space-y-5">
                    <HeadingBorderText text="services" />

                    <motion.div className="w-full flex flex-col md:flex-row items-center justify-center sm:justify-between text-center gap-5">
                        <motion.h1
                            variants={animationScale}
                            className="w-full max-w-130 text-4xl md:text-[40px] lg:text-7xl font-bold leading-12 lg:leading-20 tracking-tight text-center sm:text-start"
                        >
                            Transform Creative Design
                        </motion.h1>

                        <motion.p
                            variants={animationScale}
                            className="w-full max-w-80 lg:max-w-95 text-sm lg:text-xl text-custom-white/70 leading-5 lg:leading-8 text-center sm:text-end"
                        >
                            From branding to funding, we provide the tools & strategies startups
                            need to succeed in a competitive market.
                        </motion.p>
                    </motion.div>
                </div>

                {/* cards */}
                <div
                    ref={gridRef}
                    className="py-10 lg:py-20 -mt-20 flex flex-nowrap items-center gap-5 lg:gap-10 will-change-transform"
                >
                    {services.map((service, i) => (
                        <motion.div key={i} variants={item} className="relative">
                            {/* gsap scale target wrapper */}
                            <div className="gsap-scale-target relative group">
                                {/* under card */}
                                <div className="border-[0.5px] border-custom-primary/50 shadow-custom-primary shadow-[4px_4px_8px_-3px_rgba(201,243,29,0.4)] rounded-2xl w-80 h-80 lg:w-110 lg:h-110 relative">
                                    <div className="h-40 w-40 bg-custom-primary/50 rounded-full blur-[90px] absolute top-12 right-12 animate-pulse group-hover:hidden" />
                                    <div className="absolute bottom-10 left-10 space-y-3 lg:space-y-5 pointer-events-none uppercase">
                                        <h4 className="text-4xl lg:text-5xl font-semibold">
                                            {service.title}
                                        </h4>
                                        <h6 className="text-base lg:text-lg">{service.subTitle}</h6>
                                    </div>
                                </div>

                                {/* over card */}
                                <div className="w-full h-full rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-custom-black bg-custom-primary lg:opacity-0 lg:scale-0 origin-bottom-left group-hover:scale-100 group-hover:opacity-100 duration-600 transition-all">
                                    <div className="h-40 w-40 bg-custom-primary/50 rounded-full blur-[90px] absolute -top-12 -right-12 animate-pulse" />
                                    <div className="absolute top-7 right-9 md:top-10 md:right-10 space-y-3 md:space-y-5 pointer-events-none uppercase">
                                        <h4 className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
                                            {service.title}
                                        </h4>
                                        <h6 className="text-xs sm:text-sm lg:text-lg">
                                            {service.subTitle}
                                        </h6>
                                    </div>

                                    <Link
                                        href="/"
                                        className="border-2 px-4 py-1 md:px-6 md:py-2 text-xl font-medium rounded-xl absolute bottom-7 left-7 md:bottom-10 md:left-10 cursor-pointer hover:bg-custom-black hover:text-custom-primary hover:border-custom-black duration-300 inline-block"
                                    >
                                        Show More
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
