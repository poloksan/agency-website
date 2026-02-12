import Image from "next/image";
import React from "react";
import aboutImg from "@/assets/images/about-img.png";
import arrowIcon from "@/assets/icons/arrow-icon.svg";

export default function AboutImage() {
    return (
        <div className="relative">
            <div className="absolute bottom-20 -left-5 lg:-left-10 h-32 md:h-36 max-w-26 md:max-w-30 p-5 text-custom-primary/80 backdrop-blur-md bg-transparent border-2 border-custom-primary rounded-2xl flex flex-col items-start justify-center">
                <h2 className="text-4xl lg:text-[46px] font-bold -ml-1">7k+</h2>
                <p className=" uppercase text-[10px] tracking-[0.5px] leading-3 lg:leading-5 mt-2 lg:-mt-2 -ml-1">
                    Satisfaction Clients
                </p>
            </div>
            <div className="w-36 md:w-60 h-10 absolute top-0 left-0 bg-custom-black rounded-br-2xl">
                <Image
                    src={arrowIcon}
                    alt="arrow icon"
                    draggable="false"
                    width={20}
                    className="absolute top-0 -right-4.5 lg:-right-4"
                />
                <Image
                    src={arrowIcon}
                    alt="arrow icon"
                    draggable="false"
                    width={20}
                    className="absolute -bottom-4.5 left-0"
                />
            </div>
            <div className="w-36 md:w-60 h-10 absolute bottom-0 right-0 bg-custom-black rounded-tl-2xl rounded-br-2xl">
                <Image
                    src={arrowIcon}
                    alt="arrow icon"
                    draggable="false"
                    width={20}
                    className="absolute -top-4 right-0 rotate-180"
                />
                <Image
                    src={arrowIcon}
                    alt="arrow icon"
                    draggable="false"
                    width={20}
                    className="absolute bottom-0 -left-4 rotate-180"
                />
            </div>
            <Image
                src={aboutImg}
                alt="about us"
                width={700}
                height={700}
                className="rounded-2xl"
            />
        </div>
    );
}
