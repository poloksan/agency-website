'use client';

import React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import AboutImage from '@/components/aboutImage/AboutImage';

const accordingData = [
    {
        title: 'What’s Our mission?',
        description:
            'How quick is quick? For most design, we’re talking 2-3 business days. We balance speed with quality,ensuring you get top-north design swiftly.',
    },
    {
        title: 'Our Culture & Our Studio',
        description:
            'How quick is quick? For most design, we’re talking 2-3 business days. We balance speed with quality,ensuring you get top-north design swiftly',
    },
];

const container = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.3,
        },
    },
};

const item = {
    hidden: { y: 100, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

export default function AboutPage() {
    const [bgAccording, setBgAccording] = useState(null);

    const handleBgAccording = (index) =>
        setBgAccording((prevIndex) => (prevIndex === index ? null : index));
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: true,
                amount: 0.1,
            }}
        >
            <div className="w-full max-w-360 mx-auto px-8 sm:px-16 py-10 md:py-16 xl:py-20 flex flex-col lg:flex-row items-center justify-center lg:gap-12 xl:gap-24 relative">
                {/* left side */}
                <motion.div variants={item} className="hidden lg:block">
                    <AboutImage />
                </motion.div>

                {/* right side */}
                <motion.div className="w-full lg:mt-10 lg:max-w-100 xl:max-w-160 grid place-items-center">
                    <motion.div variants={item}>
                        <ul className="list-disc pl-6">
                            <li className="text-base lg:text-xl tracking-wider text-custom-white/80">
                                Who we are?
                            </li>
                        </ul>
                        <h3 className="text-4xl lg:text-[40px] tracking-normal leading-9 lg:leading-12 font-normal text-custom-white mt-4">
                            Elevating brands globally with innovative strategies and visionary
                            design
                        </h3>
                    </motion.div>

                    <motion.div variants={item} className="lg:hidden mt-8">
                        <AboutImage />
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="flex gap-3 flex-col w-full max-w-130 lg:mt-12"
                    >
                        {accordingData?.map((according, index) => (
                            <article
                                key={index}
                                className="border-b border-custom-white/20 lg:mx-8 py-8"
                            >
                                <div
                                    className={`flex gap-2 cursor-pointer items-center justify-between w-full  `}
                                    onClick={() => handleBgAccording(index)}
                                >
                                    <h2
                                        className={`text-custom-white font-bold text-xl lg:text-2xl`}
                                    >
                                        {according.title}
                                    </h2>
                                    <svg
                                        className="dark:fill-custom-white fill-custom-white shrink-0"
                                        width="16"
                                        height="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            y="7"
                                            width="16"
                                            height="2"
                                            rx="1"
                                            className={`transform origin-center transition duration-200 ease-out ${
                                                bgAccording === index && 'rotate-180'
                                            }`}
                                        />
                                        <rect
                                            y="7"
                                            width="16"
                                            height="2"
                                            rx="1"
                                            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                                bgAccording === index && 'rotate-180'
                                            }`}
                                        />
                                    </svg>
                                </div>
                                <div
                                    className={`grid transition-all duration-500 dark:bg-transparent overflow-hidden ease-in-out ${
                                        bgAccording === index
                                            ? 'grid-rows-[1fr] opacity-100 px-3 py-3'
                                            : 'grid-rows-[0fr] opacity-0 px-3'
                                    }`}
                                >
                                    <div className="text-custom-dark-gray text-sm lg:text-base overflow-hidden">
                                        {according.description}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
