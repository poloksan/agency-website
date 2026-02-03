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
        <section className="w-full max-w-360 mx-auto px-8 sm:px-30 py-11 rounded-4xl">
            <div className="w-full h-[80vh] bg-custom-primary border-50 border-custom-white rounded-4xl text-custom-black">
                <div>
                    <h1>
                        create <span>design</span> agency
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit, minima!
                    </p>
                </div>

                <div>
                    <button>
                        <MdOutlineArrowOutward />
                    </button>
                </div>
            </div>
        </section>
    );
}
