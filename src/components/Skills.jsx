import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });
    const [activeCategory, setActiveCategory] = useState('core');

    const skillCategories = {
        core: {
            title: "Core Technologies",
            subtitle: "The foundation of my technical expertise",
            icon: "fas fa-code",
            skills: [
                { name: "Python", level: 90, description: "Data science, web scraping, automation", years: "3" },
                { name: "JavaScript", level: 85, description: "Full-stack development, modern ES6+", years: "3" },
                { name: "PHP", level: 80, description: "Server-side development, Laravel framework", years: "2" },
                { name: "Java", level: 70, description: "Object-oriented programming, desktop apps", years: "2" }
            ]
        },
        frameworks: {
            title: "Frameworks & Tools",
            subtitle: "Powerful tools that accelerate development",
            icon: "fas fa-layer-group",
            skills: [
                { name: "Django", level: 88, description: "Robust web applications, REST APIs", years: "2" },
                { name: "Laravel", level: 85, description: "Elegant web applications, MVC architecture", years: "2" },
                { name: "Next.js", level: 80, description: "Performance optimization, SSR/SSG", years: "1" },
                { name: "React", level: 82, description: "Interactive UIs, component architecture", years: "2" }
            ]
        },
        data: {
            title: "Data & Infrastructure",
            subtitle: "Managing and leveraging data effectively",
            icon: "fas fa-database",
            skills: [
                { name: "PostgreSQL", level: 85, description: "Complex queries, database design", years: "2" },
                { name: "MySQL", level: 88, description: "Relational database management", years: "3" },
                { name: "Redis", level: 75, description: "Caching, real-time applications", years: "1" },
                { name: "Web Scraping", level: 85, description: "Data extraction, automation", years: "2" }
            ]
        },
        emerging: {
            title: "Emerging Technologies",
            subtitle: "Exploring the frontiers of technology",
            icon: "fas fa-brain",
            skills: [
                { name: "Machine Learning", level: 70, description: "NLP models, data analysis", years: "1" },
                { name: "AI Integration", level: 75, description: "LLM implementation, smart features", years: "1" },
                { name: "Cloud Deployment", level: 78, description: "Vercel, Firebase, scaling", years: "2" },
                { name: "DevOps", level: 65, description: "Git workflows, CI/CD basics", years: "1" }
            ]
        }
    };

    const categories = [
        { id: 'core', label: 'Core Tech', icon: 'fas fa-code' },
        { id: 'frameworks', label: 'Frameworks', icon: 'fas fa-layer-group' },
        { id: 'data', label: 'Data & DB', icon: 'fas fa-database' },
        { id: 'emerging', label: 'Emerging', icon: 'fas fa-brain' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    };

    return (
        <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <SectionTitle
                    title="Technical Evolution"
                    subtitle="A journey through the technologies that shape my craft"
                />

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    {/* Timeline Introduction */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-16"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                Three Years of Growth
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                From writing my first "Hello World" to building production-ready applications,
                                each technology I've learned has been a stepping stone to solving more complex challenges.
                            </p>
                        </div>
                    </motion.div>

                    {/* Category Navigation */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center mb-12"
                    >
                        <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-200">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                                {categories.map((category) => (
                                    <motion.button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`relative px-6 py-4 rounded-xl transition-all duration-300 ${
                                            activeCategory === category.id
                                                ? 'text-white'
                                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                        }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {activeCategory === category.id && (
                                            <motion.div
                                                layoutId="activeSkillBg"
                                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
                                                initial={false}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 30
                                                }}
                                            />
                                        )}
                                        <div className="relative z-10 flex flex-col items-center">
                                            <i className={`${category.icon} text-xl mb-2`}></i>
                                            <span className="text-sm font-medium">{category.label}</span>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Content */}
                    <motion.div
                        className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200"
                        variants={itemVariants}
                    >
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                                    {skillCategories[activeCategory].title}
                                </h3>
                                <p className="text-slate-600 text-lg">
                                    {skillCategories[activeCategory].subtitle}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {skillCategories[activeCategory].skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="group"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center">
                                                <span className="font-semibold text-slate-900 text-lg">{skill.name}</span>
                                                <span className="ml-3 px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                                                    {skill.years} {skill.years === '1' ? 'year' : 'years'}
                                                </span>
                                            </div>
                                            <span className="text-sm font-medium text-slate-600">{skill.level}%</span>
                                        </div>

                                        <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                            {skill.description}
                                        </p>

                                        <div className="relative">
                                            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden"
                                                    initial={{ width: 0 }}
                                                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                                    transition={{
                                                        duration: 1.5,
                                                        ease: "easeOut",
                                                        delay: 0.5 + index * 0.1
                                                    }}
                                                >
                                                    <motion.div
                                                        className="absolute inset-0 bg-white opacity-20"
                                                        animate={{ x: ['-100%', '100%'] }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            delay: 1 + index * 0.2
                                                        }}
                                                    />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Professional Approach */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                                My Development Philosophy
                            </h3>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Every technology I learn serves a purpose. I don't just collect skills—I master tools
                                    that solve real problems. Whether it's optimizing database queries for better performance
                                    or implementing machine learning models for smarter applications.
                                </p>
                                <p>
                                    My approach combines technical depth with practical application. I believe in writing
                                    clean, maintainable code that not only works today but scales for tomorrow's challenges.
                                </p>
                            </div>

                            <div className="flex items-center space-x-4 pt-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                    <i className="fas fa-quote-left text-white"></i>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900 italic">
                                        "Clean code always looks like it was written by someone who cares."
                                    </p>
                                    <p className="text-sm text-slate-500">— My coding philosophy</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                            <h4 className="text-xl font-bold text-slate-900 mb-6">Learning Journey</h4>
                            <div className="space-y-4">
                                {[
                                    { year: '2022', milestone: 'Started with Python basics', icon: 'fab fa-python' },
                                    { year: '2023', milestone: 'Built first web applications', icon: 'fas fa-globe' },
                                    { year: '2024', milestone: 'Mastered full-stack development', icon: 'fas fa-layer-group' },
                                    { year: '2025', milestone: 'Exploring AI and ML integration', icon: 'fas fa-brain' }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: 0.8 + index * 0.2 }}
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <i className={`${item.icon} text-white text-sm`}></i>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900">{item.year}</p>
                                            <p className="text-slate-600 text-sm">{item.milestone}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Next Chapter */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-20"
                    >
                        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                See these skills in action
                            </h3>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Explore the projects where I've applied these technologies to create
                                meaningful solutions and deliver real value.
                            </p>
                            <motion.a
                                href="#projects"
                                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View My Projects
                                <i className="ml-2 fas fa-arrow-right"></i>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;