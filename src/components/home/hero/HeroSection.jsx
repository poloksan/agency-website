'use client';

import React from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import heroBg from '@/assets/images/hero-bg-img.jpg';
import RotateText from '@/components/rotateText/RotateText';
import glowBg from '@/assets/icons/bg-circle-icon.png';

import Marquee from 'react-fast-marquee';
import { motion, useAnimationControls } from 'motion/react';

export default function HeroSection() {
    const heroH1Control = useAnimationControls();
    const heroH1ControlDelay = useAnimationControls();
    const heroMiddleTextControl = useAnimationControls();
    const heroMiddleTextControlDelay = useAnimationControls();
    const heroLastMarquee = useAnimationControls();
    const heroH1ControlMarquee = useAnimationControls();
    const heroScrollAnimationBtn = useAnimationControls();

    useEffect(() => {
        const run = async () => {
            await heroH1Control.start({
                x: 0,
                opacity: 1,
                transition: { duration: 1 },
            });
            await heroH1ControlMarquee.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0.7 },
            });
            await heroH1ControlDelay.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0.7 },
            });
            await heroMiddleTextControl.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0.7 },
            });
            await heroMiddleTextControlDelay.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0.7 },
            });
            await heroLastMarquee.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0.7 },
            });
            await heroScrollAnimationBtn.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0.7 },
            });
        };
        run();
    }, [
        heroH1Control,
        heroH1ControlDelay,
        heroMiddleTextControl,
        heroLastMarquee,
        heroH1ControlMarquee,
        heroScrollAnimationBtn,
        heroMiddleTextControlDelay,
    ]);
    return (
        <section className="w-full relative bg-linear-to-r from-custom-primary/20 via-custom-black to-custom-primary/20">
            {/* <Image
                src={heroBg}
                alt="hero background"
                draggable="false"
                fill
                priority
                className="object-cover -z-999 pointer-events-none"
            /> */}

            {/* <Image
                src={glowBg}
                alt="glow blob"
                draggable="false"
                className="hidden lg:block absolute top-1/2 right-1/2  pointer-events-none animate-pulse"
            /> */}

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[20px_20px] md:bg-size-[40px_40px]" />

            <div className="w-full h-[80vh] md:h-screen max-w-360 mx-auto px-8 sm:px-16 pb-11 pt-36 lg:pt-30 flex flex-col items-center justify-center gap-6 xl:gap-20 relative">
                <motion.h1
                    initial={{
                        x: 100,
                        opacity: 0,
                    }}
                    animate={heroH1Control}
                    className="w-full tracking-[-2px] font-light text-4xl md:text-7xl lg:text-[100px] xl:text-[150px] xl:leading-10 flex lg:flex-row items-center gap-4 md:gap-8 xl:gap-10 text-center"
                >
                    Creating
                    <motion.div
                        initial={{
                            x: 100,
                            opacity: 0,
                        }}
                        animate={heroH1ControlMarquee}
                    >
                        <Marquee
                            direction="right"
                            loop={0}
                            speed={50}
                            autoFill
                            pauseOnHover
                            className="w-full max-w-60 md:max-w-100 text-4xl md:text-6xl lg:text-[90px] xl:text-[140px] xl:leading-10 tracking-[-2px] font-light text-center bg-custom-primary lg:max-w-110 xl:max-w-170 select-none lg:h-28 xl:h-40 rounded-full text-custom-black overflow-hidden"
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
                    className="w-full flex items-center justify-between"
                >
                    <h1 className="w-full text-4xl md:text-7xl lg:text-[100px] xl:text-[150px] tracking-[-2px] font-light xl:leading-10 flex items-center gap-4 lg:gap-10 text-center -mt-16 sm:mt-0">
                        and digital
                    </h1>
                    <motion.p
                        initial={{
                            x: -100,
                            opacity: 0,
                        }}
                        animate={heroMiddleTextControlDelay}
                        className="text-custom-white/70 w-full md:max-w-56 lg:max-w-100 text-xs md:text-lg xl:text-[22px] leading-4 md:leading-8 text-right lg:text-start -mt-4"
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
                            className="w-full max-w-60 md:max-w-100 text-4xl md:text-7xl lg:text-[90px] xl:text-[140px] xl:leading-10 tracking-[-2px] font-light text-center bg-custom-primary lg
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
