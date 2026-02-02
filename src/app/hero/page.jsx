"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { MdOutlineArrowOutward } from "react-icons/md";
import learnMore from "@/assets/icons/learn-more-btn.png";
import corner from "@/assets/images/hero-big-corner-img.png";
import heroBigImg from "@/assets/images/hero-big-img.png";
import companyLogoOne from "@/assets/images/company-logo-one.png";
import companyLogoTwo from "@/assets/images/company-logo-two.png";
import companyLogoThree from "@/assets/images/company-logo-three.png";
import companyLogoFour from "@/assets/images/company-logo-four.png";

const companyLogos = [
    {
        id: 1,
        src: companyLogoOne,
        alt: "company logo",
    },
    {
        id: 2,
        src: companyLogoTwo,
        alt: "company logo",
    },
    {
        id: 3,
        src: companyLogoThree,
        alt: "company logo",
    },
    {
        id: 4,
        src: companyLogoFour,
        alt: "company logo",
    },
    {
        id: 5,
        src: companyLogoOne,
        alt: "company logo",
    },
    {
        id: 6,
        src: companyLogoTwo,
        alt: "company logo",
    },
];

export default function Hero() {
    return (
        <section className="w-full">
            <div className="w-full max-w-360 mx-auto px-8 sm:px-30 py-11 relative">
                <motion.p
                    initial={{
                        opacity: 0,
                        scaleX: 0.1,
                    }}
                    animate={{
                        opacity: 1,
                        scaleX: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.2,
                    }}
                    className="uppercase text-center text-[12px] font-normal leading-3 text-custom-white tracking-[2px] opacity-95 mb-2"
                >
                    welcome
                </motion.p>

                <motion.div
                    initial={{
                        opacity: 0,
                        scaleX: 0.1,
                    }}
                    animate={{
                        opacity: 1,
                        scaleX: 1,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: "easeInOut",
                    }}
                    className="relative text-center leading-[0.9] mb-6 cursor-default"
                >
                    <h1 className="relative font-semibold tracking-[-1px] inline-block uppercase text-[56px] md:text-[160px] lg:text-[192px] md:leading-33.75 py-1 lg:py-2 md:-ml-10">
                        design
                        <span className="hidden md:inline-block text-3xl absolute -right-8 top-0">
                            <MdOutlineArrowOutward />
                        </span>
                    </h1>

                    <h2
                        className={[
                            "font-semibold tracking-[-1px] uppercase text-[56px] md:text-[160px] lg:text-[192px] md:leading-33.75 pt-4 md:-ml-18 lg:-ml-4",
                            " text-transparent -translate-y-2.5",
                            "[-webkit-text-stroke:1px_rgba(197,251,103,1)] [text-stroke:px_rgba(197,251,103,1)]",
                        ].join(" ")}
                    >
                        AGENCY
                    </h2>
                </motion.div>

                {/* Bottom area */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scaleX: 0.1,
                    }}
                    animate={{
                        opacity: 1,
                        scaleX: 1,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: "easeInOut",
                    }}
                    className="mt-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16 lg:gap-0"
                >
                    {/* Left Text */}
                    <div className="lg:pl-2 mb-10 lg:mb-6 text-center lg:text-right cursor-default">
                        <p className="max-w-130 uppercase font-light tracking-[1px] leading-6 lg:leading-10 text-[21px] lg:text-[40px]">
                            BEAUTIFUL DESIGN
                            <br />
                            HAS THE POWER
                            <br />
                            TO CAPTIVATE
                            <br />
                            AUDIENCES.
                        </p>
                    </div>

                    {/* Right Card + Badge */}
                    <div className="relative flex justify-center md:justify-end">
                        {/* Badge */}
                        <div className="relative">
                            <Image
                                src={heroBigImg}
                                alt="can mockup"
                                className="rounded-3xl object-center object-cover h-90"
                            />
                            <div className=" hidden lg:inline-block w-full max-w-90 bg-custom-black h-full max-h-8 absolute top-0 left-0 rounded-br-3xl">
                                <Image
                                    src={corner}
                                    alt="sharp corner"
                                    draggable="false"
                                    width={12}
                                    height={12}
                                    className="absolute top-0 -right-3"
                                />
                                <Image
                                    src={corner}
                                    alt="sharp corner"
                                    draggable="false"
                                    width={33}
                                    height={33}
                                    className="absolute -bottom-8 left-0 "
                                />
                            </div>

                            <Link href={"/"}>
                                <motion.button
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        ease: "linear",
                                        duration: 8,
                                        repeat: Infinity,
                                    }}
                                    type="button"
                                    className="absolute top-0 left-1/2 lg:top-1/2 lg:-left-20 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 border-12 border-solid border-custom-black bg-custom-primary rounded-full cursor-pointer"
                                >
                                    <Image
                                        src={learnMore}
                                        alt="learn more"
                                        draggable="false"
                                        width={120}
                                        height={120}
                                    />
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 place-items-center md:gap-3 lg:gap-5 mt-2"
                >
                    {companyLogos.map((logo, i) => (
                        <Image
                            key={i}
                            src={logo.src}
                            alt={logo.alt}
                            width={128}
                            className="contrast-30 duration-200 hover:contrast-10"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
