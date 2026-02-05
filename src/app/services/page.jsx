import HeadingBorderText from '@/components/headingBorderText/page';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';

const services = [
    {
        title: 'design',
        subTitle: 'Lorem ipsum dolor sit.',
    },
    {
        title: 'marketing',
        subTitle: 'Lorem ipsum dolor sit.',
    },
    {
        title: 'prototype',
        subTitle: 'Lorem ipsum dolor sit.',
    },
    {
        title: 'branding',
        subTitle: 'Lorem ipsum dolor sit.',
    },
];

export default function ServicesSection() {
    return (
        <section className="w-full overflow-hidden">
            <div className="w-full flex flex-col items-center justify-center xl:gap-12 relative">
                {/* heading */}
                <div className="w-full max-w-360 mx-auto px-8 sm:px-16 py-20 flex flex-col items-center space-y-5">
                    <HeadingBorderText text="services" />

                    <div className="w-full flex items-center justify-between">
                        <h1 className="max-w-120 text-7xl font-bold leading-20 tracking-tight">
                            Lorem ipsum dolor sit.
                        </h1>

                        <p className="w-full max-w-95 text-xl text-custom-white/70 leading-8 text-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas
                            exercitationem quaerat esse, iusto dignissimos nihil eaque id minima
                            accusamus!
                        </p>
                    </div>
                </div>

                <Marquee
                    autoFill
                    direction="right"
                    loop={0}
                    speed={70}
                    className="py-20 -mt-20 flex items-center overflow-visible"
                >
                    {/* card content */}
                    {services.map((service, i) => {
                        const { title, subTitle } = service;
                        return (
                            <div key={i} className="mx-10">
                                {/* card */}
                                <div className="relative group">
                                    {/* under card */}
                                    <div className="border-[0.5px] rounded-3xl w-110 h-110 relative ">
                                        {/* blob */}
                                        <div className="h-40 w-40 bg-custom-primary/30 rounded-full blur-[90px] absolute top-10 right-10 animate-pulse"></div>
                                        <div className="absolute bottom-10 left-10 space-y-5 pointer-events-none">
                                            <h4 className="text-7xl font-semibold capitalize">
                                                {title}
                                            </h4>
                                            <h6 className="text-lg uppercase">{subTitle}</h6>
                                        </div>
                                    </div>
                                    {/* over card */}
                                    <div className="w-110 h-110 rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-custom-black bg-custom-primary opacity-0 scale-0 origin-bottom-left group-hover:scale-100 group-hover:opacity-100 duration-600 transition-all ">
                                        {/* <div className="h-40 w-40 bg-custom-primary/30 rounded-full blur-[90px] absolute top-0 right-0 animate-pulse"></div> */}
                                        <div className="absolute top-10 right-10 space-y-5 pointer-events-none">
                                            <h4 className="text-7xl font-semibold capitalize">
                                                {title}
                                            </h4>
                                            <h6 className="text-lg uppercase">{subTitle}</h6>
                                        </div>

                                        <Link href={'/'}>
                                            <button
                                                type="button"
                                                className="border-2 px-6 py-2 text-2xl font-medium rounded-xl absolute bottom-10 left-10 cursor-pointer hover:bg-custom-black hover:text-custom-white hover:border-custom-black duration-300"
                                            >
                                                Show More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Marquee>
            </div>
        </section>
    );
}
