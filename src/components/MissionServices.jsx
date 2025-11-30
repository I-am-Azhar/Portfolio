import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Wrench, Mail, Linkedin, Github, Globe } from 'lucide-react';
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiC,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFramer,
    SiGreensock,
    SiNodedotjs,
    SiExpress,
    SiFlask,
    SiCloudflare,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiSupabase,
    SiGithub,
    SiPrisma,
    SiFirebase,
    SiDocker,
    SiJsonwebtokens,
    SiZod
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';
import BackgroundGrid from './BackgroundGrid';

const MissionServices = () => {
    const skillCategories = [
        {
            id: 1,
            category: 'Languages',
            icon: Code,
            skills: [
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'TypeScript', icon: SiTypescript },
                { name: 'Python', icon: SiPython },
                { name: 'C', icon: SiC }
            ],
            mobileSkills: [
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'TypeScript', icon: SiTypescript },
                { name: 'Python', icon: SiPython },
                { name: 'C', icon: SiC }
            ],
            iconBg: 'bg-[#ea580c]/10',
            iconColor: 'text-[#ea580c]',
            headingColor: 'text-[#9a3412]'
        },
        {
            id: 2,
            category: 'Frontend',
            icon: Layout,
            skills: [
                { name: 'React', icon: SiReact },
                { name: 'Next.js', icon: SiNextdotjs },
                { name: 'Tailwind CSS', icon: SiTailwindcss },
                { name: 'Framer Motion', icon: SiFramer },
                { name: 'GSAP', icon: SiGreensock }
            ],
            mobileSkills: [
                { name: 'React', icon: SiReact },
                { name: 'Next.js', icon: SiNextdotjs },
                { name: 'Tailwind CSS', icon: SiTailwindcss },
                { name: 'Framer Motion', icon: SiFramer },
                { name: 'GSAP', icon: SiGreensock }
            ],
            iconBg: 'bg-cyan-50',
            iconColor: 'text-cyan-600',
            headingColor: 'text-cyan-700'
        },
        {
            id: 3,
            category: 'Backend',
            icon: Server,
            skills: [
                { name: 'Node.js', icon: SiNodedotjs },
                { name: 'Express.js', icon: SiExpress },
                { name: 'Flask', icon: SiFlask },
                { name: 'Cloudflare Workers', icon: SiCloudflare },
                { name: 'REST APIs', icon: FaServer }
            ],
            mobileSkills: [
                { name: 'Node.js', icon: SiNodedotjs },
                { name: 'Express.js', icon: SiExpress },
                { name: 'Flask', icon: SiFlask },
                { name: 'Cloudflare Workers', icon: SiCloudflare },
                { name: 'REST APIs', icon: FaServer }
            ],
            iconBg: 'bg-emerald-50',
            iconColor: 'text-emerald-600',
            headingColor: 'text-emerald-700'
        },
        {
            id: 4,
            category: 'Databases',
            icon: Database,
            skills: [
                { name: 'MySQL', icon: SiMysql },
                { name: 'PostgreSQL', icon: SiPostgresql },
                { name: 'MongoDB', icon: SiMongodb },
                { name: 'Supabase', icon: SiSupabase }
            ],
            mobileSkills: [
                { name: 'MySQL', icon: SiMysql },
                { name: 'PostgreSQL', icon: SiPostgresql },
                { name: 'MongoDB', icon: SiMongodb },
                { name: 'Supabase', icon: SiSupabase }
            ],
            iconBg: 'bg-sky-50',
            iconColor: 'text-sky-600',
            headingColor: 'text-sky-700'
        },
        {
            id: 5,
            category: 'Tools & Others',
            icon: Wrench,
            skills: [
                { name: 'Prisma ORM', icon: SiPrisma },
                { name: 'Firebase', icon: SiFirebase },
                { name: 'Git & GitHub', icon: SiGithub },
                { name: 'Docker', icon: SiDocker },
                { name: 'JWT Auth', icon: SiJsonwebtokens },
                { name: 'Zod', icon: SiZod }
            ],
            mobileSkills: [
                { name: 'Prisma ORM', icon: SiPrisma },
                { name: 'Docker', icon: SiDocker },
                { name: 'Firebase', icon: SiFirebase },
                { name: 'Git & GitHub', icon: SiGithub },
                { name: 'JWT Auth', icon: SiJsonwebtokens },
                { name: 'Zod', icon: SiZod }
            ],
            iconBg: 'bg-[#ea580c]/10',
            iconColor: 'text-[#ea580c]',
            headingColor: 'text-[#9a3412]'
        }
    ];

    const email = 'mohammad.azhar0807@gmail.com';
    const socialLinks = [
        { icon: Linkedin, url: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHPXkSOFD4gjAAAAZrUCMlo2s-nLzw1Er8XAkTC7a_RQydh2wU3GhDkUnmjl3jr_TKqlhm8F0-MtbDvrKmdaV5aJiWIZxZVNViObBcO8QASp283G_RS35T78ZCrem-SIII9BCQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmohammad-azhar-6bb804251%2F%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app', label: 'LinkedIn' },
        { icon: Github, url: 'https://github.com/I-am-Azhar', label: 'GitHub' },
        { icon: Mail, url: `mailto:${email}`, label: 'Email' },
        { icon: Globe, url: '#', label: 'Portfolio' }
    ];

    return (
        <section className="w-full min-h-screen snap-section overflow-y-auto overflow-x-hidden bg-transparent relative flex items-center justify-center">
            <div className="w-full max-w-[1400px] pt-16 pb-40 px-4 sm:py-8 sm:px-6 md:px-8 lg:px-12 flex flex-col justify-center gap-2 sm:gap-6">
                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#333333] rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-6 md:p-8 text-[#fbf9ef] overflow-hidden relative shrink-0 shadow-md"
                >
                    <div className="max-w-4xl">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-snug mb-2 sm:mb-4">
                            Creating innovative web solutions and building scalable applications that solve real-world problems.
                        </h2>

                        <div className="flex flex-wrap gap-3 sm:gap-4 items-center opacity-70">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target={social.label !== 'Email' ? '_blank' : undefined}
                                    rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                                    className="text-white hover:opacity-100 transition-opacity"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Skills & Tech Stack Section - Desktop */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-4 flex-1">
                    {/* Row 1: Heading Card + Languages + Frontend */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#333333] rounded-2xl shadow-md p-8 flex items-center justify-center"
                    >
                        <h2 className="text-3xl xl:text-4xl font-bold text-center leading-tight text-[#fbf9ef]">
                            Skills &<br />Tech Stack
                        </h2>
                    </motion.div>

                    {/* Languages Card */}
                    {(() => {
                        const category = skillCategories[0];
                        const CategoryIcon = category.icon;
                        return (
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-md border border-[#333333]/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center shrink-0">
                                        <CategoryIcon className="w-6 h-6 text-[#fbf9ef]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#333333]">
                                        {category.category}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => {
                                        const SkillIcon = skill.icon;
                                        return (
                                            <motion.span
                                                key={skillIndex}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 + skillIndex * 0.05 }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="flex items-center gap-2 px-2.5 py-1.5 bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-md border border-[#333333]/10 hover:bg-white/40 rounded-full text-sm font-medium text-[#333333] transition-all duration-200 cursor-default shadow-sm hover:shadow"
                                            >
                                                <SkillIcon className="w-4 h-4 shrink-0" />
                                                <span>{skill.name}</span>
                                            </motion.span>
                                        );
                                    })}
                                </div>
                            </motion.article>
                        );
                    })()}

                    {/* Frontend Card */}
                    {(() => {
                        const category = skillCategories[1];
                        const CategoryIcon = category.icon;
                        return (
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-md border border-[#333333]/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center shrink-0">
                                        <CategoryIcon className="w-6 h-6 text-[#fbf9ef]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#333333]">
                                        {category.category}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => {
                                        const SkillIcon = skill.icon;
                                        return (
                                            <motion.span
                                                key={skillIndex}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2 + skillIndex * 0.05 }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="flex items-center gap-2 px-2.5 py-1.5 bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-md border border-[#333333]/10 hover:bg-white/40 rounded-full text-sm font-medium text-gray-700 transition-all duration-200 cursor-default shadow-sm hover:shadow"
                                            >
                                                <SkillIcon className="w-4 h-4 shrink-0" />
                                                <span>{skill.name}</span>
                                            </motion.span>
                                        );
                                    })}
                                </div>
                            </motion.article>
                        );
                    })()}

                    {/* Row 2: Backend + Databases + Tools */}
                    {skillCategories.slice(2, 5).map((category, index) => {
                        const CategoryIcon = category.icon;
                        return (
                            <motion.article
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-md border border-[#333333]/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center shrink-0">
                                        <CategoryIcon className="w-6 h-6 text-[#fbf9ef]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#333333]">
                                        {category.category}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => {
                                        const SkillIcon = skill.icon;
                                        return (
                                            <motion.span
                                                key={skillIndex}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + index * 0.1 + skillIndex * 0.05 }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="flex items-center gap-2 px-2.5 py-1.5 bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-md border border-[#333333]/10 hover:bg-white/40 rounded-full text-sm font-medium text-gray-700 transition-all duration-200 cursor-default shadow-sm hover:shadow"
                                            >
                                                <SkillIcon className="w-4 h-4 shrink-0" />
                                                <span>{skill.name}</span>
                                            </motion.span>
                                        );
                                    })}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* Skills & Tech Stack Section - Mobile/Tablet */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:hidden flex-1">
                    {/* Heading Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#333333] rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-5 flex items-center justify-center"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold text-center leading-tight text-[#fbf9ef]">
                            Skills &<br />Tech Stack
                        </h2>
                    </motion.div>

                    {/* All Category Cards */}
                    {skillCategories.map((category, index) => {
                        const CategoryIcon = category.icon;
                        const displaySkills = category.mobileSkills || category.skills;
                        return (
                            <motion.article
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-md border border-[#333333]/10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-3 sm:p-4 flex flex-col gap-2.5 sm:gap-3"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#333333] flex items-center justify-center shrink-0">
                                        <CategoryIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fbf9ef]" />
                                    </div>
                                    <h3 className="text-xs sm:text-sm font-semibold text-[#333333]">
                                        {category.category}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {displaySkills.map((skill, skillIndex) => {
                                        const SkillIcon = skill.icon;
                                        return (
                                            <motion.span
                                                key={skillIndex}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="flex items-center gap-1.5 px-1.5 py-1 bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-md border border-[#333333]/10 hover:bg-white/40 rounded-full text-xs font-medium text-[#333333] transition-all duration-200 cursor-default shadow-sm hover:shadow"
                                            >
                                                <SkillIcon className="w-3 h-3 shrink-0" />
                                                <span>{skill.name}</span>
                                            </motion.span>
                                        );
                                    })}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MissionServices;
