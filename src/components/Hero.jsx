import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiFigma, SiReact } from 'react-icons/si';

const EMAIL = 'iamazhar0807@gmail.com';
const EMAIL_SUBJECT = 'Portfolio Inquiry';

const GlassIcon = ({ Icon, imgSrc, initialX, initialY, delay, color, className, startAnimation = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={startAnimation ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: delay
            }}
            className={`flex items-center justify-center w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-[#fbf9ef] shadow-lg border border-gray-100 ${className}`}
        >
            {imgSrc ? (
                <img src={imgSrc} alt="Icon" className="w-3/4 h-3/4 object-contain" />
            ) : (
                <Icon className={`text-xl md:text-2xl lg:text-4xl ${color}`} />
            )}
        </motion.div>
    );
};

const GlassFolder = ({ title, children, className, zx = 0, zy = 0, rotate = 0, startAnimation = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: zx, y: zy + 50, scale: 0.9, rotate: rotate }}
            animate={startAnimation ? { opacity: 1, x: zx, y: zy, scale: 1, rotate: rotate } : { opacity: 0, x: zx, y: zy + 50, scale: 0.9, rotate: rotate }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`${className}`}
            style={{
                filter: 'drop-shadow(0 15px 25px rgba(51, 51, 51, 0.25))'
            }}
        >
            {/* Folder Tab */}
            <div className="absolute -top-8 left-0 w-20 h-9 bg-gradient-to-b from-gray-200/40 to-gray-200/10 backdrop-blur-xl rounded-t-xl border-t border-l border-r border-black/10 z-20"></div>

            {/* Folder Body */}
            <div className="relative z-10 w-full h-full bg-gradient-to-b from-gray-200/40 to-gray-200/10 backdrop-blur-xl rounded-b-2xl rounded-tr-2xl rounded-tl-none border border-black/10 p-4 flex flex-col">
                <h3 className="text-xs md:text-sm font-semibold text-[#333333] mb-2 opacity-80 z-10 relative">{title}</h3>
                <div className="relative w-full flex-1">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

const Hero = ({ startAnimation = true }) => {
    const emailLink = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;

    return (
        <div className="min-h-screen bg-transparent relative text-gray-900 font-sans selection:bg-gray-200 flex flex-col overflow-hidden snap-section">
            {/* Skip to content link for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#333333] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#333333]"
            >
                Skip to main content
            </a>

            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 py-4 max-w-[1400px] mx-auto w-full shrink-0" role="navigation" aria-label="Main navigation">
            </nav>

            {/* Main Content */}
            <main id="main-content" className="flex-1 max-w-[1400px] mx-auto px-2 sm:px-6 w-full flex flex-col justify-center items-center text-center pb-20 relative">

                {/* Floating Icons - Glass Folder Layout */}
                <div className="absolute inset-0 pointer-events-none max-w-[1400px] mx-auto z-0">

                    {/* Left Cluster - Frontend */}
                    <GlassFolder title="Frontend Stack" zx={0} zy={0} rotate={6} startAnimation={startAnimation} className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-40 h-32 md:w-48 md:h-40 lg:w-56 lg:h-48 z-0">
                        <div className="w-full h-full flex items-center justify-center">
                            {/* React - Left Fan */}
                            <GlassIcon Icon={SiReact} initialX={0} initialY={0} delay={0.2} color="text-[#61DAFB]" startAnimation={startAnimation} className="-rotate-12 z-0 -mr-6 relative" />
                            {/* Next.js - Center Fan */}
                            <GlassIcon Icon={SiNextdotjs} initialX={0} initialY={0} delay={0.4} color="text-black" startAnimation={startAnimation} className="z-10 scale-110 -mt-6 relative" />
                            {/* TypeScript - Right Fan */}
                            <GlassIcon Icon={SiTypescript} initialX={0} initialY={0} delay={0.6} color="text-[#3178C6]" startAnimation={startAnimation} className="rotate-12 z-0 -ml-6 relative" />
                        </div>
                    </GlassFolder>

                    {/* Right Cluster - Backend & Design */}
                    <GlassFolder title="Backend & Design" zx={0} zy={0} rotate={-6} startAnimation={startAnimation} className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-40 h-32 md:w-48 md:h-40 lg:w-56 lg:h-48 z-0">
                        <div className="w-full h-full flex items-center justify-center">
                            {/* Tailwind - Left Fan */}
                            <GlassIcon Icon={SiTailwindcss} initialX={0} initialY={0} delay={0.8} color="text-[#06B6D4]" startAnimation={startAnimation} className="-rotate-12 z-0 -mr-6 relative" />
                            {/* Node.js - Center Fan */}
                            <GlassIcon Icon={SiNodedotjs} initialX={0} initialY={0} delay={1.0} color="text-[#339933]" startAnimation={startAnimation} className="z-10 scale-110 -mt-6 relative" />
                            {/* Figma - Right Fan */}
                            <GlassIcon Icon={SiFigma} initialX={0} initialY={0} delay={1.2} color="text-[#F24E1E]" startAnimation={startAnimation} className="rotate-12 z-0 -ml-6 relative" />
                        </div>
                    </GlassFolder>

                </div>

                {/* Available for work badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-4 left-6 inline-flex items-center gap-2 bg-[#E6F7F8] px-3 py-1.5 rounded-full z-30"
                >
                    <span className="w-1.5 h-1.5 bg-[#008F96] rounded-full"></span>
                    <span className="text-[#008F96] text-xs font-bold tracking-widest uppercase">AVAILABLE FOR WORK</span>
                </motion.div>

                {/* Main Typography */}
                <div className="flex flex-col items-center leading-none mb-12 relative z-30">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-md border border-[#333333]/10 px-6 py-2 rounded-full shadow-sm"
                    >
                        <span className="text-[#333333] font-medium text-sm sm:text-base tracking-wide">Hi, My Name is Mohammad Azhar and I'am a</span>
                    </motion.div>

                    <div className="overflow-hidden px-4 pb-2">
                        <h1 className="font-['Anton'] text-[18vw] sm:text-[15vw] lg:text-[14vw] tracking-tighter text-[#333333] uppercase leading-[0.9] whitespace-nowrap flex justify-center">
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
                            style={{ WebkitTextStroke: '2px #333333' }}
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
                <div className="flex flex-row justify-center gap-4 w-full sm:w-auto px-4 items-center relative z-30">
                    <motion.a
                        href={emailLink}
                        initial={{ opacity: 0, y: 20 }}
                        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-[#333333] text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full font-medium hover:bg-black transition-all duration-300 cursor-pointer w-auto text-center min-w-[140px] sm:min-w-[200px]"
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
                        className="bg-transparent text-[#333333] border-2 border-[#333333] px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full font-medium hover:bg-gray-50 transition-all duration-300 cursor-pointer w-auto flex items-center justify-center gap-2 min-w-[140px] sm:min-w-[200px]"
                        aria-label="Download resume PDF"
                    >
                        <FiDownload size={20} aria-hidden="true" />
                        Resume
                    </motion.a>
                </div>

            </main >
        </div >
    );
};

export default Hero;
