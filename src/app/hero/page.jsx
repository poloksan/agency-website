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
                <div className="lg:space-y-16 -mt-30">
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

                <Link
                    href={'/'}
                    className=" w-full max-w-50 h-15.5 flex items-center justify-center border-2 border-custom-black bg-custom-black rounded-full absolute bottom-0 right-0 hover:bg-transparent group"
                >
                    <div className="flex items-center lg:gap-4 lg:text-xl">
                        <button className="capitalize cursor-pointer text-custom-primary group-hover:text-custom-black">
                            read more
                        </button>
                        <span className="p-2 rounded-full group-hover:bg-custom-black -mr-3">
                            <MdOutlineArrowOutward className="text-custom-primary font-semibold leading-8 tracking-wide text-2xl" />
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
}
