import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';

const EMAIL = 'iamazhar0807@gmail.com';
const EMAIL_SUBJECT = 'Portfolio Inquiry';

const Hero = ({ startAnimation = true }) => {
    const emailLink = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;

    return (
        <div className="min-h-screen bg-transparent relative text-gray-900 font-sans selection:bg-gray-200 flex flex-col overflow-hidden snap-section">
            {/* Skip to content link for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#1A1A1A] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A]"
            >
                Skip to main content
            </a>

            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 py-4 max-w-[1400px] mx-auto w-full shrink-0" role="navigation" aria-label="Main navigation">
            </nav>

            {/* Main Content */}
            <main id="main-content" className="flex-1 max-w-[1400px] mx-auto px-2 sm:px-6 w-full flex flex-col justify-center items-center text-center pb-20 relative">

                {/* Available for work badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-4 left-6 lg:top-auto lg:bottom-12 lg:left-8 inline-flex items-center gap-2 bg-[#E6F7F8] px-3 py-1.5 rounded-full z-10"
                >
                    <span className="w-1.5 h-1.5 bg-[#008F96] rounded-full"></span>
                    <span className="text-[#008F96] text-xs font-bold tracking-widest uppercase">AVAILABLE FOR WORK</span>
                </motion.div>

                {/* Main Typography */}
                <div className="flex flex-col items-center leading-none mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 bg-gray-100/50 backdrop-blur-sm border border-gray-200 px-6 py-2 rounded-full"
                    >
                        <span className="text-gray-600 font-medium text-sm sm:text-base tracking-wide">Hi, My Name is Mohammad Azhar and I'am a</span>
                    </motion.div>

                    <div className="overflow-hidden px-4 pb-2">
                        <h1 className="font-['Anton'] text-[18vw] sm:text-[15vw] lg:text-[14vw] tracking-tighter text-[#1A1A1A] uppercase leading-[0.9] whitespace-nowrap flex justify-center">
                            {"WEB DEVELOPER".split('').map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={startAnimation ? { y: 0 } : { y: "100%" }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.76, 0, 0.24, 1],
                                        delay: 0.1 + index * 0.03
                                    }}
                                    className="inline-block"
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </motion.span>
                            ))}
                        </h1>
                    </div>

                    <div className="relative overflow-hidden px-4 pb-2">
                        <h1
                            className="font-['Anton'] text-[18vw] sm:text-[15vw] lg:text-[14vw] tracking-tighter text-transparent uppercase leading-[0.9] whitespace-nowrap flex justify-center"
                            style={{ WebkitTextStroke: '2px #1A1A1A' }}
                        >
                            {"& DESIGNER".split('').map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={startAnimation ? { y: 0 } : { y: "100%" }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.76, 0, 0.24, 1],
                                        delay: 0.2 + index * 0.03
                                    }}
                                    className="inline-block"
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </motion.span>
                            ))}
                        </h1>
                    </div>
                </div>


                {/* CTA Buttons */}
                <div className="flex flex-row justify-center gap-4 w-full sm:w-auto px-4 items-center">
                    <motion.a
                        href={emailLink}
                        initial={{ opacity: 0, y: 20 }}
                        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-[#1A1A1A] text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full font-medium hover:bg-black transition-all duration-300 cursor-pointer w-auto text-center min-w-[140px] sm:min-w-[200px]"
                        aria-label="Contact me via email"
                    >
                        Contact Me
                    </motion.a>
                    <motion.a
                        href="/Azhar_resume_November.pdf"
                        download
                        initial={{ opacity: 0, y: 20 }}
                        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-transparent text-[#1A1A1A] border-2 border-[#1A1A1A] px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full font-medium hover:bg-gray-50 transition-all duration-300 cursor-pointer w-auto flex items-center justify-center gap-2 min-w-[140px] sm:min-w-[200px]"
                        aria-label="Download resume PDF"
                    >
                        <Download size={20} aria-hidden="true" />
                        Resume
                    </motion.a>
                </div>

            </main>
        </div>
    );
};

export default Hero;
