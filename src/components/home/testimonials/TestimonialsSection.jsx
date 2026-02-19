'use client';

import Image from 'next/image';
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import bgWorld from '@/assets/images/testimonials-bg-world.png';
import bgLayer from '@/assets/images/testimonials-bg-layer.png';
import clientImgOne from '@/assets/images/testimonials-client-one.png';
import clientImgTwo from '@/assets/images/testimonials-client-two.png';
import clientImgThree from '@/assets/images/testimonials-client-three.png';

gsap.registerPlugin(ScrollTrigger);

const stars = [
    { id: 1, star: <IoIosStar /> },
    { id: 2, star: <IoIosStar /> },
    { id: 3, star: <IoIosStar /> },
    { id: 4, star: <IoIosStar /> },
    { id: 5, star: <IoIosStar /> },
];

const testimonials = [
    {
        id: 1,
        clientName: 'T. Morthy',
        clientDesc: 'Marketing manager, OKG',
        clientComment:
            'Their agency delivered exceptional quality, professional communication, and outstanding results. Our brand presence improved significantly after working with their team.s',
        src: clientImgOne,
    },
    {
        id: 2,
        clientName: 'B, Gordon',
        clientDesc: 'CEO & Founder, Archin studio',
        clientComment:
            'A reliable digital agency with creative ideas, strong execution, and excellent project management. Highly recommended for growing modern businesses.',
        src: clientImgTwo,
    },
    {
        id: 3,
        clientName: 'T. Morthy',
        clientDesc: 'Marketing manager, OKG',
        clientComment:
            'They transformed our vision into a powerful digital experience. Professional team, fast delivery, and truly impressive service quality.',
        src: clientImgThree,
    },
    {
        id: 4,
        clientName: 'B, Gordon',
        clientDesc: 'CEO & Founder, Archin studio',
        clientComment:
            'Outstanding agency with strategic thinking, clean design, and excellent development support. Our business growth accelerated after collaboration.',
        src: clientImgOne,
    },
    {
        id: 5,
        clientName: 'T. Morthy',
        clientDesc: 'Marketing manager, OKG',
        clientComment:
            'Professional agency service with innovative solutions and smooth communication. A perfect partner for any growing brand.',
        src: clientImgTwo,
    },
    {
        id: 6,
        clientName: 'B, Gordon',
        clientDesc: 'CEO & Founder, Archin studio',
        clientComment:
            'Their expertise, creativity, and commitment helped elevate our brand identity and online presence significantly',
        src: clientImgThree,
    },
];

export default function TestimonialsSection() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const rowRef = useRef(null);

    // heading animation refs
    const headingRef = useRef(null);
    const ratingRef = useRef(null);

    // world image ref
    const worldImgRef = useRef(null);

    // testimonial card refs (stagger)
    const cardRefs = useRef([]);

    // drag state
    const [maxDrag, setMaxDrag] = useState(0);

    // ── maxDrag calculate (unchanged) ──
    useEffect(() => {
        const calc = () => {
            const container = containerRef.current;
            const row = rowRef.current;
            if (!container || !row) return;
            const diff = row.scrollWidth - container.clientWidth;
            setMaxDrag(Math.max(0, diff));
        };

        calc();
        window.addEventListener('resize', calc);
        return () => window.removeEventListener('resize', calc);
    }, []);

    // ── Drag logic (motion এর drag="x" এর GSAP equivalent) ──
    useEffect(() => {
        const row = rowRef.current;
        if (!row || maxDrag === 0) return;

        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        // touch + mouse উভয়ের জন্য
        const getClientX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

        const onStart = (e) => {
            isDragging = true;
            startX = getClientX(e) - currentX;
            row.style.cursor = 'grabbing';
        };

        const onMove = (e) => {
            if (!isDragging) return;
            const x = getClientX(e) - startX;
            // constraint: left: -maxDrag, right: 0
            const clamped = Math.min(0, Math.max(-maxDrag, x));
            currentX = clamped;
            gsap.to(row, { x: clamped, duration: 0.1, ease: 'none' });
        };

        const onEnd = () => {
            isDragging = false;
            row.style.cursor = 'grab';
            // dragMomentum এর মতো — ছেড়ে দিলে একটু smooth settle
            gsap.to(row, { duration: 0.5, ease: 'power2.out' });
        };

        row.addEventListener('mousedown', onStart);
        row.addEventListener('touchstart', onStart, { passive: true });
        window.addEventListener('mousemove', onMove);
        window.addEventListener('touchmove', onMove, { passive: true });
        window.addEventListener('mouseup', onEnd);
        window.addEventListener('touchend', onEnd);

        return () => {
            row.removeEventListener('mousedown', onStart);
            row.removeEventListener('touchstart', onStart);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('mouseup', onEnd);
            window.removeEventListener('touchend', onEnd);
        };
    }, [maxDrag]);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // ─────────────────────────────────────────────────
            // 1️⃣ "Clients Review" heading
            //    motion এ: item → y:50, opacity:0 → y:0, opacity:1
            //    whileInView + once:true
            // ─────────────────────────────────────────────────
            gsap.fromTo(
                headingRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                },
            );

            // ─────────────────────────────────────────────────
            // 2️⃣ Rating badge
            //    motion এ: item → y:50, opacity:0 (staggerChildren:0.3 delay)
            // ─────────────────────────────────────────────────
            gsap.fromTo(
                ratingRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    delay: 0.3, // staggerChildren: 0.3
                    scrollTrigger: {
                        trigger: ratingRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                },
            );

            // ─────────────────────────────────────────────────
            // 3️⃣ World image — animateScale
            //    motion এ: scale:0 → scale:1, spring bounce:0.4, duration:1
            // ─────────────────────────────────────────────────
            gsap.fromTo(
                worldImgRef.current,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 3.5,
                    ease: 'elastic.out(0.5, 0.3)', // spring bounce:0.4 equivalent
                    scrollTrigger: {
                        trigger: worldImgRef.current,
                        start: 'top 95%',
                        toggleActions: 'play none none none',
                    },
                },
            );

            // ─────────────────────────────────────────────────
            // 4️⃣ Testimonial cards — stagger
            //    motion এ: item → y:50, opacity:0 → y:0, opacity:1
            //    staggerChildren:0.3, delayChildren:0.2
            // ─────────────────────────────────────────────────
            gsap.fromTo(
                cardRefs.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'back.inOut',
                    stagger: 0.3, // staggerChildren: 0.3
                    delay: 0.2, // delayChildren: 0.2
                    scrollTrigger: {
                        trigger: rowRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                },
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full pt-10 pb-5 lg:pb-10 lg:pt-20">
            <div className="space-y-20 md:space-y-20 lg:space-y-28">
                {/* heading */}
                <div className="w-full max-w-360 mx-auto flex flex-col items-center gap-4 md:gap-7 lg:gap-8 relative z-9999">
                    <h1
                        ref={headingRef}
                        className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[2px] text-center"
                    >
                        Clients Review
                    </h1>

                    <div
                        ref={ratingRef}
                        className="flex items-center gap-3 md:gap-6 border border-custom-white/40 rounded-full py-2.5 px-6"
                    >
                        <div className="w-10 h-10 bg-custom-primary/90 border-5 border-custom-white rounded-full"></div>

                        <div>
                            <div className="flex items-center gap-4">
                                <p className="text-custom-white font-bold text-xs sm:text-base">
                                    4.9/5
                                </p>
                                <div className="flex items-center md:gap-0.5">
                                    {stars.map((star) => (
                                        <span key={star.id} className="text-custom-primary">
                                            {star.star}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-xs md:text-sm text-custom-white/50">
                                Based on 24 reviews on Clutch
                            </p>
                        </div>
                    </div>
                </div>

                {/* card section */}
                <div className="relative flex items-center justify-center select-none lg:-mt-14">
                    {/* world image */}
                    <div
                        ref={worldImgRef}
                        className="max-w-360 mx-auto bg-center bg-cover object-cover bg-no-repeat -z-50"
                    >
                        <Image src={bgWorld} alt="world" draggable="false" />
                    </div>

                    {/* drag container */}
                    <div
                        ref={containerRef}
                        className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex z-10 overflow-hidden py-10 -space-x-10"
                    >
                        {/* draggable row — motion এর drag="x" এর equivalent */}
                        <div
                            ref={rowRef}
                            className="flex -space-x-10 cursor-grab touch-pan-y"
                            style={{ userSelect: 'none' }}
                        >
                            {testimonials.map((testimonial, i) => {
                                const { id, src, clientName, clientDesc, clientComment } =
                                    testimonial;
                                return (
                                    <div
                                        key={i}
                                        ref={(el) => (cardRefs.current[i] = el)}
                                        className={`text-custom-black w-66 h-66 md:w-80 lg:w-100 md:h-80 lg:h-100 ${
                                            i % 2 === 0
                                                ? 'bg-custom-primary -rotate-6 -mt-2'
                                                : 'bg-custom-white rotate-6'
                                        } rounded-md p-6 lg:p-9 flex flex-col items-start justify-between shrink-0 select-none my-10 hover:z-30 active:z-30 relative`}
                                    >
                                        <h5 className="text-base md:text-lg xl:text-2xl leading-5 md:leading-7 xl:leading-8 tracking-wide">
                                            &quot;{clientComment}&quot;
                                        </h5>

                                        <div className="flex items-center justify-between w-full">
                                            <div className="space-y-2">
                                                <p className="text-xs md:text-sm tracking-wider text-custom-dark-gray">
                                                    {clientDesc}
                                                </p>
                                                <h6 className="text-sm md:text-base font-normal tracking-wide">
                                                    {clientName}
                                                </h6>
                                            </div>

                                            <Image
                                                src={src}
                                                alt="client"
                                                className={`w-15 h-15 rounded-full border-4 ${
                                                    i % 2 === 0
                                                        ? 'border-custom-white'
                                                        : 'border-custom-primary'
                                                }`}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
