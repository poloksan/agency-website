'use client';
import React, { useRef } from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function PageHeading({ bigText, smallText }) {
    const wrapperRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);

    useGSAP(() => {
        // ─────────────────────────────────────────────────────
        // motion এ ছিল:
        //   container: staggerChildren:0.6, delayChildren:0.1
        //   item: scale:0, opacity:0 → scale:1, opacity:1
        //         spring bounce:0.5, duration:2.5
        // ─────────────────────────────────────────────────────

        gsap
            // 1️⃣ bigText heading — delay:0.1 (delayChildren)
            .fromTo(
                headingRef.current,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 2.5,
                    ease: 'elastic.out(0.7, 0.4)',
                },
            );
        // 2️⃣ smallText paragraph — stagger:0.6 পরে আসবে
        gsap.fromTo(
            paragraphRef.current,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 2.5,
                ease: 'elastic.out(0.7, 0.4)',
            },
            // staggerChildren:0.6 — আগেরটা শেষ হওয়ার ০.৬s পরে
        );
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="w-full flex flex-col lg:flex-row items-center lg:justify-between py-5"
        >
            <h2
                ref={headingRef}
                className="uppercase text-[60px] md:text-[90px] lg:text-[100px] xl:text-[140px] font-semibold tracking-tight leading-none pointer-events-none relative"
            >
                {bigText}
                <MdOutlineDoubleArrow className="text-xl lg:text-4xl text-custom-primary -rotate-20 absolute top-0 -right-5 lg:-right-10" />
            </h2>
            <p
                ref={paragraphRef}
                className="w-full max-w-80 xl:max-w-110 text-center lg:text-right uppercase font-medium text-xs sm:text-base lg:text-xl xl:text-4xl text-custom-white/80"
            >
                {smallText}
            </p>
        </div>
    );
}
