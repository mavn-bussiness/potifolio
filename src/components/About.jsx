import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from './SectionTitle';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15
            }
        }
    };

    const values = [
        {
            icon: 'fas fa-lightbulb',
            title: 'Innovation',
            description: 'Technology should solve real problems and create meaningful impact.'
        },
        {
            icon: 'fas fa-users',
            title: 'Collaboration',
            description: 'The best solutions emerge from diverse perspectives and teamwork.'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Growth',
            description: 'Continuous learning is essential in our evolving tech landscape.'
        }
    ];

    return (
        <section id="about" className="py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <SectionTitle
                    title="About Me"
                    subtitle="Building tomorrow's solutions, one line at a time"
                />

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 lg:p-8 mb-12"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                            <div className="lg:col-span-2 space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                                        From Curiosity to Code
                                    </h3>
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                                </div>

                                <div className="space-y-3 text-slate-600 leading-relaxed">
                                    <p>
                                        My journey into software engineering began with a simple question: "How can technology make life better?"
                                        This curiosity led me from St. Henry's College to Makerere University, where I'm now pursuing Software Engineering.
                                    </p>
                                    <p>
                                        Today, I'm driven by the belief that every line of code should serve a purpose—whether it's
                                        optimizing performance, creating intuitive experiences, or solving complex challenges.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100">
                                    <h4 className="font-semibold text-slate-900 mb-3 text-sm">Quick Stats</h4>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            ['Experience', '3+ Years'],
                                            ['Projects', '15+'],
                                            ['Technologies', '10+'],
                                            ['Based in', 'Kampala, UG']
                                        ].map(([label, value]) => (
                                            <div key={label} className="flex justify-between items-center">
                                                <span className="text-slate-600">{label}</span>
                                                <span className="font-semibold text-slate-900">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Currently</h4>
                                    <p className="text-slate-600 text-sm">
                                        Pursuing Software Engineering at Makerere University while seeking opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className="text-center mb-8">
                            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2">
                                What Drives Me
                            </h3>
                            <p className="text-slate-600 max-w-2xl mx-auto text-sm">
                                These principles guide every project and solution I create.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
                                    whileHover={{ y: -2, scale: 1.01 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
                                        <i className={`${value.icon} text-white text-sm`}></i>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-center mb-2">
                                        {value.title}
                                    </h4>
                                    <p className="text-slate-600 text-center text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-12"
                    >
                        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 lg:p-8 text-white">
                            <h3 className="text-lg lg:text-xl font-bold mb-3">
                                Ready to explore my technical expertise?
                            </h3>
                            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm">
                                Discover the technologies and skills I've mastered throughout my journey.
                            </p>
                            <motion.a
                                href="#skills"
                                className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore My Skills
                                <i className="ml-2 fas fa-arrow-right text-sm"></i>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;