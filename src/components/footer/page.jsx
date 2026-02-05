'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className="bg-black text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Top */}
                <div className="flex items-start justify-between mb-14">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-1">
                            <span className="text-2xl font-extrabold tracking-tight">
                                <Image src={logo} alt="logo" width={160} />
                            </span>
                        </Link>
                    </div>

                    {/* Link groups */}
                    {groups.map((group) => (
                        <div key={group.title}>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-custom-white">
                                {group.title}
                            </p>

                            <ul className="mt-5 space-y-4">
                                {group.links.map((link) => {
                                    const isActive =
                                        link.href === '/'
                                            ? pathname === '/'
                                            : pathname?.startsWith(link.href);

                                    return (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className={[
                                                    'text-base transition-colors duration-200',
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
                <div className="h-px w-full bg-custom-primary/80" />

                {/* Bottom */}
                <div className="flex flex-col gap-4 py-7 text-lg text-white/70 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2024 AGENCFIRE. All Rights Reserved.</p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <Link href="#" className="hover:text-white transition-colors">
                            Powered By Webflow
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Built By Rick Mummery
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
