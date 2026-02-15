'use client';
import HeadingBorderText from '@/components/headingBorderText/HeadingBorderText';
import TestimonialsSection from '@/components/home/testimonials/TestimonialsSection';
import PageHeading from '@/components/pageHeading/PageHeading';
import Image from 'next/image';
import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { FiArrowUpRight } from 'react-icons/fi';
import aboutPageImg from '@/assets/images/about-page-img.png';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { motion } from 'motion/react';

import logoOne from '@/assets/images/about-logo-one.png';
import logoTwo from '@/assets/images/about-logo-two.png';
import logoThree from '@/assets/images/about-logo-three.png';
import logoFour from '@/assets/images/about-logo-four.png';
import logoFive from '@/assets/images/about-logo-five.png';

const missionVision = [
    {
        id: 1,
        title: 'our mission',
        description:
            'Our mission is to empower brands with innovative strategies, data-driven insights, and creative solutions that inspire audiences and deliver measurable growth. We focus on building strong digital foundations that help businesses scale with confidence.',
    },
    {
        id: 2,
        title: 'our vision',
        description:
            'Our vision is to become a trusted global investment partner by driving sustainable growth, fostering innovation, and helping ambitious brands unlock their full potential in a digital-first world.',
    },
    {
        id: 3,
        title: 'our awards',
        description:
            'We are proud to be recognized for excellence in venture capital and strategic investment, earning multiple industry awards for innovation, performance, and long-term value creation.',
    },
];

const images = [
    { src: logoOne, alt: 'upglab logo' },
    { src: logoTwo, alt: 'nutrilix logo' },
    { src: logoThree, alt: 'investify logo' },
    { src: logoFour, alt: 'ximora logo' },
    { src: logoFive, alt: 'knewish' },
];

const choices = [
    { id: 1, text: 'An award-winning venture capital' },
    { id: 2, text: 'Los Angeles, founded in 2015' },
    { id: 3, text: 'Professional creativity. Simplified.' },
    { id: 4, text: 'Unlock pro-level creativity—without the complexity.' },
    { id: 5, text: 'Where pro-level creativity meets simplicity.' },
    { id: 6, text: 'We help ambitious brands scale' },
];

const counterNumbers = [
    { numberText: '90M', smallText: 'Client satisfaction' },
    { numberText: '180+', smallText: 'Projects Completed' },
    { numberText: '250K', smallText: 'Audience reached' },
    { numberText: '15+', smallText: 'Years of Completed' },
];

const containerSection = {
    hidden: {},
    show: {
        delayChildren: 1,
        staggerChildren: 0.3,
    },
};

const animateElement = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function About() {
    return (
        <>
            <section className="relative z-20 w-full overflow-x-hidden pt-26 lg:pt-30">
                <div className="w-full max-w-360 mx-auto px-4 sm:px-16">
                    {/* heading */}
                    <div className="w-full flex flex-col items-center space-y-5 max-w-360 mx-auto lg:mb-8">
                        <PageHeading
                            bigText={'about us'}
                            smallText={'We transform your ideas into stunning visuals.'}
                        />
                    </div>
                    {/* story */}
                    <article className="flex flex-col lg:flex-row items-start lg:gap-30">
                        <header className="uppercase lg:w-60 lg:h-8 grid place-items-center bg-custom-primary rounded-full text-custom-black font-medium text-sm tracking-wide leading-none">
                            Our Story
                        </header>

                        <div className="flex flex-col items-start lg:gap-10">
                            <h2 className="font-semibold lg:text-[42px] leading-12 tracking-tight uppercase">
                                We help ambitious brands scale with customized marketing strategies.
                                by merging creative ideas, data—driven insights,
                            </h2>

                            <div className="flex items-center gap-5">
                                <figure className="rounded-2xl overflow-hidden">
                                    <Image
                                        src={aboutPageImg}
                                        alt="about us image"
                                        width={420}
                                        height={420}
                                    />
                                </figure>

                                <aside className="max-w-[58%] flex flex-col items-start gap-4">
                                    <h3 className="uppercase font-semibold tracking-tight text-3xl">
                                        why choose stratum
                                    </h3>

                                    <p className="text-custom-white/70 text-sm sm:text-base leading-6">
                                        A curated selection of projects where strategy, creativity,
                                        and digital craftsmanship align. Every project reflects our
                                        commitment to thoughtful design, meaningful experiences, and
                                        measurable impact for modern brands. From innovative digital
                                        products and immersive websites to brand identities that
                                        tell a story.
                                    </p>

                                    <ul className="flex flex-col items-start gap-1">
                                        {choices.map((choice, i) => {
                                            return (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-2 text-custom-white/70"
                                                >
                                                    <IoCheckmarkCircle className="text-lg text-custom-primary" />
                                                    <span className="text-sm sm:text-base">
                                                        {choice.text}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <Link href={'/'}>
                                        <button
                                            type="button"
                                            className="bg-custom-dark-gray px-7 py-3 flex items-center gap-2 capitalize lg:text-base leading-7 tracking-wider rounded-xl border-2 border-custom-dark-gray cursor-pointer hover:bg-transparent duration-300 group transition-all"
                                        >
                                            get a demo
                                            <span>
                                                <FiArrowUpRight className="text-xl font-bold group-hover:rotate-45 duration-300" />
                                            </span>
                                        </button>
                                    </Link>
                                </aside>
                            </div>
                        </div>
                    </article>

                    {/* numbers */}
                    <div className="lg:mt-20 flex flex-col lg:flex-row items-center justify-between gap-5">
                        {counterNumbers.map((num, i) => {
                            const { numberText, smallText } = num;
                            return (
                                <div
                                    key={i}
                                    className="inline-block bg-custom-white text-black lg:px-16 lg:py-12 rounded-xl text-center"
                                >
                                    <h1 className="text-7xl font-bold tracking-tighter">
                                        {numberText}
                                    </h1>
                                    <p className="capitalize lg:text-lg">{smallText}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-20 flex flex-col items-center gap-5">
                        <h3 className="font-bold text-3xl uppercase">
                            Trusted by <span className="text-custom-primary">100+</span> Leading
                            Enterprises
                        </h3>

                        <Marquee
                            direction="right"
                            loop={0}
                            speed={50}
                            autoFill
                            pauseOnHover
                            className="flex items-center gap-4"
                        >
                            {[...images, ...images].map((img, i) => {
                                return (
                                    <Image key={i} src={img.src} alt={img.alt} draggable="false" />
                                );
                            })}
                        </Marquee>
                    </div>

                    <div className="lg:mt-20 lg:space-y-10">
                        <h1 className="font-bold max-w-300 uppercase lg:text-5xl tracking-wide lg:leading-14">
                            An award-winning venture capital and investment firm based in Los
                            Angeles, established in 2015
                        </h1>

                        <ul>
                            {missionVision.map((item, i) => {
                                const { title, description } = item;
                                return (
                                    <li
                                        key={i}
                                        className="flex items-center border-b py-8 border-custom-primary/60"
                                    >
                                        <h4 className="font-semibold lg:text-[26px] tracking-tight w-full max-w-90 uppercase">
                                            {title}
                                        </h4>
                                        <p className="text-base leading-7 text-custom-white/70">
                                            {description}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            <TestimonialsSection />
        </>
    );
}
