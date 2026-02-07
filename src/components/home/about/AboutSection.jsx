'use client';

import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import aboutImg from '@/assets/images/about-img.png';
import arrowIcon from '@/assets/icons/arrow-icon.svg';
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
export default function AboutPage() {
    const [bgAccording, setBgAccording] = useState(null);

    const handleBgAccording = (index) =>
        setBgAccording((prevIndex) => (prevIndex === index ? null : index));
    return (
        <section className="w-full bg-custom-black">
            <div className="w-full max-w-360 mx-auto px-8 sm:px-16 py-10 xl:py-30 flex flex-col lg:flex-row items-start justify-center lg:gap-12 xl:gap-24 relative">
                {/* left side */}
                <div className="hidden lg:block">
                    <AboutImage />
                </div>

                {/* right side */}
                <div className="mt-10 lg:max-w-100 xl:max-w-160">
                    <ul className="list-disc pl-6">
                        <li className="text-base lg:text-xl tracking-wider text-custom-white/80">
                            Who we are?
                        </li>
                    </ul>
                    <h3 className="text-4xl lg:text-[40px] tracking-normal leading-9 lg:leading-12 font-normal text-custom-white mt-4">
                        Elevating brands globally with innovative strategies and visionary design
                    </h3>

                    <div className="lg:hidden mt-8">
                        <AboutImage />
                    </div>

                    <div className="flex gap-3 flex-col w-full max-w-130 lg:mt-12">
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
                    </div>
                </div>
            </div>
        </section>
    );
}
