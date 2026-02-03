'use client';

import React from 'react';
import Image from 'next/image';
import heroBg from '@/assets/images/hero-bg-img.jpg';
import RotateText from '@/components/rotateText/page';
import glowBg from '@/assets/icons/bg-circle-icon.png';

import Marquee from 'react-fast-marquee';

export default function Hero() {
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
                className="absolute top-0 right-0 pointer-events-none animate-pulse"
            />

            <div className="w-full h-screen max-w-360 mx-auto px-8 sm:px-16 pb-11 pt-30 flex flex-col items-center justify-center xl:gap-12 relative">
                <h1 className="w-full tracking-[-2px] font-light lg:text-[100px] xl:text-[150px] xl:leading-10 flex items-center lg:gap-8 xl:gap-10 text-center">
                    Creating
                    <Marquee className="lg:text-[90px] xl:text-[140px] bg-custom-primary w-full lg:max-w-110 xl:max-w-170 select-none lg:h-28 xl:h-40 rounded-full text-custom-black flex items-center gap-10 overflow-hidden">
                        brands brands
                    </Marquee>
                </h1>
                <div className="w-full flex items-center justify-between">
                    <h1 className="w-full lg:text-[100px] xl:text-[150px] tracking-[-2px] font-light xl:leading-10 flex items-center gap-10 text-center">
                        and digital
                    </h1>
                    <p className="w-full max-w-100 text-lg xl:text-[22px]">
                        We design exceptional brands, products, web apps, mobile apps,websites for
                        startups aand enterprises.
                    </p>
                </div>

                <div className="w-full flex items-center justify-end gap-14 ">
                    <div className="flex items-center lg:gap-8 xl:gap-15">
                        <Marquee
                            className="w-full lg:text-[90px] xl:text-[140px] xl:leading-10 tracking-[-2px] font-light text-center bg-custom-primary lg
                        max-w-110 xl:max-w-170 select-none lg:h-28 xl:h-40 rounded-full text-custom-black  overflow-hidden"
                        >
                            solutions solutions
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
