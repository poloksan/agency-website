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

//  Reusable viewport config
const vp = { once: true, amount: 0.3 };

//  Variants
const fadeUp = {
    hidden: { y: 80, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

const fadeLeft = {
    hidden: { x: -40, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const fadeRight = {
    hidden: { x: 40, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

// staggered list container — used only where we want stagger
const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

export default function About() {
    return (
        <>
            {/* ── No whileInView on the outer section — it's just a layout wrapper now ── */}
            <section className="relative">
                <div className="w-full max-w-360 mx-auto px-8 sm:px-16 pt-26 sm:pt-36 lg:pt-40">
                    {/* Heading */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={vp}
                        className="w-full flex flex-col items-center space-y-5 max-w-360 mx-auto lg:mb-8"
                    >
                        <PageHeading
                            bigText={'about us'}
                            smallText={'We transform your ideas into stunning visuals.'}
                        />
                    </motion.div>

                    {/* Story */}
                    <article className="flex flex-col xl:flex-row items-start lg:gap-5 xl:gap-30 mt-8 lg:mt-26">
                        <motion.header
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={vp}
                            className="uppercase shrink-0 w-30 h-6 lg:h-8 grid place-items-center bg-custom-primary rounded-full text-custom-black font-medium text-sm tracking-wide leading-none"
                        >
                            Our Story
                        </motion.header>

                        <div className="flex flex-col items-start gap-8 lg:gap-20">
                            <motion.h2
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={vp}
                                className="font-semibold text-2xl lg:text-[42px] leading-7 lg:leading-12 tracking-tight uppercase mt-3 lg:mt-0"
                            >
                                We help ambitious brands scale with customized marketing strategies.
                                by merging creative ideas, data—driven insights,
                            </motion.h2>

                            <div className="w-full flex flex-col lg:flex-row items-center sm:items-start xl:items-center gap-12 xl:gap-14 overflow-hidden">
                                <motion.figure
                                    variants={fadeLeft}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={vp}
                                    className="rounded-2xl overflow-hidden max-w-115 lg:h-115 shrink-0"
                                >
                                    <Image
                                        src={aboutPageImg}
                                        alt="about us image"
                                        loading="eager"
                                    />
                                </motion.figure>

                                <motion.aside
                                    variants={fadeRight}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={vp}
                                    className="w-full lg:max-w-[48%] flex flex-col items-start gap-5"
                                >
                                    <h3 className="uppercase font-semibold tracking-tight text-2xl lg:text-3xl">
                                        why choose stratum
                                    </h3>

                                    <p className="text-custom-white/70 text-sm sm:text-base leading-5 sm:leading-6">
                                        A curated selection of projects where strategy, creativity,
                                        and digital craftsmanship align. Every project reflects our
                                        commitment to thoughtful design, meaningful experiences, and
                                        measurable impact for modern brands. From innovative digital
                                        products and immersive websites to brand identities that
                                        tell a story.
                                    </p>

                                    {/* Choices list — staggered when it scrolls into view */}
                                    <motion.ul
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={vp}
                                        className="flex flex-col items-start gap-0.5 sm:gap-1"
                                    >
                                        {choices.map((choice, i) => (
                                            <motion.li
                                                key={i}
                                                variants={fadeUp}
                                                className="flex items-start sm:items-center gap-2 text-custom-white/70"
                                            >
                                                <IoCheckmarkCircle className="text-base sm:text-lg text-custom-primary" />
                                                <span className="text-sm sm:text-base">
                                                    {choice.text}
                                                </span>
                                            </motion.li>
                                        ))}
                                        <Link href={'/'}>
                                            <motion.button
                                                variants={fadeUp}
                                                viewport={vp}
                                                type="button"
                                                className="mt-4 bg-custom-dark-gray px-5 py-2 sm:px-7 sm:py-3 flex items-center gap-2 capitalize text-sm lg:text-base leading-7 tracking-wider rounded-xl border-2 border-custom-dark-gray cursor-pointer hover:bg-transparent duration-300 group transition-all"
                                            >
                                                get a demo
                                                <span>
                                                    <FiArrowUpRight className="text-xl font-bold group-hover:rotate-45 duration-300" />
                                                </span>
                                            </motion.button>
                                        </Link>
                                    </motion.ul>
                                </motion.aside>
                            </div>
                        </div>
                    </article>

                    {/* Counter numbers — staggered */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={vp}
                        className="mt-14 sm:mt-20 xl:my-26 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 justify-items-stretch"
                    >
                        {counterNumbers.map((num, i) => {
                            const { numberText, smallText } = num;
                            return (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={vp}
                                    className="bg-custom-white text-black w-50 h-30 md:w-60 md:h-40 lg:w-70 lg:h-50 rounded-xl text-center flex flex-col items-center justify-center xl:my-16"
                                >
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter">
                                        {numberText}
                                    </h1>
                                    <p className="capitalize text-sm lg:text-lg">{smallText}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Marquee */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={vp}
                        className="mt-14 sm:mt-20 xl:my-26  flex flex-col items-center gap-3"
                    >
                        <motion.h3
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={vp}
                            className="font-bold text-2xl md:text-3xl uppercase"
                        >
                            Trusted by <span className="text-custom-primary">100+</span> Leading
                            Enterprises
                        </motion.h3>

                        <Marquee
                            direction="right"
                            loop={0}
                            speed={50}
                            autoFill
                            pauseOnHover
                            className="flex items-center gap-4"
                        >
                            {[...images, ...images].map((img, i) => (
                                <Image key={i} src={img.src} alt={img.alt} draggable="false" />
                            ))}
                        </Marquee>
                    </motion.div>

                    {/* Mission / Vision */}
                    <div className="mt-14 sm:mt-20 xl:my-26 space-y-5 sm:space-y-0 lg:space-y-10">
                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={vp}
                            className="font-bold max-w-300 uppercase text-2xl lg:text-5xl tracking-wide leading-7 lg:leading-14"
                        >
                            &apos;&apos;An award-winning venture capital and investment firm based
                            in Los Angeles, established in 2015&apos;&apos;
                        </motion.h1>

                        {/* Staggered list */}
                        <motion.ul
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={vp}
                        >
                            {missionVision.map((item, i) => {
                                const { title, description } = item;
                                return (
                                    <motion.li
                                        key={i}
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={vp}
                                        className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 border-b py-4 md:py-8 border-custom-primary/60"
                                    >
                                        <h4 className="font-semibold text-xl lg:text-[26px] tracking-tight w-full max-w-40 lg:max-w-60 xl:max-w-90 uppercase shrink-0">
                                            {title}
                                        </h4>
                                        <p className="text-sm lg:text-base leading-5 md:leading-7 text-custom-white/70">
                                            {description}
                                        </p>
                                    </motion.li>
                                );
                            })}
                        </motion.ul>
                    </div>
                </div>
            </section>

            <TestimonialsSection />
        </>
    );
}
