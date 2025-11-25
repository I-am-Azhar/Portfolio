import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 1000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            variants={{
                initial: {
                    y: 0
                },
                exit: {
                    y: "-100vh",
                    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
                }
            }}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#333333]"
        >
            <div className="overflow-hidden flex">
                {"Welcome.".split('').map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{
                            duration: 0.5,
                            ease: [0.76, 0, 0.24, 1],
                            delay: index * 0.05
                        }}
                        className="text-[#fbf9ef] text-[20vw] md:text-[20vw] font-['Anton'] tracking-wide inline-block leading-none"
                    >
                        {char}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

export default Preloader;
