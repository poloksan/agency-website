"use client";
import React from "react";

import { RiArrowRightDoubleFill } from "react-icons/ri";
import HeadingBorderText from "@/components/headingBorderText/page";
import workOne from "@/assets/images/work-one.png";
import workTwo from "@/assets/images/work-two.png";
import workThree from "@/assets/images/work-three.png";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
    return (
        <section className="w-full">
            <div className="w-full max-w-360 mx-auto px-8 flex flex-col items-start justify-center relative border">
                {/* under text */}
                <div className="text-center -z-999">
                    <HeadingBorderText text={"featured"} />

                    <h2 className="uppercase text-[192px] font-semibold tracking-tight -mt-16 pointer-events-none">
                        works
                    </h2>

                    <h3 className="max-w-300 text-[136px] font-bold tracking-normal leading-24 text-custom-dark-gray uppercase">
                        from <br /> concept to creation
                    </h3>
                </div>

                {/* image */}

                <div className="w-full flex flex-col items-center gap-16 z-999">
                    {/* card 1 */}
                    <Link href={"/"}>
                        <div className="w-full inline-block max-w-180 relative bottom-100 left-76 object-cover group overflow-hidden rounded-lg">
                            <Image
                                src={workOne}
                                alt="portfolio work"
                                className="object-cover bg-center bg-cover rounded-lg brightness-90 group-hover:scale-110 duration-500"
                            />

                            <div className="w-full text-center absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <h2 className="w-full text-center uppercase font-bold text-5xl">
                                    Website Redesign
                                </h2>

                                <div className="flex items-center justify-center gap-4 text-sm uppercase">
                                    <h6 className="bg-custom-black/80 px-4 py-1 font-bold rounded-full">
                                        design
                                    </h6>
                                    <p className="flex items-center gap-2">
                                        View Details
                                        <RiArrowRightDoubleFill className="text-2xl text-custom-primary" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* card 2 */}
                    <Link href={"/"}>
                        <div className="w-full inline-block max-w-180 relative bottom-100 right-76 object-cover group overflow-hidden rounded-lg">
                            <Image
                                src={workOne}
                                alt="portfolio work"
                                className="object-cover bg-center bg-cover rounded-lg brightness-90 group-hover:scale-110 duration-500"
                            />

                            <div className="w-full text-center absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <h2 className="w-full text-center uppercase font-bold text-5xl">
                                    Website Redesign
                                </h2>

                                <div className="flex items-center justify-center gap-4 text-sm uppercase">
                                    <h6 className="bg-custom-black/80 px-4 py-1 font-bold rounded-full">
                                        design
                                    </h6>
                                    <p className="flex items-center gap-2">
                                        View Details
                                        <RiArrowRightDoubleFill className="text-2xl text-custom-primary" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* card 3 */}
                    <Link href={"/"}>
                        <div className="w-full inline-block max-w-180 relative bottom-100 object-cover group overflow-hidden rounded-lg">
                            <Image
                                src={workOne}
                                alt="portfolio work"
                                className="object-cover bg-center bg-cover rounded-lg brightness-90 group-hover:scale-110 duration-500"
                            />

                            <div className="w-full text-center absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <h2 className="w-full text-center uppercase font-bold text-5xl">
                                    Website Redesign
                                </h2>

                                <div className="flex items-center justify-center gap-4 text-sm uppercase">
                                    <h6 className="bg-custom-black/80 px-4 py-1 font-bold rounded-full">
                                        design
                                    </h6>
                                    <p className="flex items-center gap-2">
                                        View Details
                                        <RiArrowRightDoubleFill className="text-2xl text-custom-primary" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
