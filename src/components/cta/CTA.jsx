'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import MoveBtn from '../moveBtn/MoveBtn';

export default function CTA() {
    // desktop button ref (lg:block)
    const desktopBtnRef = useRef(null);
    // mobile button ref (lg:hidden)
    const mobileBtnRef = useRef(null);

    useEffect(() => {
        const desktopBtn = desktopBtnRef.current;
        const mobileBtn = mobileBtnRef.current;
        const section = desktopBtn?.closest('section');

        if (!section || !desktopBtn) return;

        // ─────────────────────────────────────────────────────
        // 1️⃣ Mouse follow animation — spring effect
        //    motion এ ছিল:
        //      useMotionValue(mouseX, mouseY) → useSpring(damping:25, stiffness:100)
        //      style={{ x: springX, y: springY, position:'absolute', left:-120, top:-100 }}
        //
        //    GSAP এ: mousemove event + gsap.to() এ duration দিয়ে spring simulate করা হয়েছে
        //    (duration:0.4, ease:'power2.out' → damping:25, stiffness:100 এর equivalent feel)
        // ─────────────────────────────────────────────────────
        const handleMouseMove = (e) => {
            const rect = section.getBoundingClientRect();

            const x = e.clientX - rect.left - 200; // motion এর মতো same offset
            const y = e.clientY - rect.top - 80;

            gsap.to(desktopBtn, {
                x,
                y,
                duration: 0.4, // useSpring damping:25, stiffness:100 এর smooth feel
                ease: 'power2.out',
                overwrite: 'auto', // প্রতি mousemove এ আগেরটা cancel করে নতুন target এ যায়
            });
        };

        section.addEventListener('mousemove', handleMouseMove);

        // initial position — motion এ ছিল left:-120, top:-100
        gsap.set(desktopBtn, {
            x: 300,
            y: 220,
            position: 'absolute',
            left: -120,
            top: -100,
            zIndex: 100,
        });

        return () => {
            section.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const desktopBtn = desktopBtnRef.current;
        const mobileBtn = mobileBtnRef.current;

        // ─────────────────────────────────────────────────────
        // 2️⃣ Desktop button hover — whileHover scale:1.1 / whileTap scale:0.9
        // ─────────────────────────────────────────────────────
        if (desktopBtn) {
            desktopBtn.addEventListener('mouseenter', () => {
                gsap.to(desktopBtn, { scale: 1.1, duration: 0.2, ease: 'power2.out' });
            });
            desktopBtn.addEventListener('mouseleave', () => {
                gsap.to(desktopBtn, { scale: 1, duration: 0.2, ease: 'power2.out' });
            });
            desktopBtn.addEventListener('mousedown', () => {
                gsap.to(desktopBtn, { scale: 0.9, duration: 0.1, ease: 'power2.out' });
            });
            desktopBtn.addEventListener('mouseup', () => {
                gsap.to(desktopBtn, { scale: 1.1, duration: 0.1, ease: 'power2.out' });
            });
        }

        // ─────────────────────────────────────────────────────
        // 3️⃣ Mobile button hover — same whileHover / whileTap
        // ─────────────────────────────────────────────────────
        if (mobileBtn) {
            mobileBtn.addEventListener('mouseenter', () => {
                gsap.to(mobileBtn, { scale: 1.1, duration: 0.2, ease: 'power2.out' });
            });
            mobileBtn.addEventListener('mouseleave', () => {
                gsap.to(mobileBtn, { scale: 1, duration: 0.2, ease: 'power2.out' });
            });
            mobileBtn.addEventListener('mousedown', () => {
                gsap.to(mobileBtn, { scale: 0.9, duration: 0.1, ease: 'power2.out' });
            });
            mobileBtn.addEventListener('mouseup', () => {
                gsap.to(mobileBtn, { scale: 1.1, duration: 0.1, ease: 'power2.out' });
            });
        }
    }, []);

    return (
        <section
            id="#"
            className="w-full py-10 md:py-14 lg:p-22 relative overflow-hidden grid place-items-center bg-linear-to-r from-custom-primary/10 via-custom-black to-custom-primary/10"
        >
            {/* Grid background layer */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[20px_20px] md:bg-size-[40px_40px] opacity-60" />

            {/* Content */}
            <div className="relative w-full p-5 sm:px-16 md:py-10 max-w-360 mx-auto flex flex-col items-center justify-center gap-3 md:gap-6">
                <h1 className="text-2xl sm:text-5xl xl:text-7xl font-bold uppercase tracking-tight text-center text-custom-light-gray select-none">
                    Let&apos;s Create <br />
                    <span className="text-custom-primary/90">Something Impactful.</span>
                </h1>

                {/* Desktop — mouse follow + hover/tap scale */}
                <div ref={desktopBtnRef} className="hidden lg:block">
                    <MoveBtn />
                </div>

                {/* Mobile — hover/tap scale only */}
                <div ref={mobileBtnRef} className="lg:hidden">
                    <MoveBtn />
                </div>
            </div>
        </section>
    );
}
