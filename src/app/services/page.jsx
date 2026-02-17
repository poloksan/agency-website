'use client';

import React from 'react';
import Link from 'next/link';
import HeadingBorderText from '@/components/headingBorderText/HeadingBorderText';
import { motion } from 'framer-motion';
import PageHeading from '@/components/pageHeading/PageHeading';

const services = [
    { title: 'design', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'marketing', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'prototype', subTitle: 'Lorem ipsum dolor sit.' },
    { title: 'branding', subTitle: 'Lorem ipsum dolor sit.' },
];

const vp = { once: true, amount: 0.3 };

const fadeUp = {
    hidden: { y: 80, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

export default function ServicesSection() {
    return (
        <section className="relative z-20 w-full overflow-x-hidden">
            <div className="w-full flex flex-col gap-8 max-w-360 mx-auto px-4 py-26 sm:py-36 sm:px-16 lg:py-40">
                {/* heading */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={vp}
                    className="w-full flex flex-col items-center space-y-5"
                >
                    <PageHeading
                        bigText={'services'}
                        smallText={'WE offer innovative solutions that captivate customers.'}
                    />
                </motion.div>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 justify-center gap-10 lg:gap-20 lg:mt-12">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={vp}
                            className="relative flex flex-col items-center"
                        >
                            <div className="gsap-scale-target group">
                                <Link href={'/'} className="inline-block relative">
                                    {/* under card */}
                                    <div className="border-[0.5px] border-custom-primary/50 w-65 h-80 lg:w-140 lg:h-100 relative">
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
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
