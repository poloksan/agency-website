import React from 'react';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

export default function MoveBtn() {
    return (
        <Link
            href={'/'}
            className="border-2 border-custom-white/50 w-25 h-25 md:w-32 md:h-32 xl:w-40 xl:h-40 rounded-full flex flex-col items-center justify-center gap-2 text-sm md:text-xl font-semibold transition-all duration-500 group bg-custom-black/20 backdrop-blur-sm"
        >
            <BsArrowUpRight className="text-lg xl:text-2xl group-hover:rotate-45 duration-500" />
            <button type="button" className="cursor-pointer">
                Let&apos;s Start
            </button>
        </Link>
    );
}
