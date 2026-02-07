'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function HeadingBorderText({ text }) {
    return (
        <motion.h5
            initial={{
                scale: 0,
            }}
            whileInView={{ scale: 1, transition: { duration: 1 } }}
            viewport={{
                once: true,
                amount: 'all',
            }}
            className="border-2 border-custom-primary/50 inline-block px-6 py-2 rounded-full text-custom-light-gray text-sm md:text-base lg:text-xl uppercase select-none shadow-amber-400"
        >
            {text}
        </motion.h5>
    );
}
