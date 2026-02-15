'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import MoveBtn from '../moveBtn/MoveBtn';

export default function CTA() {
    const mouseX = useMotionValue(300);
    const mouseY = useMotionValue(220);

    const springConfig = { damping: 25, stiffness: 100 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left - 200;
        const y = e.clientY - rect.top - 80;

        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="w-full py-10 md:py-14 lg:p-20 relative overflow-hidden grid place-items-center bg-linear-to-r from-custom-primary/10 via-custom-black to-custom-primary/10"
        >
            {/* Grid background layer */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[20px_20px] md:bg-size-[40px_40px] opacity-60" />

            {/* Content */}
            <div className="relative w-full p-5 sm:px-16 md:py-10 max-w-360 mx-auto flex flex-col items-center justify-center gap-3 md:gap-6">
                <h1 className="text-2xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-center text-custom-light-gray select-none">
                    Let&apos;s Create <br />
                    <span className="text-custom-primary/90">Something Impactful.</span>
                </h1>

                {/* Animated Button Container */}
                <motion.div
                    style={{
                        x: springX,
                        y: springY,
                        position: 'absolute',
                        left: -120,
                        top: -100,
                        z: 100,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="hidden lg:block"
                >
                    <MoveBtn />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="lg:hidden"
                >
                    <MoveBtn />
                </motion.div>
            </div>
        </div>
    );
}
