'use client';
import React, { useRef } from 'react';
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

gsap.registerPlugin(ScrollTrigger);

const worksImgs = [
    { id: 1, src: workOne, title: 'Website Redesign', subTitle: 'design' },
    { id: 2, src: workTwo, title: 'brand identify', subTitle: 'branding' },
    { id: 3, src: workThree, title: 'development', subTitle: 'prototype' },
];

export default function PortfolioSection() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const textRef = useRef(null);

    const worksHeadingRef = useRef(null);
    const conceptHeadingRef = useRef(null);

    // image scale hover এর জন্য
    const cardImgRef = useRef([]);

    // title slide hover এর জন্য — inner div যেটা দুইটা span ধরে আছে
    const cardTitleInnerRef = useRef([]);

    useGSAP(() => {
        const section = sectionRef.current;
        const text = textRef.current;
        const cards = gsap.utils.toArray('.project-card');

        const ctx = gsap.context(() => {
            // ─────────────────────────────────────────────────
            // 1️⃣ Pin + card flip (unchanged)
            // ─────────────────────────────────────────────────
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
                    { rotateX: 75, rotateY: 75, y: 150, scale: 0.9 },
                    {
                        rotateX: 0,
                        rotateY: 0,
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: card,
                            start: 'bottom 95%',
                            end: 'top 60%',
                            scrub: 1,
                            toggleActions: 'play reverse play reverse',
                        },
                    },
                );
            });

            // ─────────────────────────────────────────────────
            // 2️⃣ "works" heading — whileInView (once)
            // ─────────────────────────────────────────────────
            gsap.fromTo(
                worksHeadingRef.current,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 2.5,
                    ease: 'elastic.out(0.6, 0.5)',
                    scrollTrigger: {
                        trigger: worksHeadingRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                },
            );

            // ─────────────────────────────────────────────────
            // 3️⃣ "from concept to creation" — whileInView (once)
            // ─────────────────────────────────────────────────
            gsap.fromTo(
                conceptHeadingRef.current,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 2.5,
                    ease: 'elastic.out(0.6, 0.5)',
                    delay: 0.6,
                    scrollTrigger: {
                        trigger: conceptHeadingRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                },
            );

            // ─────────────────────────────────────────────────
            // 4️⃣ Card image hover — scale 1 → 1.1
            //    motion এ: whileHover → { scale: 1.1, duration: 0.5 }
            // ─────────────────────────────────────────────────
            cardImgRef.current.forEach((imgEl) => {
                if (!imgEl) return;
                const card = imgEl.closest('.project-card');

                card.addEventListener('mouseenter', () => {
                    gsap.to(imgEl, { scale: 1.1, duration: 0.5, ease: 'power2.inOut' });
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(imgEl, { scale: 1, duration: 0.5, ease: 'power2.inOut' });
                });
            });

            // ─────────────────────────────────────────────────
            // 5️⃣ Card title slide hover
            //    motion এ: whileHover → { y: 'calc(-3rem - 0.5rem)', duration: 0.3 }
            //    এই inner div এ দুইটা span আছে —
            //    hover করলে উপরের span উপরে চলে যাবে, নিচের span তার জায়গায় আসবে
            //    mouseleave এ আবার original position এ ফিরবে
            // ─────────────────────────────────────────────────
            cardTitleInnerRef.current.forEach((innerEl) => {
                if (!innerEl) return;
                const card = innerEl.closest('.project-card');

                card.addEventListener('mouseenter', () => {
                    gsap.to(innerEl, {
                        y: 'calc(-3rem - 0.5rem)',
                        duration: 0.3,
                        ease: 'power2.inOut',
                    });
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(innerEl, {
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.inOut',
                    });
                });
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full max-w-360 mx-auto px-8 py-10 lg:py-20">
            <div className="w-full flex flex-col items-start justify-center relative">
                {/* heading text */}
                <div ref={textRef} className="w-full max-w-300 mx-auto text-center -z-999">
                    <h2
                        ref={worksHeadingRef}
                        className="uppercase text-[70px] md:text-[130px] lg:text-[192px] font-semibold tracking-tight lg:-mt-12 pointer-events-none"
                    >
                        works
                    </h2>
                    <h3
                        ref={conceptHeadingRef}
                        className="max-w-300 text-[40px] md:text-[80px] lg:text-[136px] font-bold tracking-normal leading-8 md:leading-15 lg:leading-24 text-custom-dark-gray uppercase -z-40"
                    >
                        from <br /> concept to creation
                    </h3>
                </div>

                <div
                    ref={containerRef}
                    className="w-full flex flex-col items-center gap-16 xl:gap-24 z-999 sm:mb-20 lg:mb-50"
                >
                    {worksImgs.map((work, i) => {
                        const { title, subTitle, src } = work;

                        return (
                            <div
                                key={work.id}
                                className={`project-card max-w-100 sm:max-w-120 lg:max-w-160 h-140 sm:h-150 relative ${
                                    i === 0
                                        ? 'lg:left-22 xl:left-65'
                                        : i === 1
                                          ? 'lg:right-22 xl:right-65'
                                          : ''
                                } object-cover overflow-hidden rounded-lg`}
                            >
                                <Link href={'/'}>
                                    {/* ── image wrapper — hover এ scale হবে ── */}
                                    <div
                                        ref={(el) => (cardImgRef.current[i] = el)}
                                        className="rounded-lg w-full h-full"
                                    >
                                        <Image
                                            src={src}
                                            alt="portfolio work"
                                            className="object-cover bg-center bg-cover rounded-lg brightness-90 w-full h-full"
                                        />
                                    </div>

                                    <div className="w-full text-center absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        {/*
                                            ── title slide container ──
                                            h-10/h-14 + overflow-hidden দিয়ে একটাই title দেখা যাবে
                                            hover করলে inner div উপরে slide করবে
                                            ফলে নিচের span দেখা যাবে — ঠিক motion এর মতো
                                        */}
                                        <h2 className="relative h-10 md:h-14 overflow-hidden cursor-pointer">
                                            <div
                                                ref={(el) => (cardTitleInnerRef.current[i] = el)}
                                                className="flex flex-col items-center"
                                            >
                                                {/* উপরের span — default অবস্থায় দেখা যায় */}
                                                <span className="block h-12 sm:h-16 w-full text-center uppercase font-bold text-2xl sm:text-4xl lg:text-5xl tracking-[2px]">
                                                    {title}
                                                </span>
                                                {/* নিচের span — hover করলে উপরে উঠে আসে */}
                                                <span className="block h-12 sm:h-16 w-full text-center uppercase font-bold text-2xl sm:text-4xl lg:text-5xl tracking-[2px]">
                                                    {title}
                                                </span>
                                            </div>
                                        </h2>

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
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
