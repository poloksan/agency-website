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
import PageHeading from '@/components/pageHeading/PageHeading';

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

    // heading wrapper ref
    const pageHeadingRef = useRef(null);

    // "from concept to creation" heading ref
    const conceptHeadingRef = useRef(null);

    // card image scale hover এর জন্য ref array
    const cardImgRef = useRef([]);

    // card title slide hover এর জন্য ref array
    const cardTitleInnerRef = useRef([]);

    useGSAP(() => {
        const section = sectionRef.current;
        const text = textRef.current;
        const cards = gsap.utils.toArray('.project-card');

        const ctx = gsap.context(() => {
            // ─────────────────────────────────────────────────
            // 1️⃣ আগের pin + card flip animation (unchanged)
            // ─────────────────────────────────────────────────
            ScrollTrigger.create({
                trigger: text,
                start: 'top top',
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
                        duration: 2,
                        scrollTrigger: {
                            trigger: card,
                            start: 'bottom 100%',
                            end: 'top 60%',
                            scrub: 1,
                            toggleActions: 'play reverse play reverse',
                        },
                    },
                );
            });

            // ─────────────────────────────────────────────────
            // 2️⃣ PageHeading wrapper — fadeUp (scale:0 → scale:1)
            //    motion এ: scale:0, opacity:0 → spring bounce:0.5, duration:2.5
            //    whileInView + once:true, amount:0.2
            // ─────────────────────────────────────────────────

            // ─────────────────────────────────────────────────
            // 3️⃣ "from concept to creation" heading — same fadeUp
            // ─────────────────────────────────────────────────
            gsap.fromTo(
                conceptHeadingRef.current,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 2.5,
                    ease: 'elastic.out(1, 0.5)',
                    scrollTrigger: {
                        trigger: conceptHeadingRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                },
            );

            // ─────────────────────────────────────────────────
            // 4️⃣ Card image hover — scale 1 → 1.1
            //    motion এ: whileHover → scale:1.1, duration:0.5
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
            //    motion এ: whileHover → y:'calc(-3rem - 0.5rem)', duration:0.3
            //    hover করলে উপরের span উপরে যাবে, নিচের span উঠে আসবে
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
                    gsap.to(innerEl, { y: 0, duration: 0.3, ease: 'power2.inOut' });
                });
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full max-w-360 mx-auto px-2 sm:px-16 py-26 sm:py-36 lg:py-42 overflow-x-hidden"
        >
            {/* 2️⃣ PageHeading — scale animate */}
            <div className="flex flex-col items-center gap-4">
                <PageHeading bigText={'works'} smallText={'we drive engagement & get results.'} />
            </div>

            <div className="w-full flex flex-col items-start justify-center relative">
                {/* heading text */}
                <div ref={textRef} className="w-full max-w-300 mx-auto text-center -z-999">
                    {/* 3️⃣ "from concept to creation" heading */}
                    <h3
                        ref={conceptHeadingRef}
                        className="text-center text-[40px] md:text-[80px] lg:text-[120px] xl:text-[136px] font-bold tracking-normal leading-8 md:leading-15 lg:leading-22 xl:leading-24 text-custom-dark-gray uppercase -z-40 lg:mt-20"
                    >
                        from <br /> concept to creation
                    </h3>
                </div>

                <div
                    ref={containerRef}
                    className="w-full flex flex-col items-center gap-10 md:gap-24 lg:gap-24 z-999 px-6 sm:px-9"
                >
                    {worksImgs.map((work, i) => {
                        const { title, subTitle, src } = work;

                        return (
                            <div
                                key={work.id}
                                className={`project-card max-w-160 h-120 md:max-w-120 md:h-150 lg:max-w-160 lg:h-160 relative ${
                                    i === 0
                                        ? 'lg:left-22 xl:left-65'
                                        : i === 1
                                          ? 'lg:right-22 xl:right-65'
                                          : ''
                                } object-cover overflow-hidden rounded-lg`}
                            >
                                <Link href={'/'}>
                                    {/* 4️⃣ image wrapper — hover এ scale হবে */}
                                    <div
                                        ref={(el) => (cardImgRef.current[i] = el)}
                                        className="rounded-lg w-full h-full"
                                    >
                                        <Image
                                            src={src}
                                            loading="eager"
                                            alt="portfolio work"
                                            className="object-cover bg-center bg-cover rounded-lg brightness-90 w-full h-full"
                                        />
                                    </div>

                                    <div className="w-full text-center absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        {/* 5️⃣ title slide — overflow hidden container */}
                                        <h2 className="relative h-10 md:h-12 overflow-hidden cursor-pointer">
                                            <div
                                                ref={(el) => (cardTitleInnerRef.current[i] = el)}
                                                className="flex flex-col items-center"
                                            >
                                                {/* উপরের span — hover এ উপরে চলে যাবে */}
                                                <span className="block h-14 sm:h-16 leading-8 lg:leading-12 w-full text-center uppercase font-bold text-2xl sm:text-3xl lg:text-5xl tracking-[2px]">
                                                    {title}
                                                </span>
                                                {/* নিচের span — hover এ উপরে উঠে আসবে */}
                                                <span className="block h-12 sm:h-16 leading-8 lg:leading-12 w-full text-center uppercase font-bold text-2xl sm:text-3xl lg:text-5xl tracking-[2px]">
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
