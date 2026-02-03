'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import learnMore from '@/assets/icons/learn-more-btn.png';
import corner from '@/assets/images/hero-big-corner-img.png';
import heroBigImg from '@/assets/images/hero-big-img.png';
import companyLogoOne from '@/assets/images/company-logo-one.png';
import companyLogoTwo from '@/assets/images/company-logo-two.png';
import companyLogoThree from '@/assets/images/company-logo-three.png';
import companyLogoFour from '@/assets/images/company-logo-four.png';

const companyLogos = [
    {
        id: 1,
        src: companyLogoOne,
        alt: 'company logo',
    },
    {
        id: 2,
        src: companyLogoTwo,
        alt: 'company logo',
    },
    {
        id: 3,
        src: companyLogoThree,
        alt: 'company logo',
    },
    {
        id: 4,
        src: companyLogoFour,
        alt: 'company logo',
    },
    {
        id: 5,
        src: companyLogoOne,
        alt: 'company logo',
    },
    {
        id: 6,
        src: companyLogoTwo,
        alt: 'company logo',
    },
];

export default function Hero() {
    return (
        <section className="w-full max-w-360 mx-auto px-8 sm:px-30 py-11">
            <div className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center lg:gap-20 bg-custom-primary rounded-4xl">
                <div className="lg:space-y-16">
                    <p className="mb-4 font-semibold text-2xl uppercase leading-6 tracking-wider text-custom-black">
                        Welcome <span className="">to</span>
                    </p>
                    <h1 className="font-bold text-[152px] leading-32 tracking-[1px] capitalize text-custom-black">
                        create design <span className="">agency</span>
                    </h1>
                    <p className="text-2xl w-full max-w-220 mx-auto text-custom-dark-gray">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab
                    </p>
                </div>

                <Link href={'/'}>
                    <motion.button
                        animate={{ rotate: 360 }}
                        transition={{
                            ease: 'linear',
                            duration: 8,
                            repeat: Infinity,
                        }}
                        type="button"
                        className="border-12 border-solid border-custom-black bg-custom-primary rounded-full cursor-pointer"
                    >
                        <Image
                            src={learnMore}
                            alt="learn more"
                            draggable="false"
                            width={120}
                            height={120}
                        />
                    </motion.button>
                </Link>
            </div>
        </section>
    );
}
