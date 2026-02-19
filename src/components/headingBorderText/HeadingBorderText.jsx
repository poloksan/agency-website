'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function HeadingBorderText({ text }) {
    const h5Ref = useRef(null);

    useGSAP(() => {
        // ─────────────────────────────────────────────────────
        // motion এ ছিল:
        //   initial: opacity:0, scale:0
        //   whileInView: opacity:1, scale:1
        //   viewport: once:true, amount:'all'  → element পুরোটা দেখা গেলে trigger
        //   transition: duration:1, scale: spring bounce:0.5, visualDuration:0.8
        // ─────────────────────────────────────────────────────
        gsap.fromTo(
            h5Ref.current,
            { opacity: 0, scale: 0 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'elastic.out(1, 0.5)', // spring bounce:0.5 equivalent
                scrollTrigger: {
                    trigger: h5Ref.current,
                    start: 'top 100%', // amount:'all' → element পুরোটা দেখা গেলে
                    toggleActions: 'play none none none', // once:true equivalent
                },
            },
        );
    }, []);

    return (
        <h5
            ref={h5Ref}
            className="border-2 border-custom-primary/50 inline-block px-6 py-2 rounded-full text-custom-light-gray text-[10px] sm:text-xs uppercase select-none shadow-amber-400"
        >
            {text}
        </h5>
    );
}
