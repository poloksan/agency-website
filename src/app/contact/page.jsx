'use client';

import HeadingBorderText from '@/components/headingBorderText/HeadingBorderText';
import PageHeading from '@/components/pageHeading/PageHeading';
import Link from 'next/link';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef(null);

    // ── Left side refs ──
    const leftContainerRef = useRef(null);
    const leftH2Ref = useRef(null);
    const leftDescRef = useRef(null);
    const leftAddressRef = useRef(null);
    const leftPhoneRef = useRef(null);
    const leftSocialRef = useRef(null);

    // ── Right side refs ──
    const rightContainerRef = useRef(null);
    const rightH3Ref = useRef(null);
    const formNameEmailRef = useRef(null);
    const formSubjectRef = useRef(null);
    const formMessageRef = useRef(null);
    const formBtnRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // shared scrollTrigger config
            // motion এ ছিল: whileInView, viewport once:true, amount:0.15
            const scrollCfg = (trigger) => ({
                trigger,
                start: 'top 88%', // amount:0.15 equivalent
                toggleActions: 'play none none none', // once:true equivalent
            });

            // ─────────────────────────────────────────────────
            // LEFT SIDE — staggerChildren:0.15 এর equivalent
            // motion এ leftContainer এর ভেতরে সব item stagger হতো
            // GSAP এ timeline দিয়ে একটার পর একটা করছি
            // fadeUp: y:80, opacity:0 → y:0, opacity:1, duration:0.8
            // ─────────────────────────────────────────────────
            const leftTl = gsap.timeline({
                scrollTrigger: scrollCfg(leftContainerRef.current),
            });

            leftTl
                // 1️⃣ Main heading
                .fromTo(
                    leftH2Ref.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                )
                // 2️⃣ Description — stagger:0.15 পরে
                .fromTo(
                    leftDescRef.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                )
                // 3️⃣ Address & Email grid
                .fromTo(
                    leftAddressRef.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                )
                // 4️⃣ Phone number
                .fromTo(
                    leftPhoneRef.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                )
                // 5️⃣ Social links
                .fromTo(
                    leftSocialRef.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                );

            // ─────────────────────────────────────────────────
            // RIGHT SIDE — staggerChildren:0.15
            // ─────────────────────────────────────────────────
            const rightTl = gsap.timeline({
                scrollTrigger: scrollCfg(rightContainerRef.current),
            });

            rightTl
                // 1️⃣ Form heading
                .fromTo(
                    rightH3Ref.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                )
                // 2️⃣ Name & Email row
                .fromTo(
                    formNameEmailRef.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                )
                // 3️⃣ Subject field
                .fromTo(
                    formSubjectRef.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                )
                // 4️⃣ Message field
                .fromTo(
                    formMessageRef.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                )
                // 5️⃣ Submit button
                .fromTo(
                    formBtnRef.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full max-w-360 mx-auto flex flex-col gap-4 lg:gap-8 px-8 sm:px-16 py-26 sm:py-36 lg:py-42"
        >
            {/* Page Heading */}
            <div className="flex flex-col items-center">
                <PageHeading bigText={'contact'} smallText={'request a free consultation'} />
            </div>

            <div className="relative">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                    {/* ==================== LEFT SIDE ==================== */}
                    <div ref={leftContainerRef} className="space-y-2 lg:space-y-8">
                        {/* 1️⃣ Main Heading */}
                        <h2
                            ref={leftH2Ref}
                            className="text-3xl sm:text-[32px] lg:text-4xl xl:text-[57px] font-light leading-[1.20] tracking-tight"
                        >
                            <span className="font-normal">LET&apos;S MAKE YOUR BRAND</span>{' '}
                            <span className="text-custom-white/70 font-extralight">BRILLIANT!</span>
                        </h2>

                        {/* 2️⃣ Description */}
                        <p
                            ref={leftDescRef}
                            className="max-w-md text-sm sm:text-base leading-6 text-custom-white/70"
                        >
                            If you would like to work with us or just want to get in touch,
                            we&apos;d love to hear from you!
                        </p>

                        {/* 3️⃣ Address & Email Grid */}
                        <div
                            ref={leftAddressRef}
                            className="mt-6 grid max-w-md grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 lg:gap-10"
                        >
                            <div>
                                <p className="text-xl font-medium">Address</p>
                                <p className="mt-1 lg:mt-4 text-sm leading-6 text-custom-white/70">
                                    Besòs 1, 08174 Sant Cugat del
                                    <br />
                                    Vallès, Barcelona
                                </p>
                            </div>

                            <div>
                                <p className="text-xl font-medium">Email</p>
                                <Link
                                    href="mailto:support@uithemez.com"
                                    className="mt-1 lg:mt-4 inline-block text-sm text-custom-white/70 hover:text-custom-white"
                                >
                                    Support@uithemez.com
                                </Link>
                            </div>
                        </div>

                        {/* 4️⃣ Phone Number */}
                        <div ref={leftPhoneRef} className="inline-block">
                            <Link
                                href="tel:+18408412569"
                                className="inline-block text-2xl lg:text-3xl font-semibold text-custom-primary/90 underline underline-offset-8"
                            >
                                +1 840 841 25 69
                            </Link>
                        </div>

                        {/* 5️⃣ Social Links */}
                        <div
                            ref={leftSocialRef}
                            className="mt-6 lg:mt-8 flex flex-wrap gap-4 lg:gap-10 text-sm text-custom-white/80"
                        >
                            <Link
                                href={'https://www.facebook.com/'}
                                className="hover:text-custom-white hover:scale-125 duration-300"
                            >
                                Facebook
                            </Link>
                            <Link
                                href={'https://x.com/'}
                                className="hover:text-custom-white hover:scale-125 duration-300"
                            >
                                Twitter
                            </Link>
                            <Link
                                href={'https://linkedin.com/'}
                                className="hover:text-custom-white hover:scale-125 duration-300"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href={'https://www.instagram.com/'}
                                className="hover:text-custom-white hover:scale-125 duration-300"
                            >
                                Instagram
                            </Link>
                        </div>
                    </div>

                    {/* ==================== RIGHT SIDE ==================== */}
                    <div ref={rightContainerRef} className="lg:pt-2 flex flex-col lg:gap-16">
                        {/* 1️⃣ Form Heading */}
                        <h3
                            ref={rightH3Ref}
                            className="text-3xl sm:text-[32px] lg:text-4xl xl:text-5xl font-normal tracking-tight uppercase"
                        >
                            send a{' '}
                            <span className="font-extralight text-custom-white/70">message</span>
                        </h3>

                        {/* Contact Form */}
                        <form>
                            {/* 2️⃣ Name & Email Row */}
                            <div
                                ref={formNameEmailRef}
                                className="grid gap-4 lg:gap-10 lg:grid-cols-2"
                            >
                                <Field>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent pb-3 text-custom-white outline-none placeholder:text-custom-white/30"
                                        placeholder="Name"
                                    />
                                </Field>
                                <Field>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent pb-3 text-custom-white/50 outline-none placeholder:text-custom-white/30"
                                        placeholder="Email"
                                    />
                                </Field>
                            </div>

                            {/* 3️⃣ Subject Field */}
                            <div ref={formSubjectRef} className="mt-6 lg:mt-10">
                                <Field>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent pb-3 text-custom-white outline-none placeholder:text-custom-white/30"
                                        placeholder="Subject"
                                    />
                                </Field>
                            </div>

                            {/* 4️⃣ Message Field */}
                            <div ref={formMessageRef} className="mt-6 lg:mt-10">
                                <Field>
                                    <textarea
                                        rows={5}
                                        className="w-full resize-none bg-transparent pb-3 text-custom-white outline-none placeholder:text-custom-white/30"
                                        placeholder="Message"
                                    />
                                </Field>
                            </div>

                            {/* 5️⃣ Submit Button */}
                            <button
                                ref={formBtnRef}
                                type="submit"
                                className="mt-12 w-full rounded-full border border-custom-white py-4 text-base font-medium text-custom-white transition hover:border-custom-primary hover:bg-custom-primary hover:text-custom-black cursor-pointer duration-500"
                            >
                                Let&apos;s Talk
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Field({ label, children }) {
    return (
        <label className="block">
            {label && <span className="mb-3 block text-sm text-custom-white/40">{label}</span>}
            <div className="border-b border-custom-white/20 transition focus-within:border-custom-white/60">
                {children}
            </div>
        </label>
    );
}
