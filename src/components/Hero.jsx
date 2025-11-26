import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { SiNextdotjs, SiReact, SiNodedotjs, SiCanva } from 'react-icons/si';
import { DiIllustrator, DiPhotoshop } from 'react-icons/di';

const PHONE_NUMBER = '+919908405786';

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
            className={`flex items-center justify-center ${startAnimation ? 'w-10 h-10' : 'w-8 h-8'} md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-[#fbf9ef] shadow-lg border border-gray-100 ${className}`}
        >
            {imgSrc ? (
                <img src={imgSrc} alt="Icon" className="w-3/4 h-3/4 object-contain" />
            ) : (
                <Icon className={`${startAnimation ? 'text-3xl' : 'text-xl'} md:text-2xl lg:text-4xl ${color}`} />
            )}
        </motion.div>
    );
};

const FakeCursor = ({ startAnimation = true, targetFolder = "left", isAnyFolderOpen = false }) => {
    const [showCursor, setShowCursor] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    const texts = ["Click Me!", "Drag Me!"];

    useEffect(() => {
        if (startAnimation) {
            // Show cursor 1 second after folders appear (folders appear at 1.5s, so 2.5s total)
            const timer = setTimeout(() => setShowCursor(true), 2500);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [startAnimation]);

    // Typewriter effect
    useEffect(() => {
        if (!showCursor || isAnyFolderOpen) return;

        const currentText = texts[textIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    // Move to next text
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex, showCursor, isAnyFolderOpen]);

    // Hide cursor when any folder is opened
    if (!showCursor) return null;

    const isRight = targetFolder === "right";

    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
                opacity: isAnyFolderOpen ? 0 : 1,
                y: [-5, 5, -5], // Same gentle float as folders
                scale: [1, 1, 0.9, 1, 1, 1]
            }}
            transition={{
                opacity: { duration: 0.5 },
                y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                },
                scale: {
                    duration: 1.5,
                    times: [0, 0.33, 0.5, 0.66, 0.83, 1],
                    repeat: Infinity,
                    repeatDelay: 2
                }
            }}
            className={`absolute pointer-events-none z-50 ${isRight
                ? "bottom-32 right-8 md:bottom-40 md:right-16 lg:bottom-48 lg:right-16"
                : "bottom-32 left-36 md:bottom-40 md:left-16 lg:bottom-35 lg:left-55"
                }`}
            style={{ width: '32px', height: '32px' }}
        >
            {/* Cursor SVG - Mirrored for right side */}
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: isRight ? 'scaleX(-1)' : 'none' }}
            >
                <path
                    d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                    fill="#333333"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeLinejoin="round"
                />
            </svg>

            {/* Click ripple effect */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: [0, 0, 2, 2.5, 0],
                    opacity: [0, 0, 0.6, 0, 0]
                }}
                transition={{
                    duration: 1.5,
                    times: [0, 0.33, 0.5, 0.66, 0.83],
                    repeat: Infinity,
                    repeatDelay: 2
                }}
                className="absolute top-0 left-0 w-8 h-8 rounded-full border-2 border-[#333333]"
            />

            {/* "Click me" text - Positioned based on side */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isAnyFolderOpen ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`absolute -top-6 ${isRight ? 'right-6' : 'left-6'} bg-[#333333] text-[#fbf9ef] px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-lg`}
            >
                {displayText}<span className="animate-pulse">|</span>
            </motion.div>
        </motion.div>
    );
};

const GlassFolder = ({ title, children, className, zx = 0, zy = 0, rotate = 0, startAnimation = true, onOpenChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Notify parent when folder opens/closes
    const handleToggle = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        if (onOpenChange) {
            onOpenChange(newState);
        }
    };

    const variants = {
        hidden: {
            opacity: 0,
            x: zx,
            y: zy + 100, // Start from further below
            scale: 0.8,
            rotate: rotate
        },
        floating: {
            opacity: 1,
            x: zx,
            y: [zy - 5, zy + 5, zy - 5], // Gentle float
            rotate: rotate,
            scale: 1,
            transition: {
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                opacity: { duration: 0.6, delay: 1.5 },
                x: { type: "spring", stiffness: 100, damping: 15, delay: 1.5 },
                scale: { type: "spring", stiffness: 200, damping: 20, delay: 1.5 }
            }
        },
        open: {
            opacity: 1,
            x: zx,
            y: zy,
            scale: 1.1,
            rotate: rotate,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    const titleVariants = {
        closed: {
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            scale: 2.0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        },
        open: {
            top: "1rem", // p-4 = 1rem
            left: "1rem",
            x: "0%",
            y: "0%",
            scale: 1,
            opacity: 0.8,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    // Pass isOpen state to children (GlassIcons)
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { startAnimation: isOpen });
        }
        return child;
    });

    return (
        <motion.div
            initial="hidden"
            animate={startAnimation ? (isOpen ? "open" : "floating") : "hidden"}
            variants={variants}
            onClick={handleToggle}
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${className} cursor-grab active:cursor-grabbing`}
            style={{
                filter: 'drop-shadow(0 15px 25px rgba(51, 51, 51, 0.25))'
            }}
        >
            {/* Folder Tab */}
            <div className="absolute -top-8 left-0 w-20 h-9 bg-gradient-to-b from-gray-200/40 to-gray-200/10 backdrop-blur-xl rounded-t-xl border-t border-l border-r border-black/10 z-20"></div>

            {/* Folder Body */}
            <div className="relative z-10 w-full h-full bg-gradient-to-b from-gray-200/40 to-gray-200/10 backdrop-blur-xl rounded-b-2xl rounded-tr-2xl rounded-tl-none border border-black/10 p-4 flex flex-col">
                <motion.h3
                    variants={titleVariants}
                    animate={isOpen ? "open" : "closed"}
                    className="text-xs md:text-sm font-semibold text-[#333333] z-10 absolute pointer-events-none whitespace-nowrap"
                >
                    {title}
                </motion.h3>
                <div className="relative w-full flex-1 flex items-center justify-center mt-6"> {/* Added margin-top to avoid overlap when open */}
                    {childrenWithProps}
                </div>
            </div>
        </motion.div>
    );
};

const Hero = ({ startAnimation = true }) => {
    const phoneLink = `tel:${PHONE_NUMBER}`;
    const [isAnyFolderOpen, setIsAnyFolderOpen] = useState(false);

    const handleFolderOpenChange = (isOpen) => {
        setIsAnyFolderOpen(isOpen);
    };

    return (
        <div className="h-[100dvh] bg-transparent relative text-gray-900 font-sans selection:bg-gray-200 flex flex-col overflow-hidden snap-section">
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

                    {/* Fake Cursor Demo - Left Folder */}
                    <FakeCursor startAnimation={startAnimation} targetFolder="left" isAnyFolderOpen={isAnyFolderOpen} />

                    {/* Left Cluster - Web Dev */}
                    <GlassFolder title="Web Dev" zx={0} zy={0} rotate={6} startAnimation={startAnimation} onOpenChange={handleFolderOpenChange} className="absolute bottom-16 left-4 md:bottom-8 md:left-8 w-40 h-32 md:w-48 md:h-40 lg:w-56 lg:h-48 z-0 pointer-events-auto">
                        {/* Next.js - Left Fan */}
                        <GlassIcon Icon={SiNextdotjs} initialX={0} initialY={0} delay={0.1} color="text-black" className="-rotate-12 z-0 -mr-3 md:-mr-6 relative" />
                        {/* Node.js - Center Fan */}
                        <GlassIcon Icon={SiNodedotjs} initialX={0} initialY={0} delay={0.2} color="text-[#339933]" className="z-10 scale-110 -mt-3 md:-mt-6 relative" />
                        {/* React - Right Fan */}
                        <GlassIcon Icon={SiReact} initialX={0} initialY={0} delay={0.3} color="text-[#61DAFB]" className="rotate-12 z-0 -ml-3 md:-ml-6 relative" />
                    </GlassFolder>

                </div>


                {/* Main Typography */}
                <div className="flex flex-col items-center leading-none mb-12 relative z-30">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-md border border-[#333333]/10 px-6 py-2 rounded-full shadow-sm"
                    >
                        <span className="text-[#333333] font-medium text-xs sm:text-base tracking-wide">Hi, My Name is Mohammad Azhar and I'am a</span>
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
                            className="font-['Anton'] text-[16vw] sm:text-[12vw] lg:text-[12vw] tracking-tighter text-transparent uppercase leading-[0.9] whitespace-nowrap flex justify-center"
                            style={{ WebkitTextStroke: '2px #333333' }}
                        >
                            {"& FREELANCER".split('').map((char, index) => (
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
                        href={phoneLink}
                        initial={{ opacity: 0, y: 20 }}
                        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-[#333333] text-[#fbf9ef] border-2 border-[#333333] px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full font-medium hover:bg-[#fbf9ef] hover:text-[#333333] hover:border-[#333333] transition-all duration-300 cursor-pointer w-auto text-center min-w-[140px] sm:min-w-[200px]"
                        aria-label="Call me at +91 9908405786"
                    >
                        Contact Me
                    </motion.a>
                    <motion.a
                        href="/Azhar_resume_November.pdf"
                        download="Azhar_Resume.pdf"
                        initial={{ opacity: 0, y: 20 }}
                        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-transparent text-[#333333] border-2 border-[#333333] px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full font-medium hover:bg-[#333333] hover:text-[#fbf9ef] transition-all duration-300 cursor-pointer w-auto flex items-center justify-center gap-2 min-w-[140px] sm:min-w-[200px]"
                        aria-label="Download resume PDF"
                    >
                        <FiDownload size={20} aria-hidden="true" />
                        Resume
                    </motion.a>
                </div>



            </main >
            {/* Available to work Stripe */}
            {/* Available to work Stripe - Desktop */}
            <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={startAnimation ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
                transition={{ duration: 2.0, delay: 1.5, ease: "easeInOut" }}
                className="hidden md:block absolute bottom-[90px] -right-[550px] w-[1500px] bg-[#333333] text-[#fbf9ef] text-center py-5 -rotate-45 z-40 shadow-xl origin-center pointer-events-none"
            >
                <span className="font-['Anton'] text-3xl tracking-widest uppercase whitespace-nowrap">Available For work</span>
            </motion.div>

            {/* Available to work Arc - Mobile */}
            <motion.div
                initial={{ x: 200, y: 200 }}
                animate={startAnimation ? { x: 0, y: 0 } : { x: 200, y: 200 }}
                transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
                className="md:hidden absolute bottom-0 right-0 z-40 pointer-events-none w-[200px] h-[200px]"
            >
                <svg width="100%" height="100%" viewBox="0 0 200 200">
                    <defs>
                        <path id="curvePath" d="M 20,200 A 180,180 0 0,1 200,20" />
                    </defs>
                    <path
                        d="M 20,200 A 180,180 0 0,1 200,20"
                        stroke="#333333"
                        strokeWidth="40"
                        fill="none"
                        className="drop-shadow-xl"
                    />
                    <text className="font-['Anton'] text-xl tracking-widest uppercase fill-[#fbf9ef]" dominantBaseline="middle">
                        <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
                            Available For work
                        </textPath>
                    </text>
                </svg>
            </motion.div>
        </div >
    );
};

export default Hero;
