'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import HeadingBorderText from '@/components/headingBorderText/HeadingBorderText';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import PageHeading from '@/components/pageHeading/PageHeading';

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: 'design', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'marketing', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'prototype', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'branding', subTitle: 'Lorem ipsum dolor sit.' },
];

const container = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.6,
        },
    },
};

const item = {
    hidden: { y: 50, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.3 },
    },
};

const animationScale = {
    hidden: { opacity: 0, scale: 0 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            scale: { type: 'spring', bounce: 0.5, duration: 2.5 },
        },
    },
};

export default function ServicesSection() {
    // const containerRef = useRef(null);
    // const cardRef = useRef(null);

    // useGSAP(() => {
    //     const section = containerRef.current;
    //     const card = cardRef.current;
    //     if (!section || !card) return;
    //     const mm = gsap.matchMedia();
    //     mm.add('(min-width: 1024px)', () => {
    //         gsap.to(card, {
    //             transform: 'translateX(-30%)',
    //             scrollTrigger: {
    //                 trigger: section,
    //                 scroll: 'body',
    //                 start: 'top 5%',
    //                 end: 'bottom -100%',
    //                 scrub: 1,
    //                 pin: true,
    //             },
    //         });
    //     });

    //     return () => mm.revert();
    // });

    return (
        <motion.section
            // ref={containerRef}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-20 w-full overflow-x-hidden px-4 py-26"
        >
            <div className="w-full flex flex-col gap-8 max-w-360 mx-auto sm:px-16">
                {/* heading */}
                <div className="w-full flex flex-col items-center space-y-5 ">
                    <PageHeading
                        bigText={'services'}
                        smallText={'WE offer innovative solutions that captivate customers.'}
                    />
                </div>

                {/* cards */}
                <div
                    // ref={cardRef}
                    className="grid grid-cols-1 xl:grid-cols-2 justify-center gap-10 lg:gap-20 lg:mt-12"
                >
                    {services.map((service, i) => (
                        <div key={i} className="relative flex flex-col items-center">
                            <div className="gsap-scale-target group">
                                <Link href={'/'} className="inline-block relative">
                                    {/* under card */}
                                    <div className="border-[0.5px] border-custom-primary/50 w-65 h-80 lg:w-140 lg:h-100 relative">
                                        {/* <div className="h-30 w-30 bg-custom-primary/50 rounded-full blur-[90px] absolute top-12 right-12 animate-pulse group-hover:hidden" /> */}
                                        <div className="absolute bottom-8 left-8 space-y-3 lg:space-y-5 pointer-events-none uppercase">
                                            <h4 className="text-4xl lg:text-5xl font-semibold">
                                                {service.title}
                                            </h4>
                                            <h6 className="text-base lg:text-lg">
                                                {service.subTitle}
                                            </h6>
                                        </div>
                                    </div>

                                    {/* over card */}
                                    <div className="w-65 h-80 lg:w-160 lg:h-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-custom-black bg-custom-primary lg:opacity-0 lg:scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all">
                                        <div className="h-30 w-30 bg-custom-primary/50 rounded-full blur-[90px] absolute -top-12 -right-12 animate-pulse" />
                                        <div className="absolute top-1/2 left-4 sm:left-6 lg:top-1/3 lg:left-10 space-y-2 md:space-y-5 pointer-events-none uppercase">
                                            <h4 className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
                                                {service.title}
                                            </h4>
                                            <h6 className="text-xs sm:text-sm lg:text-xl">
                                                {service.subTitle}
                                            </h6>
                                        </div>

                                        {/* <button>
                                        <Link
                                            href="/"
                                            className="border-2 px-4 py-1 md:px-6 md:py-2 text-base sm:text-lg lg:text-xl font-medium rounded-xl absolute bottom-6 left-4 sm:bottom-7 sm:left-6 lg:bottom-8 lg:left-8 cursor-pointer hover:bg-custom-black hover:text-custom-primary hover:border-custom-black duration-300 inline-block"
                                        >
                                            SHOW MORE
                                        </Link>
                                    </button> */}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
