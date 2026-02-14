'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

import logo from '../../../public/logo.png';
import Link from 'next/link';
import { motion } from 'motion/react';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScrollEffect = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScrollEffect);

        return () => window.addEventListener('scroll', handleScrollEffect);
    }, []);

    return (
        <motion.header
            initial={{
                y: -100,
                opacity: 0,
            }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
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
                        {navItems.map((item, i) => {
                            return (
                                <motion.li
                                    key={i}
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    className="relative h-3.5 overflow-hidden cursor-pointer"
                                >
                                    <div className="relative grid">
                                        <motion.span
                                            variants={{
                                                rest: { y: 0 },
                                                hover: { y: '-100%' },
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: 'easeInOut',
                                            }}
                                            className="inline-block uppercase text-sm font-light leading-3.5 tracking-[2px]"
                                        >
                                            <Link href={item.href}>{item.label}</Link>
                                        </motion.span>
                                        <motion.span
                                            variants={{
                                                rest: { y: '100%' },
                                                hover: { y: 0 },
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: 'easeInOut',
                                            }}
                                            className="inline-block uppercase text-sm font-light leading-3.5 tracking-[2px] absolute top-0 left-0"
                                        >
                                            <Link href={item.href}>{item.label}</Link>
                                        </motion.span>
                                    </div>

                                    <span>
                                        <Link
                                            href={item.href}
                                            className="inline-block uppercase text-sm font-light leading-3.5 tracking-[2px]"
                                        >
                                            {item.label}
                                        </Link>
                                    </span>
                                </motion.li>
                            );
                        })}

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

                    {/* Mobile Menu */}
                    <div className="lg:hidden flex items-center gap-8">
                        <button className="text-2xl" onClick={() => setMenu(!menu)}>
                            {menu ? <CgClose /> : <HiOutlineMenuAlt3 />}
                        </button>

                        <Link
                            href={'/'}
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

            <div
                className={`bg-custom-black w-full h-screen absolute -top-300 left-0 lg:hidden ${menu ? 'opacity-100 top-20' : ' opacity-0 pointer-events-none'} z-9999 transform transition-all duration-500`}
            >
                {/* mobile menu */}
                <ul className="flex flex-col text-center items-center md:gap-8 lg:gap-8">
                    {navItems.map((item, i) => {
                        return (
                            <li key={i}>
                                <Link
                                    href={item.href}
                                    className="inline-block uppercase text-3xl sm:text-6xl  font-light leading-13 sm:leading-16 tracking-[2px] sm:tracking-wider"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </motion.header>
    );
}
