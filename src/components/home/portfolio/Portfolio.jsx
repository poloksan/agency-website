'use client';
import React, { useRef } from 'react';
import { motion } from 'motion/react';

import { RiArrowRightDoubleFill } from 'react-icons/ri';
import HeadingBorderText from '@/components/headingBorderText/HeadingBorderText';
import workOne from '@/assets/images/work-one.png';
import workTwo from '@/assets/images/work-two.png';
import workThree from '@/assets/images/work-three.png';
import Image from 'next/image';
import Link from 'next/link';

const worksImgs = [
    {
        id: 1,
        src: workOne,
        title: 'Website Redesign',
        subTitle: 'design',
    },
    {
        id: 2,
        src: workTwo,
        title: 'brand identify',
        subTitle: 'branding',
    },
    {
        id: 3,
        src: workThree,
        title: 'development',
        subTitle: 'prototype',
    },
];

const container = {
    hidden: {},
    show: {
        delayChildren: 1,
        staggerChildren: 1,
    },
};

const item = {
    hidden: { scale: 0 },
    show: {
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export default function PortfolioSection() {
    const scrollRef = useRef(null);
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full "
        >
            <div className="w-full max-w-360 mx-auto px-8 py-10 flex flex-col items-start justify-center relative">
                <div className="text-center -z-999">
                    <HeadingBorderText text={'featured'} />

                    <motion.h2
                        variants={item}
                        className="uppercase text-[70px] md:text-[130px] lg:text-[192px] font-semibold tracking-tight lg:-mt-16 pointer-events-none"
                    >
                        works
                    </motion.h2>

                    <motion.h3
                        variants={item}
                        className="max-w-300 text-[40px] md:text-[80px] lg:text-[136px] font-bold tracking-normal leading-8 md:leading-15 lg:leading-24 text-custom-dark-gray uppercase -z-40"
                    >
                        from <br /> concept to creation
                    </motion.h3>
                </div>

                <div className="w-full flex flex-col items-center gap-16 z-999 lg:-mb-110">
                    {/* card 1 */}
                    {worksImgs.map((work, i) => {
                        const { id, title, subTitle, src } = work;
                        return (
                            <motion.div
                                key={i}
                                className={`w-full inline-block max-w-180 relative ${
                                    i === 0
                                        ? 'lg:left-22 xl:left-76'
                                        : i === 1
                                          ? 'lg:right-22 xl:right-76'
                                          : ''
                                } lg:bottom-100 object-cover overflow-hidden rounded-lg`}
                            >
                                <Link href={'/'}>
                                    {/* image scale */}
                                    <motion.div
                                        variants={{
                                            rest: { scale: 1 },
                                            hover: { scale: 1.1 },
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: 'easeInOut',
                                        }}
                                        className="rounded-lg"
                                    >
                                        <Image
                                            src={src}
                                            alt="portfolio work"
                                            className="object-cover bg-center bg-cover rounded-lg brightness-90"
                                        />
                                    </motion.div>

                                    {/* text wrapper (FIXED, no motion here) */}
                                    <div className="w-full text-center absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        {/* only title moves */}
                                        <motion.h2 className="relative h-10 md:h-12 overflow-hidden cursor-pointer">
                                            <motion.div
                                                variants={{
                                                    rest: { y: 0 },
                                                    hover: { y: 'calc(-3rem - 0.5rem)' },
                                                }}
                                                className="flex flex-col items-center lg:gap-2"
                                            >
                                                <span className="block h-12 leading-8 lg:leading-12 w-full text-center uppercase font-bold text-2xl lg:text-5xl tracking-[2px]">
                                                    {title}
                                                </span>

                                                <span className="block h-12 leading-8 lg:leading-12 w-full text-center uppercase font-bold text-2xl lg:text-5xl tracking-[2px]">
                                                    {title}
                                                </span>
                                            </motion.div>
                                        </motion.h2>

                                        {/* subtitle + view details stays fixed */}
                                        <div className="lg:mt-2 flex items-center justify-center gap-4 text-xs md:text-sm uppercase">
                                            <h6 className="bg-custom-black/80 px-4 py-1 font-bold rounded-full">
                                                {subTitle}
                                            </h6>
                                            <p className="flex items-center gap-2">
                                                View Details
                                                <RiArrowRightDoubleFill className="text-2xl text-custom-primary" />
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
}
