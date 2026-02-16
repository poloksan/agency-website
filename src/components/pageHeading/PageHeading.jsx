'use client';
import React from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { motion } from 'motion/react';

const container = {
    hidden: {},
    show: { transition: { delayChildren: 0.1, staggerChildren: 0.6 } },
};

const item = {
    hidden: { scale: 0, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { scale: { type: 'spring', bounce: 0.5, duration: 2.5 } },
    },
};

export default function PageHeading({ bigText, smallText }) {
    return (
        <motion.div
            variants={container}
            className="w-full flex flex-col lg:flex-row items-center lg:justify-between py-5"
        >
            <motion.h2
                variants={item}
                className="uppercase text-[60px] md:text-[120px] lg:text-[130px] xl:text-[140px] font-semibold tracking-tight leading-none pointer-events-none relative"
            >
                {bigText}
                <MdOutlineDoubleArrow className="text-xl lg:text-4xl text-custom-primary -rotate-20 absolute top-0 -right-5 lg:-right-10" />
            </motion.h2>
            <motion.p
                variants={item}
                className="w-full max-w-80 text-center lg:text-right uppercase font-medium text-xs sm:text-base lg:text-2xl xl:text-4xl text-custom-white/80"
            >
                {smallText}
            </motion.p>
        </motion.div>
    );
}
