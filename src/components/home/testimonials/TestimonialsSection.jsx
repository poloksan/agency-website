'use client';

import Image from 'next/image';
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import bgWorld from '@/assets/images/testimonials-bg-world.png';
import bgLayer from '@/assets/images/testimonials-bg-layer.png';
import clientImgOne from '@/assets/images/testimonials-client-one.png';
import clientImgTwo from '@/assets/images/testimonials-client-two.png';
import clientImgThree from '@/assets/images/testimonials-client-three.png';

const stars = [
    {
        id: 1,
        star: <IoIosStar />,
    },
    {
        id: 2,
        star: <IoIosStar />,
    },
    {
        id: 3,
        star: <IoIosStar />,
    },
    {
        id: 4,
        star: <IoIosStar />,
    },
    {
        id: 5,
        star: <IoIosStar />,
    },
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

const container = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 1,
            staggerChildren: 0.5,
        },
    },
};

const item = {
    hidden: { y: 50, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, visualDuration: 0.8 },
    },
};

const animateScale = {
    hidden: { scale: 0 },
    show: {
        scale: 1,
        transition: { duration: 0.8, visualDuration: 0.8 },
    },
};

export default function TestimonialsSection() {
    const containerRef = useRef(null);
    const rowRef = useRef(null);
    const [maxDrag, setMaxDrag] = useState(0);

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

    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full pt-10 pb-5 lg:pb-10 lg:pt-20"
        >
            <div className="space-y-20 md:space-y-20 lg:space-y-28">
                {/* heading */}
                <div className="w-full max-w-360 mx-auto flex flex-col items-center gap-4 md:gap-7 lg:gap-8 relative z-9999">
                    <motion.h1
                        variants={item}
                        className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[2px] text-center"
                    >
                        Clients Review
                    </motion.h1>

                    <motion.div
                        variants={item}
                        className="flex items-center gap-3 md:gap-6 border border-custom-white/40 rounded-full py-2.5 px-6"
                    >
                        <div className="w-10 h-10 bg-custom-primary/90 border-5 border-custom-white rounded-full"></div>

                        <div>
                            <div className="flex items-center gap-4">
                                <p className="text-custom-white font-bold text-xs sm:text-base">
                                    4.9/5
                                </p>
                                <div className="flex items-center md:gap-0.5">
                                    {stars.map((star) => {
                                        return (
                                            <span key={star.id} className="text-custom-primary">
                                                {star.star}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                            <p className="text-xs md:text-sm text-custom-white/50">
                                Based on 24 reviews on Clutch
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* card section */}
                <div className="relative flex items-center justify-center select-none">
                    <motion.div
                        variants={animateScale}
                        className="max-w-360 mx-auto bg-center bg-cover object-cover bg-no-repeat -z-50"
                    >
                        <Image src={bgWorld} alt="world" draggable="false" />
                    </motion.div>
                    {/* <motion.div
                        variants={animateScale}
                        className="w-full mx-auto absolute bottom-10 md:bottom-30 left-0 -z-40"
                    >
                        <Image
                            src={bgLayer}
                            alt="gradient layer"
                            draggable="false"
                            className="w-full h-auto brightness-75"
                        />
                    </motion.div> */}

                    <div
                        ref={containerRef}
                        className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex z-10 overflow-hidden py-10 -space-x-10"
                    >
                        <motion.div
                            ref={rowRef}
                            className="flex -space-x-10 cursor-grab touch-pan-y"
                            drag="x"
                            dragConstraints={{ left: -maxDrag, right: 0 }}
                            dragElastic={0.6}
                            dragMomentum={true}
                            whileTap={{ cursor: 'grabbing' }}
                        >
                            {/* cards */}
                            {testimonials.map((testimonial, i) => {
                                const { id, src, clientName, clientDesc, clientComment } =
                                    testimonial;
                                return (
                                    <motion.div
                                        key={i}
                                        variants={item}
                                        className={`text-custom-black w-66 h-66 md:w-80 lg:w-100 md:h-80 lg:h-100 ${i % 2 === 0 ? 'bg-custom-primary -rotate-6 -mt-2' : 'bg-custom-white rotate-6'} rounded-md p-6 lg:p-9 flex flex-col items-start justify-between shrink-0 select-none my-10 hover:z-30 active:z-30 relative`}
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
                                                className={`w-15 h-15 rounded-full border-4 ${i % 2 === 0 ? 'border-custom-white' : 'border-custom-primary'}`}
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
