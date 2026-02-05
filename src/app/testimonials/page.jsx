'use client';

import Image from 'next/image';
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import bgWorld from '@/assets/images/testimonials-bg-world.png';
import bgLayer from '@/assets/images/testimonials-bg-layer.png';
import clientImgOne from '@/assets/images/testimonials-client-one.png';
import clientImgTwo from '@/assets/images/testimonials-client-two.png';
import clientImgThree from '@/assets/images/testimonials-client-three.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

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
        clientDisk: 'Marketing manager, OKG',
        clientComment:
            ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam animi omnis enim sit commodi sapiente in a dolor, ipsum obcaecati.',
        src: clientImgOne,
    },
    {
        id: 2,
        clientName: 'B, Gordon',
        clientDisk: 'CEO & Founder, Archin studio',
        clientComment:
            ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam animi omnis enim sit commodi sapiente in a dolor, ipsum obcaecati.',
        src: clientImgTwo,
    },
    {
        id: 3,
        clientName: 'T. Morthy',
        clientDisk: 'Marketing manager, OKG',
        clientComment:
            ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam animi omnis enim sit commodi sapiente in a dolor, ipsum obcaecati.',
        src: clientImgThree,
    },
    {
        id: 4,
        clientName: 'B, Gordon',
        clientDisk: 'CEO & Founder, Archin studio',
        clientComment:
            ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam animi omnis enim sit commodi sapiente in a dolor, ipsum obcaecati.',
        src: clientImgOne,
    },
    {
        id: 5,
        clientName: 'T. Morthy',
        clientDisk: 'Marketing manager, OKG',
        clientComment:
            ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam animi omnis enim sit commodi sapiente in a dolor, ipsum obcaecati.',
        src: clientImgTwo,
    },
    {
        id: 6,
        clientName: 'B, Gordon',
        clientDisk: 'CEO & Founder, Archin studio',
        clientComment:
            ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam animi omnis enim sit commodi sapiente in a dolor, ipsum obcaecati.',
        src: clientImgThree,
    },
];

export default function TestimonialsSection() {
    const containerRef = useRef(null);
    const rowRef = useRef(null);
    const [maxDrag, setMaxDrag] = useState(0);

    useEffect(() => {
        const calc = () => {
            const container = containerRef.current;
            const row = rowRef.current;
            if (!container || !row) return;

            // total row width - visible container width
            const diff = row.scrollWidth - container.clientWidth;
            setMaxDrag(Math.max(0, diff));
        };

        calc();
        window.addEventListener('resize', calc);
        return () => window.removeEventListener('resize', calc);
    }, [testimonials?.length]);

    return (
        <section className="w-full py-20">
            <div className="space-y-28">
                {/* heading */}
                <div className="w-full max-w-360 mx-auto flex flex-col items-center gap-12">
                    <h1 className="text-7xl font-semibold tracking-[2px]">Clients Review</h1>

                    <div className="flex items-center gap-6 border border-custom-white/40 rounded-full py-2.5 px-6">
                        <div className="w-10 h-10 bg-custom-primary/90 border-5 border-custom-white rounded-full"></div>

                        <div>
                            <div className="flex items-center gap-4">
                                <p className="text-custom-white font-bold text-base">4.9/5</p>
                                <div className="flex items-center gap-0.5">
                                    {stars.map((star) => {
                                        return (
                                            <span key={star.id} className="text-custom-primary">
                                                {star.star}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                            <p className="text-sm text-custom-white/50">
                                Based on 24 reviews on Clutch
                            </p>
                        </div>
                    </div>
                </div>

                {/* card section */}
                <div className="relative">
                    <Image
                        src={bgWorld}
                        alt="world"
                        draggable="false"
                        className="max-w-360 mx-auto bg-center bg-cover object-cover bg-no-repeat"
                    />
                    <Image
                        src={bgLayer}
                        alt="gradient layer"
                        draggable="false"
                        className="w-full mx-auto absolute bottom-0 left-0 right-0"
                    />

                    <div
                        ref={containerRef}
                        className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex z-10 overflow-hidden py-10 -space-x-10"
                    >
                        <motion.div
                            ref={rowRef}
                            className="flex -space-x-10 cursor-grab touch-pan-y"
                            drag="x"
                            dragConstraints={{ left: -maxDrag, right: 0 }}
                            dragElastic={0.08}
                            dragMomentum={true}
                            whileTap={{ cursor: 'grabbing' }}
                        >
                            {/* cards */}
                            {testimonials.map((testimonial, i) => {
                                const { id, src, clientName, clientDisk, clientComment } =
                                    testimonial;
                                return (
                                    <div
                                        key={i}
                                        className={`text-custom-black w-100 h-100 ${i % 2 === 0 ? 'bg-custom-primary -rotate-6 -mt-2' : 'bg-custom-white rotate-6'} rounded-md p-9 flex flex-col items-start justify-between shrink-0 select-none my-10 hover:z-30`}
                                    >
                                        <h5 className="text-2xl leading-8 tracking-wide">
                                            &quot;{clientComment}&quot;
                                        </h5>

                                        <div className="flex items-center justify-between w-full">
                                            <div className="space-y-2">
                                                <p className="text-sm tracking-wider text-custom-dark-gray">
                                                    {clientDisk}
                                                </p>
                                                <h6 className="text-base font-normal tracking-wide">
                                                    {clientName}
                                                </h6>
                                            </div>

                                            <Image
                                                src={src}
                                                alt="client"
                                                className={`w-15 h-15 rounded-full border-4 ${i % 2 === 0 ? 'border-custom-white' : 'border-custom-primary'}`}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
