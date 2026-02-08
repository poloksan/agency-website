'use client';

import Link from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'motion/react';

const container = {
    hidden: {},
    show: {
        transition: {
            // delayChildren: 0.1,
            staggerChildren: 1,
        },
    },
};

const item = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
    },
};

export default function CTA() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full max-w-360 mx-auto px-8 sm:px-16 py-10 xl:py-30 relative"
        >
            <div className="w-full flex flex-col sm:flex-row text-center sm:text-start items-center justify-between gap-5 sm:gap-0">
                {/* left text */}
                <motion.div variants={item} className="space-y-3 sm:space-y-6">
                    <h3 className="font-bold text-3xl lg:text-4xl uppercase leading-8 tracking-wide">
                        Have Any Project In Mind
                    </h3>
                    <p className="font-medium text-sm lg:text-base max-w-110 lg:max-w-140">
                        Whether you&apos;re envisioning a bold brand identity, a sleek website, or a
                        complete digital transformation.
                    </p>
                </motion.div>

                {/* right text */}

                <Link href={'/'}>
                    <motion.div
                        variants={item}
                        className="bg-custom-primary w-32.5 h-32.5 rounded-full flex flex-col items-center justify-center gap-2 text-custom-black capitalize hover:bg-custom-light-gray transition-colors duration-300 group"
                    >
                        <BsArrowUpRight className="text-lg group-hover:rotate-45 duration-300" />
                        <button className="uppercase  text-base font-semibold cursor-pointer">
                            let&apos;s talk
                        </button>
                    </motion.div>
                </Link>
            </div>
        </motion.div>
    );
}
