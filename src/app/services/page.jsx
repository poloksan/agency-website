import React from 'react';
import { GrUserManager } from 'react-icons/gr';
import { HiMiniArrowRight } from 'react-icons/hi2';

const services = [
    {
        id: 1,
        title: 'Tech Innovation',
        para: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
    },
    {
        id: 2,
        title: 'Network security',
        para: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
    },
    {
        id: 3,
        title: 'Data Analysis',
        para: '',
    },

    {
        id: 4,
        title: 'Tech Innovation',
        para: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
    },
    {
        id: 5,
        title: 'Network security',
        para: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
    },
    {
        id: 6,
        title: 'Data Analysis',
        para: '',
    },
];

export default function ServicesSection() {
    return (
        <section className="w-full ">
            <div className="w-full max-w-360 h-auto mx-auto px-8 sm:px-16 xl:py-30 flex flex-col items-center justify-center xl:gap-12 relative">
                <h1>service</h1>

                <div className="">
                    <div className="w-full max-w-[500px] space-y-12 bg-custom-black lg:p-12.5 border border-custom-white/15 rounded-[40px]">
                        {/* icon */}
                        <div className="w-full flex items-center justify-between">
                            <div className="w-28 h-28 rounded-full bg-custom-dark-gray/30 grid place-items-center">
                                <GrUserManager className="text-custom-primary text-5xl" />
                            </div>

                            <p>01</p>
                        </div>

                        {/* text content */}
                        <div>
                            <h4>Tech Information</h4>
                            <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when
                            </p>
                        </div>

                        {/* btn */}
                        <div>
                            <HiMiniArrowRight />
                            <button>Read More</button>
                            <HiMiniArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
