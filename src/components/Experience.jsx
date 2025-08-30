import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const timeline = [
        {
            type: 'education',
            title: 'Software Engineering Student',
            organization: 'Makerere University',
            location: 'Kampala, Uganda',
            period: '2023 - 2028',
            status: 'Current',
            description: 'Pursuing comprehensive software engineering education with focus on modern development practices, algorithms, and system design.',
            highlights: [
                'Computer Science fundamentals and data structures',
                'Software architecture and design patterns',
                'Team projects and collaborative development',
                'Research in emerging technologies'
            ],
            icon: 'fas fa-graduation-cap',
            color: 'from-indigo-500 to-purple-600'
        },
        {
            type: 'experience',
            title: 'Software Development Intern',
            organization: 'Oddysey Technologies',
            location: 'Kagoma, Uganda',
            period: 'June 2025 - August 2025',
            status: 'Completed',
            description: 'Contributed to VoxCar project development, implementing performance optimizations and ML features while practicing agile methodologies.',
            highlights: [
                'Reduced application load times by 25% through Next.js optimization',
                'Developed and fine-tuned NLP models for enhanced search functionality',
                'Facilitated daily standups and improved team coordination',
                'Implemented automated web scraping solutions for data collection'
            ],
            technologies: ['Next.js', 'Python', 'NLP', 'Web Scraping', 'Scrum'],
            icon: 'fas fa-laptop-code',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            type: 'education',
            title: 'Advanced Level Certificate',
            organization: 'St. Henry\'s College, Kitovu',
            location: 'Masaka, Uganda',
            period: '2019 - 2022',
            status: 'Completed',
            description: 'Advanced education in Mathematics, Physics, and Computer Science, building the analytical foundation for engineering studies.',
            highlights: [
                'Strong foundation in Mathematics and Physics',
                'Introduction to programming concepts',
                'Leadership in academic and technology clubs',
                'Developed logical thinking and problem-solving skills'
            ],
            icon: 'fas fa-book',
            color: 'from-green-500 to-teal-500'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    };

    const timelineVariants = {
        hidden: { height: 0 },
        visible: {
            height: "100%",
            transition: {
                duration: 2,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <SectionTitle
                    title="Professional Growth"
                    subtitle="The path that shaped my expertise and perspective"
                />

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-5xl mx-auto"
                >
                    {/* Story Introduction */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-16"
                    >
                        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-200">
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                                My Professional Evolution
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                                From academic foundations to hands-on industry experience, each step has been
                                carefully chosen to build both technical depth and practical problem-solving abilities.
                                This timeline reflects not just what I've learned, but how I've grown as a professional.
                            </p>
                        </div>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <motion.div
                            className="absolute left-6 md:left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600 origin-top"
                            variants={timelineVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative pl-16 md:pl-20"
                                >
                                    {/* Timeline dot */}
                                    <motion.div
                                        className={`absolute left-0 w-12 h-12 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg border-4 border-white`}
                                        style={{ top: '24px' }}
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                                        transition={{ delay: index * 0.3 + 0.5, type: "spring", stiffness: 200 }}
                                    >
                                        <i className={`${item.icon} text-white text-lg`}></i>
                                    </motion.div>

                                    {/* Content Card */}
                                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
                                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                                            <div>
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                                                        {item.title}
                                                    </h3>
                                                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                                                        item.status === 'Current'
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-slate-100 text-slate-600'
                                                    }`}>
                                                        {item.status}
                                                    </span>
                                                </div>
                                                <p className="text-lg font-semibold text-blue-600 mb-1">
                                                    {item.organization}
                                                </p>
                                                <p className="text-slate-500">{item.location}</p>
                                            </div>
                                            <div className="mt-4 lg:mt-0 text-left lg:text-right">
                                                <span className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-full font-medium`}>
                                                    {item.period}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                            {item.description}
                                        </p>

                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-slate-900">Key Contributions & Learnings:</h4>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                                {item.highlights.map((highlight, highlightIndex) => (
                                                    <motion.div
                                                        key={highlightIndex}
                                                        className="flex items-start"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                        transition={{ delay: index * 0.3 + highlightIndex * 0.1 + 0.8 }}
                                                    >
                                                        <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                                                        <span className="text-slate-700">{highlight}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Technologies for work experience */}
                                        {item.technologies && (
                                            <div className="mt-6 pt-6 border-t border-slate-100">
                                                <h4 className="font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Outlook */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-20"
                    >
                        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-200">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                                        Looking Forward
                                    </h3>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        My journey has been about continuous growth and learning. Each experience has built
                                        upon the last, creating a strong foundation for tackling complex challenges and
                                        contributing meaningful value to any team I join.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'Seeking full-time software engineering opportunities',
                                            'Open to internships and collaborative projects',
                                            'Passionate about making impactful contributions',
                                            'Ready to bring fresh perspectives and dedication'
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                <span className="text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
                                    <h4 className="text-xl font-bold mb-4">Ready to Contribute</h4>
                                    <p className="text-blue-100 mb-6 leading-relaxed">
                                        I'm actively seeking opportunities to apply my skills in a dynamic environment
                                        where I can contribute to meaningful projects while continuing to grow professionally.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <i className="fas fa-check text-green-400 mr-3"></i>
                                            <span>Available for immediate start</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-check text-green-400 mr-3"></i>
                                            <span>Open to remote or hybrid work</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-check text-green-400 mr-3"></i>
                                            <span>Passionate about team collaboration</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Next Step */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-20"
                    >
                        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                Let's Start a Conversation
                            </h3>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Interested in learning more about my experience or discussing potential opportunities?
                                I'd love to connect and explore how we can work together.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.a
                                    href="#contact"
                                    className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <i className="fas fa-handshake mr-2"></i>
                                    Get In Touch
                                </motion.a>
                                <motion.a
                                    href="#"
                                    download
                                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <i className="fas fa-download mr-2"></i>
                                    Download Resume
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;