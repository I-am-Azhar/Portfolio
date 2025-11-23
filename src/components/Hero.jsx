import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin, Github, ChevronDown, Download } from 'lucide-react';
import profilePlaceholder from '../assets/profile-placeholder.png';

import BackgroundGrid from './BackgroundGrid';

// Constants
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 2000;
const TITLES = ['Full-Stack Developer', 'Software Engineer', 'Cloud Engineer'];
const EMAIL = 'iamazhar0807@gmail.com';
const EMAIL_SUBJECT = 'Portfolio Inquiry';

const TypingAnimation = () => {
    const titles = useMemo(() => TITLES, []);
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = titles[currentTitleIndex];
        let timeoutId;
        const typingSpeed = isDeleting ? DELETING_SPEED : TYPING_SPEED;

        if (!isDeleting) {
            // Typing
            if (displayText.length < currentTitle.length) {
                timeoutId = setTimeout(() => {
                    setDisplayText(currentTitle.substring(0, displayText.length + 1));
                }, typingSpeed);
            } else {
                // Finished typing, wait then start deleting
                timeoutId = setTimeout(() => {
                    setIsDeleting(true);
                }, PAUSE_DURATION);
            }
        } else {
            // Deleting
            if (displayText.length > 0) {
                timeoutId = setTimeout(() => {
                    setDisplayText(currentTitle.substring(0, displayText.length - 1));
                }, typingSpeed);
            } else {
                // Finished deleting, move to next title
                setIsDeleting(false);
                setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
            }
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [displayText, isDeleting, currentTitleIndex, titles]);

    return (
        <span aria-live="polite" aria-atomic="true">
            <span className="sr-only">Current role: </span>
            {displayText}
            <span className="animate-pulse" aria-hidden="true">|</span>
        </span>
    );
};

const Hero = () => {
    const emailLink = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
    const [imageError, setImageError] = useState(false);

    return (
        <div className="h-screen max-h-screen bg-transparent relative text-gray-900 font-sans selection:bg-gray-200 flex flex-col overflow-hidden snap-section">
            {/* Skip to content link for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#1A1A1A] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A]"
            >
                Skip to main content
            </a>

            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 py-4 max-w-[1400px] mx-auto w-full shrink-0" role="navigation" aria-label="Main navigation">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#149Eaa] to-[#0d7a87] rounded-full flex items-center justify-center text-white font-medium text-xl" aria-hidden="true">
                        A
                    </div>
                    <span className="font-semibold text-lg tracking-tight">AZHAR</span>
                </div>
                <a
                    href={emailLink}
                    className="bg-gradient-to-r from-[#149Eaa] to-[#0d7a87] text-white px-6 py-3 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 cursor-pointer hidden sm:block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#149Eaa] min-h-[44px] flex items-center justify-center"
                    aria-label="Contact me via email"
                >
                    Contact Me
                </a>
                <a
                    href={emailLink}
                    className="bg-gradient-to-r from-[#149Eaa] to-[#0d7a87] text-white p-3 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 cursor-pointer sm:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#149Eaa] min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Contact me via email"
                >
                    <ArrowUpRight size={18} aria-hidden="true" />
                </a>
            </nav>

            {/* Main Content */}
            <main id="main-content" className="flex-1 max-w-[1400px] mx-auto px-6 pb-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full overflow-y-auto">

                {/* Left Column */}
                <div className="lg:col-span-7 space-y-6 lg:space-y-8 pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-4 bg-[#E6F7F8] px-4 py-2 rounded-full"
                    >
                        <span className="w-2 h-2 bg-[#00C2CB] rounded-full"></span>
                        <span className="text-[#008F96] text-[10px] font-bold tracking-widest uppercase">AVAILABLE FOR WORK</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-[-0.04em] text-[#1A1A1A] break-words"
                    >
                        Hi, I'm a<br />
                        <TypingAnimation />
                        <span className="text-xl md:text-2xl lg:text-3xl align-top text-gray-400 ml-2 font-normal" aria-hidden="true">©</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-600 text-sm md:text-lg max-w-md leading-relaxed font-medium"
                    >
                        Building modern web applications with React, Node.js, and cloud technologies. Passionate about creating scalable solutions that solve real-world problems.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.a
                            href={emailLink}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-gradient-to-r from-[#149Eaa] to-[#0d7a87] text-white px-6 py-3 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 cursor-pointer w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#149Eaa] min-h-[44px] flex items-center justify-center"
                            aria-label="Contact me via email"
                        >
                            Contact Me
                        </motion.a>
                        <motion.a
                            href="/Azhar_resume_November.pdf"
                            download
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-[#e8ddd3] text-[#1A1A1A] border-2 border-[#c9b8ad] px-6 py-3 rounded-full font-medium text-sm hover:bg-[#c9b8ad] transition-all duration-300 cursor-pointer w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#149Eaa] min-h-[44px] flex items-center justify-center gap-2"
                            aria-label="Download resume PDF"
                        >
                            <Download size={16} aria-hidden="true" />
                            Resume
                        </motion.a>
                    </div>
                </div>

                {/* Right Column - Grid Layout */}
                <div className="hidden lg:grid lg:col-span-5 grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 h-auto lg:h-full lg:max-h-[600px] pb-6 lg:pb-0">

                    {/* Top Left Card - Info */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#e8ddd3] p-6 rounded-2xl shadow-sm border border-[#c9b8ad] flex flex-col justify-between aspect-auto sm:aspect-auto lg:aspect-square h-[160px] sm:h-auto lg:min-h-[200px] touch-manipulation"
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-gray-900">Mohammad Azhar</h3>
                            <p className="text-gray-400 text-xs mt-1">Warangal, Telangana, India</p>
                        </div>

                        <div className="relative flex-1 bg-[#f5f1ed] rounded-2xl overflow-hidden mb-4 border border-[#c9b8ad] min-h-[100px]">
                            {/* Mini UI Mockup */}
                            <div className="absolute top-3 left-3 right-3 h-full bg-[#e8ddd3] rounded-t-xl shadow-sm p-3">
                                <div className="flex gap-1 mb-2">
                                    <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                                    <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                                </div>
                                <div className="w-1/2 h-2 bg-gray-100 rounded-full mb-2"></div>
                                <div className="w-full h-16 bg-gray-50 rounded-lg"></div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 text-gray-700">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-black"><path d="M12 0L24 24H0L12 0Z" /></svg>
                                    FULL-STACK DEV
                                </span>
                            </div>
                            <div className="bg-[#EBF5FF] text-[#007AFF] px-3 py-1.5 rounded-lg text-xs font-bold inline-block self-start">
                                B.Tech ECE
                            </div>
                        </div>
                    </motion.div>

                    {/* Top Right Card - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-gray-200 rounded-2xl overflow-hidden aspect-auto sm:aspect-auto lg:aspect-square h-[160px] sm:h-auto lg:min-h-[200px] relative touch-manipulation"
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <img
                            src={profilePlaceholder}
                            alt="Mohammad Azhar - Full-Stack Developer"
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={() => setImageError(true)}
                            style={{ willChange: 'opacity' }}
                        />
                    </motion.div>

                    {/* Bottom Left Card - Brands */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gradient-to-br from-[#8B8BFF] to-[#B4B4FF] p-6 rounded-2xl shadow-sm text-white flex flex-col justify-between col-span-1 aspect-auto sm:aspect-auto lg:aspect-square h-[160px] sm:h-auto lg:min-h-[200px] touch-manipulation"
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <p className="text-sm font-medium leading-snug opacity-90">
                            Companies & organizations<br />
                            I've worked with &lt;3
                        </p>
                        <div className="flex flex-wrap gap-4 mt-auto opacity-90">
                            <div className="flex items-center gap-1">
                                <span className="text-lg font-bold tracking-tighter">ACCENTURE</span>
                            </div>
                            <div className="flex items-center gap-1 w-full">
                                <div className="w-4 h-4 rounded-full bg-white/30"></div>
                                <span className="text-sm font-bold">DELOITTE</span>
                                <span className="text-sm font-bold ml-2">AWS</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Right Card - Socials */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-[#e8ddd3] p-6 rounded-2xl shadow-sm border border-[#c9b8ad] flex flex-col gap-4 aspect-auto sm:aspect-auto lg:aspect-square h-[160px] sm:h-auto lg:min-h-[200px] touch-manipulation"
                        style={{ willChange: 'transform, opacity' }}
                    >
                        {[
                            { Icon: Linkedin, color: "text-[#0077B5]", bg: "bg-[#0077B5]/10", url: "https://www.linkedin.com/in/mohammad-azhar", label: "LinkedIn Profile", name: "LinkedIn" },
                            { Icon: Github, color: "text-black", bg: "bg-gray-100", url: "https://github.com/lam-Azhar", label: "GitHub Profile", name: "GitHub" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className={`${social.bg} ${social.color} rounded-2xl flex items-center justify-center hover:scale-105 transition-transform cursor-pointer flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 min-h-[44px] group relative`}
                                title={social.name}
                            >
                                <social.Icon size={24} aria-hidden="true" />
                                <span className="sr-only">{social.name}</span>
                            </a>
                        ))}
                    </motion.div>

                </div>
            </main>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
                aria-hidden="true"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-gray-400"
                >
                    <span className="text-xs font-medium">Scroll</span>
                    <ChevronDown size={20} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
