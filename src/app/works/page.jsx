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
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeading from '@/components/pageHeading/PageHeading';

gsap.registerPlugin(ScrollTrigger);

const worksImgs = [
    { id: 1, src: workOne, title: 'Website Redesign', subTitle: 'design' },
    { id: 2, src: workTwo, title: 'brand identify', subTitle: 'branding' },
    { id: 3, src: workThree, title: 'development', subTitle: 'prototype' },
];

const container = {
    hidden: {},
    show: { transition: { delayChildren: 0.1, staggerChildren: 0.6 } },
};

const item = {
    hidden: { scale: 0, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { scale: { type: 'spring', bounce: 0.5, duration: 2.5 } },
    },
};

export default function PortfolioSection() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const section = sectionRef.current;
        const text = textRef.current;
        const cards = gsap.utils.toArray('.project-card');

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: text,
                start: 'top 20%',
                end: () => {
                    const lastCard = cards[cards.length - 1];
                    const lastCardBottom = lastCard.getBoundingClientRect().bottom + window.scrollY;
                    const textTop = text.getBoundingClientRect().top + window.scrollY;
                    return `+=${lastCardBottom - textTop - 200}`;
                },
                pin: true,
            });

            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    {
                        rotateX: 75,
                        rotateY: 75,
                        y: 150,
                        scale: 0.9,
                    },
                    {
                        rotateX: 0,
                        rotateY: 0,
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 95%',
                            end: 'top 60%',
                            scrub: 1,
                            toggleActions: 'play reverse play reverse',
                        },
                    },
                );
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <motion.section
            ref={sectionRef}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full max-w-360 mx-auto px-8 sm:px-16 py-26 lg:py-36"
        >
            <div className="flex flex-col items-center gap-4">
                <PageHeading bigText={'works'} smallText={'we drive engagement & get results.'} />
            </div>
            <div className="w-full flex flex-col items-start justify-center relative">
                {/* heading text */}
                <div ref={textRef} className="w-full max-w-300 mx-auto text-center -z-999 ">
                    <motion.h3
                        variants={item}
                        className="text-center text-[40px] md:text-[80px] lg:text-[120px] xl:text-[136px] font-bold tracking-normal leading-8 md:leading-15 lg:leading-22 xl:leading-24 text-custom-dark-gray uppercase -z-40"
                    >
                        from <br /> concept to creation
                    </motion.h3>
                </div>

                <div
                    ref={containerRef}
                    className="w-full flex flex-col items-center gap-10 lg:gap-24 z-999 "
                >
                    {worksImgs.map((work, i) => {
                        const { title, subTitle, src } = work;

                        return (
                            <motion.div
                                key={work.id}
                                initial="rest"
                                animate="rest"
                                whileHover="hover"
                                className={`project-card max-w-160 lg:h-160 relative ${
                                    i === 0
                                        ? 'lg:left-22 xl:left-65'
                                        : i === 1
                                          ? 'lg:right-22 xl:right-65'
                                          : ''
                                } object-cover overflow-hidden rounded-lg`}
                            >
                                <Link href={'/'}>
                                    <motion.div
                                        variants={{ rest: { scale: 1 }, hover: { scale: 1.1 } }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                        className="rounded-lg w-full h-full"
                                    >
                                        <Image
                                            src={src}
                                            loading="eager"
                                            alt="portfolio work"
                                            className="object-cover bg-center bg-cover rounded-lg brightness-90 w-full h-full"
                                        />
                                    </motion.div>

                                    <div className="w-full text-center absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <motion.h2 className="relative h-10 md:h-12 overflow-hidden cursor-pointer">
                                            <motion.div
                                                variants={{
                                                    rest: { y: 0 },
                                                    hover: { y: 'calc(-3rem - 0.5rem)' },
                                                }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
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
