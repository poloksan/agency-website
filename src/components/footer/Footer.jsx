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
            delayChildren: 1,
            staggerChildren: 0.3,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

export default function Footer() {
    const pathname = usePathname();

    return (
        <motion.footer
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: true,
                amount: 0.2,
            }}
            className="w-full"
        >
            <div className="p-8 sm:px-16 md:py-10 w-full max-w-360 mx-auto">
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
                <motion.div variants={item} className="h-px w-full bg-custom-primary/80" />

                {/* Bottom */}
                <motion.div
                    variants={item}
                    className="flex flex-col gap-2 md:gap-4 py-7 text-sm md:text-base text-white/70 sm:flex-row sm:items-center sm:justify-between text-center items-center"
                >
                    <p>&copy; 2025 AGENCFIRE. All Rights Reserved.</p>

                    <div className="flex text-xs md:text-base gap-x-6 gap-y-2">
                        <p className="hover:text-white transition-colors cursor-default">
                            Powered By Webflow
                        </p>
                        <p className="hover:text-white transition-colors cursor-default">
                            Built By Rick Mummery
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
}
