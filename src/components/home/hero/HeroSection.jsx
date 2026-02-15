'use client';

import React from 'react';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { motion, useAnimationControls } from 'motion/react';
import Image from 'next/image';
import heroBg from '@/assets/images/hero-bg-img.jpg';
import RotateText from '@/components/rotateText/RotateText';
import glowBg from '@/assets/icons/bg-circle-icon.png';

export default function HeroSection() {
    const heroH1Control = useAnimationControls();
    const heroH1ControlDelay = useAnimationControls();
    const heroMiddleTextControl = useAnimationControls();
    const heroMiddleTextControlDelay = useAnimationControls();
    const heroLastMarquee = useAnimationControls();
    const heroH1ControlMarquee = useAnimationControls();
    const heroScrollAnimationBtn = useAnimationControls();

    const animateElements = [
        { control: heroH1Control, duration: 0.7 },
        { control: heroH1ControlMarquee, duration: 0.7 },
        { control: heroH1ControlDelay, duration: 0.7 },
        { control: heroMiddleTextControl, duration: 0.7 },
        { control: heroMiddleTextControlDelay, duration: 0.7 },
        { control: heroLastMarquee, duration: 0.7 },
        { control: heroScrollAnimationBtn, duration: 0.7 },
    ];

    useEffect(() => {
        const run = async () => {
            for (const element of animateElements) {
                await element.control.start({
                    x: 0,
                    opacity: 1,
                    transition: { duration: element.duration },
                });
            }
        };
        run();
    }, []);
    return (
        <section className="w-full relative">
            <Image
                src={heroBg}
                alt="hero background"
                draggable="false"
                fill
                priority
                className="object-cover -z-999 pointer-events-none"
            />

            <Image
                src={glowBg}
                alt="glow blob"
                draggable="false"
                className="hidden lg:block absolute top-0 right-0  pointer-events-none animate-pulse"
            />

            <div className="w-full h-[80vh] sm:h-screen max-w-360 mx-auto px-8 sm:px-16 pb-11 pt-36 lg:pt-30 flex flex-col items-center justify-center gap-7 sm:gap-10  xl:gap-20 relative">
                <motion.h1
                    initial={{
                        x: 100,
                        opacity: 0,
                    }}
                    animate={heroH1Control}
                    className="w-full tracking-[-2px] font-light text-3xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[150px] xl:leading-10 flex lg:flex-row items-center justify-between gap-4 md:gap-8 xl:gap-10 text-center"
                >
                    Creating
                    <motion.div
                        initial={{
                            x: 100,
                            opacity: 0,
                        }}
                        animate={heroH1ControlMarquee}
                        className="w-full max-w-60 sm:max-w-80 md:max-w-100 lg:max-w-110 xl:max-w-170 bg-custom-primary select-none lg:h-28 xl:h-40 rounded-full text-custom-black overflow-hidden flex flex-col justify-center"
                    >
                        <Marquee
                            direction="right"
                            loop={0}
                            speed={50}
                            autoFill
                            pauseOnHover
                            className="w-full h-full text-3xl sm:text-6xl md:text-6xl lg:text-[90px] xl:text-[140px] xl:leading-10 tracking-[-2px] font-light text-center"
                        >
                            <span className="mx-2 lg:mx-5">brands</span>
                        </Marquee>
                    </motion.div>
                </motion.h1>
                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0,
                    }}
                    animate={heroMiddleTextControl}
                    className="w-full flex items-center justify-between -mb-3"
                >
                    <h1 className="w-full text-3xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[150px] tracking-[-2px] font-light xl:leading-10 flex items-center gap-4 lg:gap-10 text-center -mt-16 sm:-mt-10 md:-mt-16 lg:-mt-10">
                        and digital
                    </h1>
                    <motion.p
                        initial={{
                            x: -100,
                            opacity: 0,
                        }}
                        animate={heroMiddleTextControlDelay}
                        className="text-custom-white/70 w-full md:max-w-56 lg:max-w-100 text-xs sm:text-sm md:text-lg xl:text-[22px] leading-4 md:leading-8 text-right lg:text-start -mt-4"
                    >
                        We design exceptional brands, products, web apps, mobile apps,websites for
                        startups and enterprises.
                    </motion.p>
                </motion.div>
                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0,
                    }}
                    animate={heroLastMarquee}
                    className="w-full flex flex-col lg:flex-row items-center justify-end gap-14 "
                >
                    <div className="flex items-center lg:gap-8 xl:gap-15">
                        <Marquee
                            loop={0}
                            speed={45}
                            autoFill
                            pauseOnHover
                            className="w-full max-w-60 sm:max-w-80 md:max-w-100 text-3xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[140px] xl:leading-10 tracking-[-2px] font-light text-center bg-custom-primary lg
                        lg:max-w-110 xl:max-w-170 select-none lg:h-28 xl:h-40 rounded-full text-custom-black  overflow-hidden"
                        >
                            <span className="mx-2 lg:mx-5">solutions</span>
                        </Marquee>
                    </div>
                    <motion.div
                        initial={{
                            x: 100,
                            opacity: 0,
                        }}
                        animate={heroScrollAnimationBtn}
                    >
                        <RotateText />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
