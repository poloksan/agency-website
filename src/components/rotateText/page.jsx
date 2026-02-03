import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

export default function RotateText() {
    return (
        <Link
            href="/"
            title="Scroll"
            className="relative inline-block w-[180px] h-[180px] go-down-btn"
        >
            {/* Rotating Text */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
            >
                {/* Circle path */}
                <path
                    id="textPath"
                    fill="none"
                    d="M89.322,50.197
             c0,22.09-17.91,40-40,40
             c-22.089,0-40-17.91-40-40
             c0-22.089,17.911-40,40-40
             C71.412,10.197,89.322,28.108,89.322,50.197z"
                />

                {/* Rotating text */}
                <text className="rotate-text fill-custom-white">
                    <textPath href="#textPath">
                        <tspan x="10">LANDING&nbsp;&nbsp;</tspan>
                        <tspan x="47" dx="30">
                            DIGITAL&nbsp;&nbsp;
                        </tspan>
                        <tspan x="77" dx="60">
                            AGENCY&nbsp;&nbsp;
                        </tspan>
                        <tspan x="107" dx="90">
                            &nbsp;&nbsp;2001.
                        </tspan>
                    </textPath>
                </text>
            </svg>

            {/* Centered Arrow Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C9F31D] p-6 rounded-full hover:rotate-45 duration-400 transition-transform">
                <BsArrowUpRight className=" text-custom-black text-5xl rounded-full z-10" />
            </div>
        </Link>
    );
}
