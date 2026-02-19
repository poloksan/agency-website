'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import logo from '../../../public/logo.png';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Works', href: '/works' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const headerRef = useRef(null);

    // nav item এর দুইটা span এর জন্য ref array
    // প্রতিটা item এ দুইটা span — [0] উপরের, [1] নিচের
    const spanTopRefs = useRef([]);
    const spanBottomRefs = useRef([]);

    // ── scroll effect (unchanged) ──
    useEffect(() => {
        const handleScrollEffect = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScrollEffect);
        return () => window.removeEventListener('scroll', handleScrollEffect);
    }, []);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // ─────────────────────────────────────────────────
            // 1️⃣ Header entrance animation
            //    motion এ: initial y:-100, opacity:0 → animate y:0, opacity:1
            //    transition: duration:0.4, delay:0.2
            // ─────────────────────────────────────────────────
            gsap.fromTo(
                headerRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, delay: 0.2, ease: 'power2.out' },
            );

            // ─────────────────────────────────────────────────
            // 2️⃣ Nav item hover — text slide up animation
            //    motion এ ছিল:
            //      উপরের span: rest→ y:0, hover→ y:'-100%'
            //      নিচের span: rest→ y:'100%', hover→ y:0
            //      transition: duration:0.3, ease:'easeInOut'
            // ─────────────────────────────────────────────────
            navItems.forEach((_, i) => {
                const topSpan = spanTopRefs.current[i];
                const bottomSpan = spanBottomRefs.current[i];
                if (!topSpan || !bottomSpan) return;

                const li = topSpan.closest('li');

                // নিচের span কে শুরুতে y:100% এ রাখো
                gsap.set(bottomSpan, { y: '100%' });

                li.addEventListener('mouseenter', () => {
                    // উপরের span উপরে চলে যাবে
                    gsap.to(topSpan, { y: '-100%', duration: 0.3, ease: 'power2.inOut' });
                    // নিচের span উপরে উঠে আসবে
                    gsap.to(bottomSpan, { y: '0%', duration: 0.3, ease: 'power2.inOut' });
                });

                li.addEventListener('mouseleave', () => {
                    // উপরের span আবার নিজের জায়গায়
                    gsap.to(topSpan, { y: '0%', duration: 0.3, ease: 'power2.inOut' });
                    // নিচের span আবার নিচে চলে যাবে
                    gsap.to(bottomSpan, { y: '100%', duration: 0.3, ease: 'power2.inOut' });
                });
            });
        }, headerRef);

        return () => ctx.revert();
    }, []);

    return (
        <header
            ref={headerRef}
            className={`w-full fixed top-0 right-0 left-0 z-99999 border-b-[0.5px] border-custom-white/30 duration-300 transition-colors ease-linear ${isScrolled ? 'bg-custom-black/90 backdrop-blur-md' : 'bg-transparent'}`}
        >
            <div className="w-full max-w-360 mx-auto px-8 sm:px-16 py-7 md:py-10 relative">
                <nav className="w-full flex items-center justify-between">
                    <Link href={'/'} className="inline-block">
                        <Image
                            src={logo}
                            alt="logo image"
                            priority
                            draggable="false"
                            className="w-37.5 h-auto"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center md:gap-8 lg:gap-8">
                        {navItems.map((item, i) => (
                            <li key={i} className="relative h-3.5 overflow-hidden cursor-pointer">
                                <div className="relative grid">
                                    {/* উপরের span — hover এ উপরে চলে যাবে */}
                                    <span
                                        ref={(el) => (spanTopRefs.current[i] = el)}
                                        className="inline-block uppercase text-sm font-light leading-3.5 tracking-[2px]"
                                    >
                                        <Link href={item.href}>{item.label}</Link>
                                    </span>

                                    {/* নিচের span — hover এ নিচ থেকে উপরে আসবে */}
                                    <span
                                        ref={(el) => (spanBottomRefs.current[i] = el)}
                                        className="inline-block uppercase text-sm font-light leading-3.5 tracking-[2px] absolute top-0 left-0"
                                    >
                                        <Link href={item.href}>{item.label}</Link>
                                    </span>
                                </div>

                                <span>
                                    <Link
                                        href={item.href}
                                        className="inline-block uppercase text-sm font-light leading-3.5 tracking-[2px]"
                                    >
                                        {item.label}
                                    </Link>
                                </span>
                            </li>
                        ))}

                        <Link
                            href={'/'}
                            className="inline-block uppercase text-xl font-light leading-3.5 tracking-[2px] relative group"
                        >
                            <PiShoppingCartSimpleFill className="group-hover:scale-150 group-hover:-rotate-12 group-hover:text-custom-primary duration-300 transform transition-transform" />
                            <span className="bg-custom-black rounded-full p-0.5 absolute -top-3 -right-2 text-xs">
                                0
                            </span>
                        </Link>
                    </ul>

                    {/* Mobile Menu toggle */}
                    <div className="lg:hidden flex items-center gap-8">
                        <button type="button" className="text-2xl" onClick={() => setMenu(!menu)}>
                            {menu ? <CgClose /> : <HiOutlineMenuAlt3 />}
                        </button>

                        <Link
                            href={'/'}
                            onClick={() => setMenu(false)}
                            className="inline-block uppercase text-2xl font-light leading-3.5 tracking-[2px] relative"
                        >
                            <PiShoppingCartSimpleFill />
                            <span className="bg-custom-black rounded-full p-1 absolute -top-3 -right-2 text-xs">
                                0
                            </span>
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Mobile menu drawer (unchanged) */}
            <div
                className={`bg-custom-black w-full h-screen absolute lg:hidden pt-30 sm:pt-20 ${menu ? 'opacity-100 top-20' : 'opacity-0 -top-300 left-0 pointer-events-none'} z-9999 transform transition-all duration-500`}
            >
                <ul className="flex flex-col text-center items-center md:gap-8 lg:gap-8">
                    {navItems.map((item, i) => (
                        <li key={i}>
                            <Link
                                href={item.href}
                                onClick={() => setMenu(false)}
                                className="inline-block uppercase text-3xl sm:text-6xl font-light leading-13 sm:leading-16 tracking-[2px] sm:tracking-wider"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
