'use client';

import React, { useRef } from 'react';
import { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AboutImage from '@/components/aboutImage/AboutImage';

gsap.registerPlugin(ScrollTrigger);

const accordingData = [
    {
        title: "What's Our mission?",
        description:
            "How quick is quick? For most design, we're talking 2-3 business days. We balance speed with quality,ensuring you get top-north design swiftly.",
    },
    {
        title: 'Our Culture & Our Studio',
        description:
            "How quick is quick? For most design, we're talking 2-3 business days. We balance speed with quality,ensuring you get top-north design swiftly",
    },
];

export default function AboutPage() {
    const [bgAccording, setBgAccording] = useState(null);

    // Refs
    const leftImageRef = useRef(null);
    const rightTextRef = useRef(null);
    const mobileImageRef = useRef(null);
    const accordionWrapRef = useRef(null);
    const accordionItemsRef = useRef([]);

    const handleBgAccording = (index) =>
        setBgAccording((prevIndex) => (prevIndex === index ? null : index));

    useGSAP(() => {
        const scrollConfig = {
            start: '',
        };

        if (leftImageRef.current) {
            gsap.fromTo(
                leftImageRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: leftImageRef.current,
                        ...scrollConfig,
                    },
                },
            );
        }

        if (rightTextRef.current) {
            gsap.fromTo(
                rightTextRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: rightTextRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                },
            );
        }

        // 3️⃣ Mobile image
        if (mobileImageRef.current) {
            gsap.fromTo(
                mobileImageRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: mobileImageRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                },
            );
        }

        if (accordionItemsRef.current.length > 0) {
            gsap.fromTo(
                accordionItemsRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                    stagger: 0.3,
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: accordionWrapRef.current,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                    },
                },
            );
        }
    }, []);

    return (
        <section>
            <div className="w-full max-w-360 mx-auto px-8 sm:px-16 py-10 md:py-16 xl:py-20 flex flex-col lg:flex-row items-center justify-center lg:gap-12 xl:gap-24 relative">
                {/* left side — desktop image */}
                <div ref={leftImageRef} className="hidden lg:block w-full">
                    <AboutImage />
                </div>

                {/* right side */}
                <div className="w-full lg:mt-10 lg:max-w-100 xl:max-w-160 grid place-items-center">
                    {/*  heading */}
                    <div ref={rightTextRef}>
                        <ul className="list-disc pl-6">
                            <li className="text-base lg:text-xl tracking-wider text-custom-white/80">
                                Who we are?
                            </li>
                        </ul>
                        <h3 className="text-4xl lg:text-[40px] tracking-normal leading-9 lg:leading-12 font-normal text-custom-white mt-4">
                            Elevating brands globally with innovative strategies and visionary
                            design
                        </h3>
                    </div>

                    {/* mobile image */}
                    <div ref={mobileImageRef} className="lg:hidden mt-8">
                        <AboutImage />
                    </div>

                    {/* accordion wrapper */}
                    <div
                        ref={accordionWrapRef}
                        className="flex gap-3 flex-col w-full lg:max-w-130 mt-6 xl:mt-12"
                    >
                        {accordingData?.map((according, index) => (
                            <article
                                key={index}
                                ref={(el) => (accordionItemsRef.current[index] = el)}
                                className="w-full border-b border-custom-white/20 lg:mx-8 py-7 sm:py-8"
                            >
                                <div
                                    className="flex gap-2 cursor-pointer items-center justify-between w-full"
                                    onClick={() => handleBgAccording(index)}
                                >
                                    <h2 className="text-custom-white font-bold text-xl lg:text-2xl">
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
