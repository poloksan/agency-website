'use client';
import HeadingBorderText from '@/components/headingBorderText/HeadingBorderText';
import TestimonialsSection from '@/components/home/testimonials/TestimonialsSection';
import PageHeading from '@/components/pageHeading/PageHeading';
import Image from 'next/image';
import React, { useRef } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { FiArrowUpRight } from 'react-icons/fi';
import aboutPageImg from '@/assets/images/about-page-img.png';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import logoOne from '@/assets/images/about-logo-one.png';
import logoTwo from '@/assets/images/about-logo-two.png';
import logoThree from '@/assets/images/about-logo-three.png';
import logoFour from '@/assets/images/about-logo-four.png';
import logoFive from '@/assets/images/about-logo-five.png';

gsap.registerPlugin(ScrollTrigger);

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

// shared scrollTrigger config — viewport once:true, amount:0.3
const scrollCfg = (trigger) => ({
    trigger,
    start: 'top 80%',
    toggleActions: 'play none none none',
});

export default function About() {
    const sectionRef = useRef(null);

    // ── refs ──
    const headingWrapRef = useRef(null);
    const storyBadgeRef = useRef(null);
    const storyH2Ref = useRef(null);
    const figureRef = useRef(null);
    const asideRef = useRef(null);
    const choiceItemRefs = useRef([]);
    const choiceBtnRef = useRef(null);
    const counterItemRefs = useRef([]);
    const marqueeWrapRef = useRef(null);
    const marqueeHeadingRef = useRef(null);
    const missionHeadingRef = useRef(null);
    const missionItemRefs = useRef([]);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // ─────────────────────────────────────────
            // 1️⃣ PageHeading wrapper — fadeUp
            //    y:80, opacity:0 → y:0, opacity:1, duration:0.8
            // ─────────────────────────────────────────
            gsap.fromTo(
                headingWrapRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: scrollCfg(headingWrapRef.current),
                },
            );

            // ─────────────────────────────────────────
            // 2️⃣ "Our Story" badge — fadeUp
            // ─────────────────────────────────────────
            gsap.fromTo(
                storyBadgeRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: scrollCfg(storyBadgeRef.current),
                },
            );

            // ─────────────────────────────────────────
            // 3️⃣ Story h2 — fadeUp
            // ─────────────────────────────────────────
            gsap.fromTo(
                storyH2Ref.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: scrollCfg(storyH2Ref.current),
                },
            );

            // ─────────────────────────────────────────
            // 4️⃣ Figure image — fadeLeft
            //    x:-40, opacity:0 → x:0, opacity:1
            // ─────────────────────────────────────────
            gsap.fromTo(
                figureRef.current,
                { x: -80, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: scrollCfg(figureRef.current),
                },
            );

            // ─────────────────────────────────────────
            // 5️⃣ Aside (why choose) — fadeRight
            //    x:40, opacity:0 → x:0, opacity:1
            // ─────────────────────────────────────────
            gsap.fromTo(
                asideRef.current,
                { x: 80, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: scrollCfg(asideRef.current),
                },
            );

            // ─────────────────────────────────────────
            // 6️⃣ Choices list — stagger fadeUp
            //    staggerChildren:0.15
            // ─────────────────────────────────────────
            gsap.fromTo(
                [...choiceItemRefs.current, choiceBtnRef.current].filter(Boolean),
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: 0.15,
                    scrollTrigger: scrollCfg(choiceItemRefs.current[0]),
                },
            );

            // ─────────────────────────────────────────
            // 7️⃣ Counter cards — stagger fadeUp
            // ─────────────────────────────────────────
            gsap.fromTo(
                counterItemRefs.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: 0.15,
                    scrollTrigger: scrollCfg(counterItemRefs.current[0]),
                },
            );

            // ─────────────────────────────────────────
            // 8️⃣ Marquee wrapper — fadeUp
            // ─────────────────────────────────────────
            gsap.fromTo(
                marqueeWrapRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: scrollCfg(marqueeWrapRef.current),
                },
            );

            // ─────────────────────────────────────────
            // 9️⃣ Marquee heading — fadeUp
            // ─────────────────────────────────────────
            gsap.fromTo(
                marqueeHeadingRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: scrollCfg(marqueeHeadingRef.current),
                },
            );

            // ─────────────────────────────────────────
            // 🔟 Mission/Vision heading — fadeUp
            // ─────────────────────────────────────────
            gsap.fromTo(
                missionHeadingRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: scrollCfg(missionHeadingRef.current),
                },
            );

            // ─────────────────────────────────────────
            // 1️⃣1️⃣ Mission/Vision list items — stagger fadeUp
            // ─────────────────────────────────────────
            gsap.fromTo(
                missionItemRefs.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: 0.15,
                    scrollTrigger: scrollCfg(missionItemRefs.current[0]),
                },
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={sectionRef} className="relative">
                <div className="w-full max-w-360 mx-auto px-8 sm:px-16 pt-26 sm:pt-36 lg:pt-40">
                    {/* 1️⃣ Heading */}
                    <div
                        ref={headingWrapRef}
                        className="w-full flex flex-col items-center space-y-5 max-w-360 mx-auto lg:mb-8"
                    >
                        <PageHeading
                            bigText={'about us'}
                            smallText={'We transform your ideas into stunning visuals.'}
                        />
                    </div>

                    {/* Story */}
                    <article className="flex flex-col xl:flex-row items-start lg:gap-5 xl:gap-30 mt-8 lg:mt-26">
                        {/* 2️⃣ "Our Story" badge */}
                        <header
                            ref={storyBadgeRef}
                            className="uppercase shrink-0 w-30 h-6 lg:h-8 grid place-items-center bg-custom-primary rounded-full text-custom-black font-medium text-sm tracking-wide leading-none"
                        >
                            Our Story
                        </header>

                        <div className="flex flex-col items-start gap-8 lg:gap-20">
                            {/* 3️⃣ Story heading */}
                            <h2
                                ref={storyH2Ref}
                                className="font-semibold text-2xl lg:text-[42px] leading-7 lg:leading-12 tracking-tight uppercase mt-3 lg:mt-0"
                            >
                                We help ambitious brands scale with customized marketing strategies.
                                by merging creative ideas, data—driven insights,
                            </h2>

                            <div className="w-full flex flex-col lg:flex-row items-center sm:items-start xl:items-center gap-12 xl:gap-14 overflow-hidden">
                                {/* 4️⃣ Figure image — fadeLeft */}
                                <figure
                                    ref={figureRef}
                                    className="rounded-2xl overflow-hidden max-w-115 lg:h-115 shrink-0"
                                >
                                    <Image
                                        src={aboutPageImg}
                                        alt="about us image"
                                        loading="eager"
                                    />
                                </figure>

                                {/* 5️⃣ Aside — fadeRight */}
                                <aside
                                    ref={asideRef}
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

                                    {/* 6️⃣ Choices list — stagger */}
                                    <ul className="flex flex-col items-start gap-0.5 sm:gap-1">
                                        {choices.map((choice, i) => (
                                            <li
                                                key={i}
                                                ref={(el) => (choiceItemRefs.current[i] = el)}
                                                className="flex items-start sm:items-center gap-2 text-custom-white/70"
                                            >
                                                <IoCheckmarkCircle className="text-base sm:text-lg text-custom-primary" />
                                                <span className="text-sm sm:text-base">
                                                    {choice.text}
                                                </span>
                                            </li>
                                        ))}
                                        <Link href={'/'}>
                                            <button
                                                ref={choiceBtnRef}
                                                type="button"
                                                className="mt-4 bg-custom-dark-gray px-5 py-2 sm:px-7 sm:py-3 flex items-center gap-2 capitalize text-sm lg:text-base leading-7 tracking-wider rounded-xl border-2 border-custom-dark-gray cursor-pointer hover:bg-transparent duration-300 group transition-all"
                                            >
                                                get a demo
                                                <span>
                                                    <FiArrowUpRight className="text-xl font-bold group-hover:rotate-45 duration-300" />
                                                </span>
                                            </button>
                                        </Link>
                                    </ul>
                                </aside>
                            </div>
                        </div>
                    </article>

                    {/* 7️⃣ Counter numbers — stagger */}
                    <div className="mt-14 sm:mt-20 xl:my-26 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 justify-items-stretch">
                        {counterNumbers.map((num, i) => {
                            const { numberText, smallText } = num;
                            return (
                                <div
                                    key={i}
                                    ref={(el) => (counterItemRefs.current[i] = el)}
                                    className="bg-custom-white text-black w-50 h-30 md:w-60 md:h-40 lg:w-70 lg:h-50 rounded-xl text-center flex flex-col items-center justify-center xl:my-16"
                                >
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter">
                                        {numberText}
                                    </h1>
                                    <p className="capitalize text-sm lg:text-lg">{smallText}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* 8️⃣ Marquee section */}
                    <div
                        ref={marqueeWrapRef}
                        className="mt-14 sm:mt-20 xl:my-26 flex flex-col items-center gap-3"
                    >
                        {/* 9️⃣ Marquee heading */}
                        <h3
                            ref={marqueeHeadingRef}
                            className="font-bold text-2xl md:text-3xl uppercase"
                        >
                            Trusted by <span className="text-custom-primary">100+</span> Leading
                            Enterprises
                        </h3>

                        {/* Marquee এর parent এ ref দেওয়া হয়নি — Marquee DOM conflict এড়াতে */}
                        <div>
                            <Marquee
                                direction="right"
                                loop={0}
                                speed={50}
                                autoFill
                                pauseOnHover
                                className="flex items-center gap-1 sm:gap-4"
                            >
                                {[...images, ...images].map((img, i) => (
                                    <Image key={i} src={img.src} alt={img.alt} draggable="false" />
                                ))}
                            </Marquee>
                        </div>
                    </div>

                    {/* Mission / Vision */}
                    <div className="mt-14 sm:mt-20 xl:my-26 space-y-5 sm:space-y-0 lg:space-y-10">
                        {/* 🔟 Mission heading */}
                        <h1
                            ref={missionHeadingRef}
                            className="font-bold max-w-300 uppercase text-2xl lg:text-5xl tracking-wide leading-7 lg:leading-14"
                        >
                            &apos;&apos;An award-winning venture capital and investment firm based
                            in Los Angeles, established in 2015&apos;&apos;
                        </h1>

                        {/* 1️⃣1️⃣ Mission/Vision items — stagger */}
                        <ul>
                            {missionVision.map((item, i) => {
                                const { title, description } = item;
                                return (
                                    <li
                                        key={i}
                                        ref={(el) => (missionItemRefs.current[i] = el)}
                                        className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 border-b py-4 md:py-8 border-custom-primary/60"
                                    >
                                        <h4 className="font-semibold text-xl lg:text-[26px] tracking-tight w-full max-w-40 lg:max-w-60 xl:max-w-90 uppercase shrink-0">
                                            {title}
                                        </h4>
                                        <p className="text-sm lg:text-base leading-5 md:leading-7 text-custom-white/70">
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
