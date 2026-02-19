'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import logo from '../../../public/logo.png';

gsap.registerPlugin(ScrollTrigger);

const groups = [
    {
        title: 'Main',
        links: [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Works', href: '/works' },
        ],
    },
    {
        title: 'Pages',
        links: [
            { label: 'Contact', href: '/contact' },
            { label: 'Packages', href: '/packages' },
            { label: 'Terms & Conditions', href: '/terms' },
            { label: 'Privacy Policy', href: '/privacy' },
        ],
    },
    {
        title: 'Utilities',
        links: [
            { label: 'Style Guide', href: '/style-guide' },
            { label: 'Instructions', href: '/instructions' },
            { label: 'Licenses', href: '/licenses' },
            { label: 'Changelog', href: '/changelog' },
        ],
    },
];

export default function Footer() {
    const pathname = usePathname();
    const footerRef = useRef(null);

    // stagger করা সব item এর ref
    const logoRef = useRef(null);
    const groupRefs = useRef([]);
    const dividerRef = useRef(null);
    const bottomRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // সব stagger item একসাথে array তে রাখি
            // motion এ ছিল: staggerChildren:0.3, delayChildren:1
            // item: y:20, opacity:0 → y:0, opacity:1, duration:0.5
            const allItems = [
                logoRef.current,
                ...groupRefs.current,
                dividerRef.current,
                bottomRef.current,
            ].filter(Boolean);

            gsap.fromTo(
                allItems,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.out',
                    stagger: 0.3, // staggerChildren: 0.3
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 80%', // viewport amount:0.2 equivalent
                        toggleActions: 'play none none none', // once:true equivalent
                    },
                },
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef}>
            <div className="p-8 sm:px-16 md:py-10 w-full max-w-360 mx-auto">
                {/* Top */}
                <div className="flex flex-col md:flex-row items-center text-center md:text-start md:items-start justify-between gap-10 mb-14">
                    {/* Brand */}
                    <div ref={logoRef}>
                        <Link href="/" className="inline-flex items-center gap-1">
                            <span className="text-2xl font-extrabold tracking-tight">
                                <Image src={logo} alt="logo" draggable="false" width={160} />
                            </span>
                        </Link>
                    </div>

                    {/* Link groups */}
                    {groups.map((group, i) => (
                        <div
                            ref={(el) => (groupRefs.current[i] = el)}
                            key={group.title}
                            className="flex flex-col"
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-custom-white">
                                {group.title}
                            </p>

                            <ul className="mt-5 space-y-3 md:space-y-4">
                                {group.links.map((link, j) => {
                                    const isActive =
                                        link.href === '/'
                                            ? pathname === '/'
                                            : pathname?.startsWith(link.href);

                                    return (
                                        <li
                                            key={j}
                                            className="text-base transition-all duration-400 hover:translate-x-2 cursor-pointer"
                                        >
                                            <Link
                                                href={link.href}
                                                className={[
                                                    '',
                                                    isActive
                                                        ? 'text-custom-primary'
                                                        : 'text-custom-light-gray hover:text-custom-primary',
                                                ].join(' ')}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div ref={dividerRef} className="h-px w-full bg-custom-primary/80" />

                {/* Bottom */}
                <div
                    ref={bottomRef}
                    className="flex flex-col gap-2 md:gap-4 pt-7 text-sm md:text-base text-custom-white/70 sm:flex-row sm:items-center sm:justify-between text-center items-center"
                >
                    <p>&copy; 2025 AGENCFIRE. All Rights Reserved.</p>

                    <div className="flex text-xs md:text-base gap-x-6 gap-y-2">
                        <p className="hover:text-custom-white transition-colors cursor-default">
                            Powered By Webflow
                        </p>
                        <p className="hover:text-custom-white transition-colors cursor-default">
                            Built By Rick Mummery
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
