'use client';

import HeadingBorderText from '@/components/headingBorderText/HeadingBorderText';
import PageHeading from '@/components/pageHeading/PageHeading';
import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';

// Parent container
const parentContainer = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

// Left side elements
const leftContainer = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// Right side elements
const rightContainer = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// Individual element animation

const fadeUp = {
    hidden: { y: 80, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

export default function Contact() {
    return (
        <section className="relative w-full max-w-360 mx-auto flex flex-col gap-4 lg:gap-8 px-8 sm:px-16 py-26 sm:py-36 lg:py-42">
            {/* Page Heading */}
            <div className="flex flex-col items-center">
                <PageHeading bigText={'contact'} smallText={'request a free consultation'} />
            </div>

            <motion.div
                variants={parentContainer}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: true,
                    amount: 0.15,
                }}
                className="relative"
            >
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                    {/* ==================== LEFT SIDE ==================== */}
                    <motion.div variants={leftContainer} className="space-y-2 lg:space-y-8">
                        {/* Main Heading */}
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl sm:text-[32px] lg:text-4xl xl:text-[57px] font-light leading-[1.20] tracking-tight"
                        >
                            <span className="font-normal">LET&apos;S MAKE YOUR BRAND</span>{' '}
                            <span className="text-custom-white/70 font-extralight">BRILLIANT!</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="max-w-md text-sm sm:text-base leading-6 text-custom-white/70"
                        >
                            If you would like to work with us or just want to get in touch,
                            we&apos;d love to hear from you!
                        </motion.p>

                        {/* Address & Email Grid */}
                        <motion.div
                            variants={fadeUp}
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
                        </motion.div>

                        {/* Phone Number */}
                        <motion.div variants={fadeUp} className="inline-block">
                            <Link
                                href="tel:+18408412569"
                                className="inline-block text-2xl lg:text-3xl font-semibold text-custom-primary/90 underline underline-offset-8"
                            >
                                +1 840 841 25 69
                            </Link>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            variants={fadeUp}
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
                        </motion.div>
                    </motion.div>

                    {/* ==================== RIGHT SIDE ==================== */}
                    <motion.div
                        variants={rightContainer}
                        className="lg:pt-2 flex flex-col lg:gap-16"
                    >
                        {/* Form Heading */}
                        <motion.h3
                            variants={fadeUp}
                            className="text-3xl sm:text-[32px] lg:text-4xl xl:text-5xl font-normal tracking-tight uppercase"
                        >
                            send a{' '}
                            <span className="font-extralight text-custom-white/70">message</span>
                        </motion.h3>

                        {/* Contact Form */}
                        <form>
                            {/* Name & Email Row */}
                            <motion.div
                                variants={fadeUp}
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
                            </motion.div>

                            {/* Subject Field */}
                            <motion.div variants={fadeUp} className="mt-6 lg:mt-10">
                                <Field>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent pb-3 text-custom-white outline-none placeholder:text-custom-white/30"
                                        placeholder="Subject"
                                    />
                                </Field>
                            </motion.div>

                            {/* Message Field */}
                            <motion.div variants={fadeUp} className="mt-6 lg:mt-10">
                                <Field>
                                    <textarea
                                        rows={5}
                                        className="w-full resize-none bg-transparent pb-3 text-custom-white outline-none placeholder:text-custom-white/30"
                                        placeholder="Message"
                                    />
                                </Field>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                variants={fadeUp}
                                type="submit"
                                className="mt-12 w-full rounded-full border border-custom-white py-4 text-base font-medium text-custom-white transition hover:border-custom-primary hover:bg-custom-primary hover:text-custom-black cursor-pointer duration-500"
                            >
                                Let&apos;s Talk
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
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
