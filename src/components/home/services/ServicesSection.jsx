'use client';
import React, { useMemo } from 'react';
import Link from 'next/link';
import HeadingBorderText from '@/components/headingBorderText/HeadingBorderText';
import Marquee from 'react-fast-marquee';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';

const services = [
    { title: 'design', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'marketing', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'prototype', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'branding', subTitle: 'Lorem ipsum dolor sit.' },
];

export default function ServicesSection() {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = useMemo(
        () => ({
            hidden: {},
            show: {
                transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.15,
                },
            },
        }),
        [shouldReduceMotion],
    );

    const fadeInXVariants = useMemo(
        () => ({
            hidden: (direction) => ({
                opacity: 0,
                x: shouldReduceMotion ? 0 : direction * 80,
            }),
            show: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: shouldReduceMotion ? 0 : 1,
                    ease: 'easeOut',
                },
            },
        }),
        [shouldReduceMotion],
    );

    return (
        <section className="w-full overflow-hidden">
            <div className="w-full flex flex-col items-center justify-center xl:gap-12 relative">
                {/* heading */}
                <div className="w-full max-w-360 mx-auto px-8 sm:px-16 py-20 flex flex-col items-center space-y-5">
                    <HeadingBorderText text="services" />

                    <LazyMotion features={domAnimation}>
                        <m.div
                            className="w-full flex flex-col md:flex-row items-center justify-center sm:justify-between text-center gap-5"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 'all' }}
                        >
                            <m.h1
                                custom={-1}
                                variants={fadeInXVariants}
                                className="w-full max-w-120 text-5xl md:text-[40px] lg:text-7xl font-bold leading-12 lg:leading-20 tracking-tight text-center sm:text-start"
                            >
                                Lorem ipsum dolor sit.
                            </m.h1>

                            <m.p
                                custom={1}
                                variants={fadeInXVariants}
                                className="w-full max-w-80 lg:max-w-95 text-sm lg:text-xl text-custom-white/70 leading-5 lg:leading-8 text-center sm:text-end"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas
                                exercitationem quaerat esse, iusto dignissimos nihil eaque id minima
                                accusamus!
                            </m.p>
                        </m.div>
                    </LazyMotion>
                </div>

                {/* marquee */}
                <Marquee
                    autoFill
                    direction="right"
                    loop={0}
                    speed={70}
                    className="py-10 lg:py-20 -mt-20 flex items-center overflow-visible"
                >
                    {services.map((service, i) => (
                        <div key={i} className="mx-5 lg:mx-10">
                            <div className="relative group">
                                {/* under card */}
                                <div className="border-[0.5px] rounded-3xl w-80 h-80 lg:w-110 lg:h-110 relative">
                                    <div className="h-40 w-40 bg-custom-primary/30 rounded-full blur-[90px] absolute top-10 right-10 animate-pulse" />

                                    <div className="absolute bottom-10 left-10 space-y-3 lg:space-y-5 pointer-events-none">
                                        <h4 className="text-5xl lg:text-7xl font-semibold capitalize">
                                            {service.title}
                                        </h4>
                                        <h6 className="text-base lg:text-lg uppercase">
                                            {service.subTitle}
                                        </h6>
                                    </div>
                                </div>

                                {/* over card */}
                                <div className="w-full h-full rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-custom-black bg-custom-primary lg:opacity-0 lg:scale-0 origin-bottom-left group-hover:scale-100 group-hover:opacity-100 duration-600 transition-all">
                                    <div className="absolute top-7 right-9 md:top-10 md:right-10 space-y-3 md:space-y-5 pointer-events-none">
                                        <h4 className="text-5xl lg:text-7xl font-semibold capitalize">
                                            {service.title}
                                        </h4>
                                        <h6 className="text-sm lg:text-lg uppercase">
                                            {service.subTitle}
                                        </h6>
                                    </div>

                                    <Link
                                        href="/"
                                        className="border-2 px-4 py-1 md:px-6 md:py-2 text-2xl font-medium rounded-xl absolute bottom-7 left-7 md:bottom-10 md:left-10 cursor-pointer hover:bg-custom-black hover:text-custom-white hover:border-custom-black duration-300 inline-block"
                                    >
                                        Show More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
