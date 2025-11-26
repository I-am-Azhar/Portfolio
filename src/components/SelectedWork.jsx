import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';


const SelectedWork = () => {
    const rightSectionRef = useRef(null);
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isInView, setIsInView] = useState(false);

    const { scrollYProgress } = useScroll({
        container: rightSectionRef,
        offset: ['start start', 'end end']
    });

    const projects = [
        {
            id: 1,
            title: 'DIGITAL PA',
            year: '2024',
            tags: ['REACT', 'TAILWIND CSS', 'FRAMER MOTION'],
            images: ['/projects/Digital_pa.png', '/projects/Mobile/Digital_pa.png'],
            bgColor: '#f5f1ed',
            bgPattern: 'linear-gradient(to right, rgba(16, 137, 150, 0.15), rgba(16, 137, 150, 0.15) 5px, transparent 5px, transparent)',
            bgSize: '20px 100%',
            liveUrl: 'https://digitalpa.vercel.app/',
            status: 'live'
        },
        {
            id: 2,
            title: 'LANDING PAGE',
            year: '2024',
            tags: ['LENIS', 'CANVAS API', 'VERCEL ANALYTICS'],
            images: ['/projects/Landing_Page.png', '/projects/Mobile/Landing_Page.png'],
            bgColor: '#f5f1ed',
            bgPattern: 'linear-gradient(to right, rgba(16, 137, 150, 0.15), rgba(16, 137, 150, 0.15) 5px, transparent 5px, transparent)',
            bgSize: '20px 100%',
            liveUrl: 'https://shawaiz-7.vercel.app/',
            status: 'live'
        },
        {
            id: 3,
            title: 'STUDY ABROAD',
            year: '2024',
            tags: ['WHATSAPP API', 'TAILWIND CSS', 'REACT'],
            images: ['/projects/Landing_Page1.png', '/projects/Mobile/Landing_Page1.png'],
            bgColor: '#f5f1ed',
            bgPattern: 'linear-gradient(to right, rgba(16, 137, 150, 0.15), rgba(16, 137, 150, 0.15) 5px, transparent 5px, transparent)',
            bgSize: '20px 100%',
            liveUrl: 'https://visas-vision.vercel.app/',
            status: 'live'
        },
        {
            id: 4,
            title: 'TINY LINK',
            year: '2024',
            tags: ['REACT', 'ROUTES', 'TAILWIND CSS'],
            images: ['/projects/Tiny_link.png', '/projects/Mobile/Tiny_link.png'],
            bgColor: '#f5f1ed',
            bgPattern: 'linear-gradient(to right, rgba(16, 137, 150, 0.15), rgba(16, 137, 150, 0.15) 5px, transparent 5px, transparent)',
            bgSize: '20px 100%',
            liveUrl: 'https://tinylink-azhar.vercel.app/',
            status: 'live'
        },
        {
            id: 5,
            title: 'WEATHER NOW',
            year: '2024',
            tags: ['REACT', 'API', 'TAILWIND CSS'],
            images: ['/projects/Weather_Now.png', '/projects/Mobile/Weather_Now.png'],
            bgColor: '#f5f1ed',
            bgPattern: 'linear-gradient(to right, rgba(16, 137, 150, 0.15), rgba(16, 137, 150, 0.15) 5px, transparent 5px, transparent)',
            bgSize: '20px 100%',
            liveUrl: 'https://weather-now-opal.vercel.app/',
            status: 'live'
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (rightSectionRef.current) {
                const scrollTop = rightSectionRef.current.scrollTop;
                const windowHeight = window.innerHeight;
                const newIndex = Math.round(scrollTop / windowHeight);
                setActiveIndex(newIndex);
            }
        };

        const rightSection = rightSectionRef.current;
        if (rightSection) {
            rightSection.addEventListener('scroll', handleScroll);
            return () => rightSection.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="h-screen max-h-screen w-full bg-transparent relative flex flex-col lg:flex-row overflow-hidden snap-section">
            {/* Left Section - Fixed on Desktop, Top Bar on Mobile */}
            <div className="w-full lg:w-1/3 h-auto lg:h-screen flex flex-row lg:flex-col justify-center lg:justify-between items-start lg:items-start p-6 lg:p-12 bg-transparent absolute lg:sticky top-0 z-10 shrink-0 pointer-events-none">
                <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:justify-start lg:pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:mb-12 w-full flex justify-center lg:block"
                    >
                        <div className="hidden lg:inline-block relative">
                            <h1 className="text-6xl lg:text-8xl font-black text-[#333333] tracking-tighter">
                                PROJECTS
                            </h1>
                            <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#7b4214] to-transparent opacity-90"></div>
                        </div>
                        <div className="lg:hidden bg-[#333333] px-10 py-3 rounded-full shadow-2xl pointer-events-auto">
                            <h1 className="text-3xl font-black text-[#fbf9ef] tracking-wide">
                                PROJECTS
                            </h1>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Right Section - Scrollable */}
            <div
                ref={rightSectionRef}
                className="relative w-full lg:w-2/3 h-screen lg:h-screen overflow-y-scroll scrollbar-hide"
            >
                {/* Project Counter */}
                <AnimatePresence>
                    {isInView && activeIndex > 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed bottom-6 right-6 lg:fixed lg:bottom-auto lg:top-1/2 lg:right-12 lg:-translate-y-1/2 flex lg:flex-col items-center gap-2 lg:gap-4 z-50 bg-white/90 px-3 py-1.5 lg:px-2 lg:py-1 rounded-full shadow-sm border border-gray-100 pointer-events-auto"
                        >
                            <span className="text-xs lg:text-2xl font-bold text-[#333333] lg:text-[#333333]">
                                {String(activeIndex + 1).padStart(2, '0')}
                            </span>
                            <div className="h-px w-8 bg-gray-300 lg:w-px lg:h-12 lg:bg-gray-300"></div>
                            <span className="text-xs lg:text-sm font-medium text-gray-600 lg:text-gray-600">{String(projects.length).padStart(2, '0')}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {projects.map((project, index) => {
                    const targetScale = 1 - (projects.length - index) * 0.05;
                    return (
                        <Card
                            key={project.id}
                            i={index}
                            project={project}
                            progress={scrollYProgress}
                            range={[index * 0.25, 1]}
                            targetScale={targetScale}
                            activeIndex={activeIndex}
                        />
                    );
                })}
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          width: 8px;
        }
        
        .scrollbar-hide::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-hide::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #149Eaa, #0d7a87);
          border-radius: 10px;
          border: 2px solid transparent;
        }
        
        .scrollbar-hide::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0d7a87, #149Eaa);
        }

        /* For Firefox */
        .scrollbar-hide {
          scrollbar-width: thin;
          scrollbar-color: #149Eaa transparent;
        }

        @media (max-width: 1024px) {
          .scrollbar-hide::-webkit-scrollbar {
            width: 4px;
          }
        }
      `}</style>
        </div>
    );
};


const Card = ({ i, project, progress, range, targetScale, activeIndex }) => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 });
    const scale = useTransform(progress, range, [1, targetScale]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Only play slideshow if the card is the active one (not covered and in view)
        if (i !== activeIndex) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
        }, 3000); // Switch every 4 seconds

        return () => clearInterval(interval);
    }, [i, activeIndex, project.images.length, currentImageIndex]);

    return (
        <div ref={containerRef} className="h-screen w-full sticky top-0 flex items-center justify-center">
            <motion.div
                style={{ scale }}
                className="w-full h-full flex items-center justify-center p-4 pt-32 md:p-6 lg:p-12 relative origin-top"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="w-full max-w-full lg:max-w-3xl relative z-10"
                >
                    {/* Project Card */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                        className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/5] lg:aspect-[16/10] group cursor-pointer"
                        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % project.images.length)}
                    >
                        {/* Project Image Slideshow */}
                        <div className="absolute inset-0 w-full h-full bg-black">
                            <AnimatePresence>
                                <motion.img
                                    key={currentImageIndex}
                                    src={project.images[currentImageIndex]}
                                    alt={project.title}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0.5 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </AnimatePresence>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 z-10"></div>
                        </div>

                        {/* Project Info */}
                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 md:gap-6 z-20">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
                                    >
                                        {project.title}
                                    </motion.h2>

                                    {/* Live Link Button / Coming Soon Badge */}
                                    {project.liveUrl ? (
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-semibold shadow-md hover:bg-white/30 transition-all duration-300"
                                        >
                                            <span>View Live</span>
                                            <ExternalLink className="w-3 h-3 text-green-400" />
                                        </motion.a>
                                    ) : (
                                        <motion.span
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="px-3 py-1.5 bg-white/20 backdrop-blur-md border border-white/20 text-white/80 rounded-full text-xs font-semibold"
                                        >
                                            Coming Soon
                                        </motion.span>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <motion.span
                                            key={tagIndex}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + tagIndex * 0.05 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="px-3 py-2 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 rounded-full text-xs md:text-sm font-medium text-white/90 transition-all duration-200 cursor-default shadow-sm"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SelectedWork;
