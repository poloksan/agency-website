'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import logo from '../../../public/logo.png';

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

const container = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.8,
            staggerChildren: 1,
        },
    },
};

const item = {
    hidden: { y: 100, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
    },
};

export default function Footer() {
    const pathname = usePathname();

    return (
        <motion.footer variants={container} initial="hidden" whileInView="show" className="w-full">
            <div className="py-8 md:py-11 w-full max-w-360 mx-auto px-8 sm:px-16">
                {/* Top */}
                <div className="flex flex-col md:flex-row items-center text-center md:text-start md:items-start justify-between gap-10 mb-14">
                    {/* Brand */}
                    <motion.div variants={item}>
                        <Link href="/" className="inline-flex items-center gap-1">
                            <span className="text-2xl font-extrabold tracking-tight">
                                <Image src={logo} alt="logo" draggable="false" width={160} />
                            </span>
                        </Link>
                    </motion.div>

                    {/* Link groups */}
                    {groups.map((group) => (
                        <motion.div variants={item} key={group.title} className="flex flex-col">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-custom-white">
                                {group.title}
                            </p>

                            <ul className="mt-5 space-y-3 md:space-y-4">
                                {group.links.map((link, i) => {
                                    const isActive =
                                        link.href === '/'
                                            ? pathname === '/'
                                            : pathname?.startsWith(link.href);

                                    return (
                                        <li
                                            key={i}
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
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-custom-primary/80" />

                {/* Bottom */}
                <div className="flex flex-col gap-2 md:gap-4 py-7 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between items-center">
                    <p>&copy; 2025 AGENCFIRE. All Rights Reserved.</p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <p className="hover:text-white transition-colors">Powered By Webflow</p>
                        <p className="hover:text-white transition-colors">Built By Rick Mummery</p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
