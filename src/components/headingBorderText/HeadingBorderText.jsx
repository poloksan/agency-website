'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function HeadingBorderText({ text }) {
    return (
        <motion.h5
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 'all' }}
            transition={{
                duration: 1,
                scale: { type: 'spring', visualDuration: 0.8, bounce: 0.5 },
            }}
            className="border-2 border-custom-primary/50 inline-block px-6 py-2 rounded-full text-custom-light-gray text-[10px] sm:text-xs uppercase select-none shadow-amber-400"
        >
            {text}
        </motion.h5>
    );
}
