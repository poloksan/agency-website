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
        <section>
            <div>
                <h1>Hero</h1>
            </div>
        </section>
    );
}
