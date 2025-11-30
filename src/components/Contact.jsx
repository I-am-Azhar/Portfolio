import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 3000);
        } catch (err) {
            console.error('FAILED...', err);
            setError('Failed to send message. Please try again.');
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { icon: Mail, href: "mailto:mohammad.azhar0807@gmail.com", label: "Email" },
        { icon: Linkedin, href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHPXkSOFD4gjAAAAZrUCMlo2s-nLzw1Er8XAkTC7a_RQydh2wU3GhDkUnmjl3jr_TKqlhm8F0-MtbDvrKmdaV5aJiWIZxZVNViObBcO8QASp283G_RS35T78ZCrem-SIII9BCQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmohammad-azhar-6bb804251%2F%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app", label: "LinkedIn" },
        { icon: Github, href: "https://github.com/I-am-Azhar", label: "GitHub" },
        // { icon: Phone, href: "tel:+919908405786", label: "Phone" } // Added based on previous context
    ];

    return (
        <section className="min-h-screen w-full bg-transparent flex items-center justify-center p-6 md:p-12 relative overflow-hidden snap-section">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 lg:gap-24 items-start lg:items-center relative z-10">

                {/* Left Side - Text & Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-6 lg:space-y-8 w-full"
                >
                    <div className="space-y-3 lg:space-y-4 text-center lg:text-left">
                        <motion.h2
                            className="text-4xl sm:text-5xl md:text-7xl font-black text-[#333333] tracking-tighter"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Get in Touch
                        </motion.h2>
                        <motion.p
                            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-md leading-relaxed mx-auto lg:mx-0"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </motion.p>
                    </div>

                    <motion.div
                        className="flex gap-4 lg:gap-6 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 sm:p-3 bg-white rounded-full shadow-sm border border-gray-100 text-[#333333] hover:bg-[#333333] hover:text-[#fbf9ef] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                                aria-label={social.label}
                            >
                                <social.icon size={20} className="sm:w-6 sm:h-6" strokeWidth={1.5} />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Side - Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full"
                >
                    <form ref={form} onSubmit={handleSubmit} className="bg-white/50 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-white/60 space-y-4 sm:space-y-6">
                        <div className="space-y-1.5 sm:space-y-2">
                            <label htmlFor="name" className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider ml-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/80 border border-gray-200 rounded-xl px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#333333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#333333]/10 focus:border-[#333333] transition-all duration-300"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-1.5 sm:space-y-2">
                            <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/80 border border-gray-200 rounded-xl px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#333333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#333333]/10 focus:border-[#333333] transition-all duration-300"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-1.5 sm:space-y-2">
                            <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-white/80 border border-gray-200 rounded-xl px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#333333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#333333]/10 focus:border-[#333333] transition-all duration-300 resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm text-center">{error}</div>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitted
                                ? 'bg-green-500 text-white'
                                : 'bg-[#333333] text-[#fbf9ef] hover:bg-black shadow-lg hover:shadow-xl'
                                }`}
                        >
                            {isSubmitting ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : isSubmitted ? (
                                <span>Message Sent!</span>
                            ) : (
                                <>
                                    Send Message <Send size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
