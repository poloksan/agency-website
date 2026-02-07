import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

export default function RotateText() {
    return (
        <Link
            href="/"
            title="Scroll"
            aria-label="Scroll"
            className="
        relative inline-block
        w-[120px] h-[120px]
        sm:w-[140px] sm:h-[140px]
        md:w-[180px] md:h-[180px]
        go-down-btn
      "
        >
            {/* Rotating Text */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
            >
                <path
                    id="textPath"
                    fill="none"
                    d="M89.322,50.197
          c0,22.09-17.91,40-40,40
          c-22.089,0-40-17.91-40-40
          c0-22.089,17.911-40,40-40
          C71.412,10.197,89.322,28.108,89.322,50.197z"
                />

                {/* Text size responsive */}
                <text
                    className="
            rotate-text fill-custom-white uppercase
            text-[8px] sm:text-[9px] md:text-[12px]
            tracking-[2px] md:tracking-[3px]
          "
                >
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

            {/* Center Arrow (responsive) */}
            <div
                className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-[#C9F31D] rounded-full
          p-4 sm:p-5 md:p-6
          transition-transform duration-300
          hover:rotate-45
        "
            >
                <BsArrowUpRight className="text-custom-black text-3xl sm:text-4xl md:text-5xl" />
            </div>
        </Link>
    );
}
