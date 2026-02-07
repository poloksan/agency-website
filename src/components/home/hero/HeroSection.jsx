'use client';

import React from 'react';
import Image from 'next/image';
import heroBg from '@/assets/images/hero-bg-img.jpg';
import RotateText from '@/components/rotateText/page';
import glowBg from '@/assets/icons/bg-circle-icon.png';

import Marquee from 'react-fast-marquee';

export default function HeroSection() {
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
                className="hidden lg:block absolute top-0 right-0 pointer-events-none animate-pulse"
            />

            <div className="w-full h-[80vh] md:h-screen max-w-360 mx-auto px-8 sm:px-16 pb-11 pt-36 lg:pt-30 flex flex-col items-center justify-center gap-6 xl:gap-12 relative">
                <h1 className="w-full tracking-[-2px] font-light text-4xl md:text-7xl lg:text-[100px] xl:text-[150px] xl:leading-10 flex lg:flex-row items-center gap-4 md:gap-8 xl:gap-10 text-center">
                    Creating
                    <Marquee
                        direction="right"
                        loop={0}
                        speed={50}
                        autoFill
                        pauseOnHover
                        className="w-full max-w-60 md:max-w-100 text-4xl md:text-6xl lg:text-[90px] xl:text-[140px] xl:leading-10 tracking-[-2px] font-light text-center bg-custom-primary lg:max-w-110 xl:max-w-170 select-none lg:h-28 xl:h-40 rounded-full text-custom-black  overflow-hidden"
                    >
                        <span className="mx-2 lg:mx-5">brands</span>
                    </Marquee>
                </h1>
                <div className="w-full flex items-center justify-between">
                    <h1 className="w-full text-4xl md:text-7xl lg:text-[100px] xl:text-[150px] tracking-[-2px] font-light xl:leading-10 flex items-center gap-4 lg:gap-10 text-center">
                        and digital
                    </h1>
                    <p className="text-custom-white/70 w-full md:max-w-56 lg:max-w-100 text-sm md:text-lg xl:text-[22px] leading-4 md:leading-5 text-right lg:text-start">
                        We design exceptional brands, products, web apps, mobile apps,websites for
                        startups aand enterprises.
                    </p>
                </div>

                <div className="w-full flex flex-col lg:flex-row items-center justify-end gap-14 ">
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
                    <div>
                        <RotateText />
                    </div>
                </div>
            </div>
        </section>
    );
}
