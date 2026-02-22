'use client';

import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import heroBg from '@/assets/images/hero-bg-img.jpg';
import RotateText from '@/components/rotateText/RotateText';
import glowBg from '@/assets/icons/bg-circle-icon.png';
import gsap from 'gsap';

export default function HeroSection() {
    const heroH1Ref = useRef(null);
    const heroH1MarqueeRef = useRef(null);
    const heroMiddleTextRef = useRef(null);
    const heroMiddleTextDelayRef = useRef(null);
    const heroLastMarqueeRef = useRef(null);
    const heroScrollBtnRef = useRef(null);

    useEffect(() => {
        gsap.set(
            [
                heroH1Ref.current,
                heroH1MarqueeRef.current,
                heroMiddleTextRef.current,
                heroMiddleTextDelayRef.current,
                heroLastMarqueeRef.current,
                heroScrollBtnRef.current,
            ],
            { opacity: 0 },
        );

        const tl = gsap.timeline({ defaults: { opacity: 0, duration: 0.4 } });

        tl.fromTo(heroH1Ref.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1 })
            .fromTo(heroH1MarqueeRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1 })

            .fromTo(heroMiddleTextRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1 })

            .fromTo(heroMiddleTextDelayRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1 })

            .fromTo(heroLastMarqueeRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1 })

            .fromTo(heroScrollBtnRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1 });

        // cleanup
        return () => tl.kill();
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
                loading="eager"
                priority
                className="hidden lg:block absolute top-0 right-0 pointer-events-none animate-pulse"
            />

            <div className="w-full h-[80vh] sm:h-screen max-w-360 mx-auto px-8 sm:px-16 pb-11 pt-36 lg:pt-30 flex flex-col items-center justify-center gap-7 sm:gap-10 xl:gap-20 relative">
                {/* ── 1️⃣ "Creating" + brands marquee wrapper ── */}
                <h1
                    ref={heroH1Ref}
                    style={{ opacity: 0 }}
                    className="w-full tracking-[-2px] font-light text-3xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[150px] xl:leading-10 flex lg:flex-row items-center justify-between gap-4 md:gap-8 xl:gap-10 text-center"
                >
                    Creating
                    {/* ── 2️⃣ brands marquee ── */}
                    <div
                        ref={heroH1MarqueeRef}
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
                    </div>
                </h1>

                {/* ── 3️⃣ "and digital" + description ── */}
                <div
                    ref={heroMiddleTextRef}
                    style={{ opacity: 0 }}
                    className="w-full flex items-center justify-between -mb-3"
                >
                    <h1 className="w-full text-3xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[150px] tracking-[-2px] font-light xl:leading-10 flex items-center gap-4 lg:gap-10 text-center -mt-16 sm:-mt-10 md:-mt-16 lg:-mt-10">
                        and digital
                    </h1>

                    {/* ── 4️⃣ description paragraph ── */}
                    <p
                        ref={heroMiddleTextDelayRef}
                        style={{ opacity: 0 }}
                        className="text-custom-white/70 w-full md:max-w-56 lg:max-w-100 text-xs sm:text-sm md:text-lg xl:text-[22px] leading-4 md:leading-6 text-right lg:text-start -mt-4"
                    >
                        We design exceptional brands, products, web apps, mobile apps, websites for
                        startups and enterprises.
                    </p>
                </div>

                {/* ── 5️⃣ solutions marquee + scroll button ── */}
                <div
                    ref={heroLastMarqueeRef}
                    style={{ opacity: 0 }}
                    className="w-full flex flex-col lg:flex-row items-center justify-end gap-14"
                >
                    <div className="flex items-center lg:gap-8 xl:gap-15">
                        <Marquee
                            loop={0}
                            speed={45}
                            // style={{ opacity: 0 }}
                            autoFill
                            pauseOnHover
                            className="w-full max-w-60 sm:max-w-80 md:max-w-100 text-3xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[140px] xl:leading-10 tracking-[-2px] font-light text-center bg-custom-primary lg:max-w-110 xl:max-w-170 select-none lg:h-28 xl:h-40 rounded-full text-custom-black overflow-hidden"
                        >
                            <span className="mx-2 lg:mx-5">solutions</span>
                        </Marquee>
                    </div>

                    {/* ── 6️⃣ scroll button ── */}
                    <div ref={heroScrollBtnRef} style={{ opacity: 0 }}>
                        <RotateText />
                    </div>
                </div>
            </div>
        </section>
    );
}
