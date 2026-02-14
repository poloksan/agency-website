// components/Contact.jsx
import React from 'react';

export default function Contact() {
    return (
        <section className="relative overflow-hidden bg-[#151515] text-white">
            {/* subtle background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 -top-40 h-130 w-130 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute -right-40 -bottom-40 h-130 w-130 rounded-full bg-white/5 blur-3xl" />
            </div>

            {/* small corner dots */}
            <span className="pointer-events-none absolute left-6 top-6 h-2 w-2 rounded-full bg-white/80" />
            <span className="pointer-events-none absolute right-6 top-6 h-2 w-2 rounded-full bg-white/80" />

            <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                    {/* LEFT */}
                    <div>
                        <h2 className="text-5xl font-light leading-[1.05] tracking-tight lg:text-6xl">
                            <span className="block">LET&apos;S MAKE YOUR</span>
                            <span className="block">
                                <span className="font-semibold">BRAND</span>{' '}
                                <span className="text-white/80">BRILLIANT!</span>
                            </span>
                        </h2>

                        <p className="mt-6 max-w-md text-sm leading-6 text-white/70">
                            If you would like to work with us or just want to get in touch,
                            we&apos;d love to hear from you!
                        </p>

                        <div className="mt-12 grid max-w-md grid-cols-2 gap-10">
                            <div>
                                <p className="text-base font-semibold">Address</p>
                                <p className="mt-4 text-sm leading-6 text-white/70">
                                    Besòs 1, 08174 Sant Cugat del
                                    <br />
                                    Vallès, Barcelona
                                </p>
                            </div>

                            <div>
                                <p className="text-base font-semibold">Email</p>
                                <a
                                    href="mailto:support@uithemez.com"
                                    className="mt-4 inline-block text-sm text-white/70 hover:text-white"
                                >
                                    Support@uithemez.com
                                </a>
                            </div>
                        </div>

                        <a
                            href="tel:+18408412569"
                            className="mt-12 inline-block text-3xl font-semibold text-emerald-400 underline decoration-emerald-400 underline-offset-8"
                        >
                            +1 840 841 25 69
                        </a>

                        <div className="mt-16 flex flex-wrap gap-10 text-sm text-white/85">
                            <a href="#" className="hover:text-white">
                                Facebook
                            </a>
                            <a href="#" className="hover:text-white">
                                Twitter
                            </a>
                            <a href="#" className="hover:text-white">
                                LinkedIn
                            </a>
                            <a href="#" className="hover:text-white">
                                Instagram
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:pt-2">
                        <h3 className="text-4xl font-semibold tracking-tight">
                            SEND <span className="font-light text-white/80">A</span> MESSAGE
                        </h3>

                        <form className="mt-10">
                            <div className="grid gap-10 lg:grid-cols-2">
                                <Field label="Name">
                                    <input
                                        type="text"
                                        className="w-full bg-transparent pb-3 text-white outline-none placeholder:text-white/30"
                                        placeholder=""
                                    />
                                </Field>

                                <Field label="Email">
                                    <input
                                        type="email"
                                        className="w-full bg-transparent pb-3 text-white outline-none placeholder:text-white/30"
                                        placeholder=""
                                    />
                                </Field>
                            </div>

                            <div className="mt-10">
                                <Field label="Subject">
                                    <input
                                        type="text"
                                        className="w-full bg-transparent pb-3 text-white outline-none placeholder:text-white/30"
                                        placeholder=""
                                    />
                                </Field>
                            </div>

                            <div className="mt-10">
                                <Field label="Message">
                                    <textarea
                                        rows={5}
                                        className="w-full resize-none bg-transparent pb-3 text-white outline-none placeholder:text-white/30"
                                        placeholder=""
                                    />
                                </Field>
                            </div>

                            <button
                                type="submit"
                                className="mt-12 w-full rounded-full border border-white/70 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                            >
                                Let&apos;s Talk
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Field({ label, children }) {
    return (
        <label className="block">
            <span className="mb-3 block text-sm text-white/40">{label}</span>
            <div className="border-b border-white/20 transition focus-within:border-white/60">
                {children}
            </div>
        </label>
    );
}
