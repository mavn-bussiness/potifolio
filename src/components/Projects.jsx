import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "VoxCar",
            category: "Web Application",
            type: "web",
            year: "2025",
            challenge: "Canadian car dealership needed a modern platform with real-time inventory management and enhanced user experience.",
            solution: "Built responsive Next.js application with advanced search capabilities and performance optimization techniques.",
            impact: "25% reduction in page load times and significantly improved user engagement metrics.",
            technologies: ["Next.js", "React", "Web Scraping", "Performance Optimization"],
            role: "Full-Stack Developer Intern",
            duration: "3 months",
            github: "https://github.com/GSTee-Project/GSTee-Frontend-App",
            featured: true,
            color: "from-blue-500 to-cyan-500",
            lessons: [
                "Advanced Git workflows in team environment",
                "Scrum methodology and agile practices",
                "Performance optimization techniques",
                "Real-time data integration"
            ]
        },
        {
            id: 2,
            title: "Mindcare",
            category: "AI Platform",
            type: "ai",
            year: "2025",
            challenge: "Mental health support needed privacy-focused platform with intelligent recommendations and secure communication.",
            solution: "Developed Django platform with LLM integration, real-time WebSocket communication, and Redis caching for scalability.",
            impact: "Created secure, scalable mental health support system with AI-powered insights and privacy-first architecture.",
            technologies: ["Django", "Redis", "WebSockets", "LLMs", "NLP"],
            role: "Lead Developer",
            duration: "4 months",
            github: "https://github.com/mavn-bussiness/MENTAL-HEALTH-SUPPORT-SYSTEM",
            featured: true,
            color: "from-green-500 to-emerald-500",
            lessons: [
                "Privacy-first development approach",
                "LLM integration and fine-tuning",
                "Real-time system architecture",
                "Healthcare software considerations"
            ]
        },
        {
            id: 3,
            title: "School Management System",
            category: "Enterprise Solution",
            type: "enterprise",
            year: "2025",
            challenge: "Educational institution needed comprehensive system for managing fees, staff operations, and administrative workflows.",
            solution: "Built Laravel-based system with role-based access control, secure authentication, and streamlined administrative processes.",
            impact: "Digitized school operations, improved efficiency, and reduced administrative overhead by 40%.",
            technologies: ["Laravel", "MySQL", "Authentication", "Role Management"],
            role: "Full-Stack Developer",
            duration: "2 months",
            github: "https://github.com/mavn-bussiness/SCHOOL-MANAGEMENT-SYSTEM",
            featured: false,
            color: "from-purple-500 to-pink-500",
            lessons: [
                "Enterprise-level security implementation",
                "Complex role-based access control",
                "Administrative workflow optimization",
                "Database design for large datasets"
            ]
        },
        {
            id: 4,
            title: "Quiz Management System",
            category: "Desktop Application",
            type: "desktop",
            year: "2023",
            challenge: "Mathematics competition organizers needed efficient terminal-based quiz system with automated scoring capabilities.",
            solution: "Developed Java application with serialization, socket programming, and efficient data processing for competition management.",
            impact: "Automated scoring system reduced manual work by 80% and improved competition efficiency.",
            technologies: ["Java", "Serialization", "Sockets", "Terminal UI"],
            role: "Solo Developer",
            duration: "1 month",
            github: "",
            featured: false,
            color: "from-orange-500 to-red-500",
            lessons: [
                "Advanced Java concepts application",
                "Efficient data processing techniques",
                "System architecture for competitions",
                "Terminal UI/UX design"
            ]
        },
        {
            id: 5,
            title: "Bar Management System",
            category: "POS Solution",
            type: "web",
            year: "2024",
            challenge: "Local bar required comprehensive management system for inventory tracking, order processing, and payment handling.",
            solution: "Created web-based POS system with real-time inventory management, order processing, and integrated payment gateway.",
            impact: "Streamlined bar operations, reduced inventory waste by 30%, and improved order accuracy.",
            technologies: ["JavaScript", "PHP", "MySQL", "Payment Processing"],
            role: "Full-Stack Developer",
            duration: "2 months",
            github: "https://github.com/mavn-bussiness/BAR-MANAGEMENT-SYSTEM",
            featured: false,
            color: "from-indigo-500 to-purple-500",
            lessons: [
                "Point-of-sale system design",
                "Real-world business requirements",
                "Payment gateway integration",
                "Inventory management systems"
            ]
        }
    ];

    const filters = [
        { id: 'all', label: 'All Projects', count: projects.length },
        { id: 'web', label: 'Web Apps', count: projects.filter(p => p.type === 'web').length },
        { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.type === 'ai').length },
        { id: 'enterprise', label: 'Enterprise', count: projects.filter(p => p.type === 'enterprise').length },
        { id: 'desktop', label: 'Desktop', count: projects.filter(p => p.type === 'desktop').length }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.type === filter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
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

    const ProjectCard = ({ project }) => (
        <motion.div
            layout
            variants={itemVariants}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300"
            whileHover={{ y: -2 }}
        >
            <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-md">
                                {project.year}
                            </span>
                            {project.featured && (
                                <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-md flex items-center">
                                    <i className="fas fa-star mr-1"></i>
                                    Featured
                                </span>
                            )}
                        </div>
                        <p className="text-blue-600 font-medium text-sm">{project.category}</p>
                        <p className="text-slate-500 text-xs">{project.role} • {project.duration}</p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.solution}
                </p>

                {/* Impact highlight */}
                <div className="bg-slate-50 rounded-lg p-3 mb-4">
                    <h4 className="font-medium text-slate-900 mb-1 text-xs">Impact</h4>
                    <p className="text-slate-700 text-xs">{project.impact}</p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs">
                                +{project.technologies.length - 4} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                    <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-all duration-300"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                    >
                        Learn More
                    </motion.button>
                    {project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:text-slate-900 transition-all duration-300"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            <i className="fab fa-github text-sm"></i>
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="projects" className="py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <SectionTitle
                    title="Projects"
                    subtitle="Real solutions for real problems"
                />

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-7xl mx-auto"
                >
                    {/* Introduction */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-8"
                    >
                        <div className="bg-slate-50 rounded-xl p-5 lg:p-6 max-w-3xl mx-auto">
                            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">
                                From Concept to Code
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Each project represents a unique challenge solved through thoughtful design,
                                clean code, and user-focused thinking. Here's how I've tackled real-world problems.
                            </p>
                        </div>
                    </motion.div>

                    {/* Filter Tabs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center mb-8"
                    >
                        <div className="bg-white rounded-xl p-1 shadow-sm border border-slate-200">
                            <div className="flex flex-wrap gap-1">
                                {filters.map((filterOption) => (
                                    <motion.button
                                        key={filterOption.id}
                                        onClick={() => setFilter(filterOption.id)}
                                        className={`relative px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                                            filter === filterOption.id
                                                ? 'text-blue-600'
                                                : 'text-slate-600 hover:text-slate-900'
                                        }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {filter === filterOption.id && (
                                            <motion.div
                                                layoutId="activeFilter"
                                                className="absolute inset-0 bg-blue-50 rounded-lg"
                                                initial={false}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 30
                                                }}
                                            />
                                        )}
                                        <span className="relative z-10">
                                            {filterOption.label}
                                            <span className="ml-1 text-xs opacity-60">({filterOption.count})</span>
                                        </span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        <AnimatePresence mode="wait">
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center"
                    >
                        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl p-6 lg:p-8 text-white">
                            <h3 className="text-lg lg:text-xl font-bold mb-2">
                                Ready to collaborate on your next project?
                            </h3>
                            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm">
                                Let's discuss how my experience can contribute to your team's success.
                            </p>
                            <motion.a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start a Conversation
                                <i className="ml-2 fas fa-arrow-right text-sm"></i>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">{selectedProject.title}</h3>
                                    <p className="text-blue-600 text-sm">{selectedProject.category}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
                                >
                                    <i className="fas fa-times text-slate-600 text-sm"></i>
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">The Challenge</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.challenge}</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">My Solution</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.solution}</p>
                                </div>

                                <div className="bg-slate-50 rounded-lg p-3">
                                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Impact</h4>
                                    <p className="text-slate-700 text-sm">{selectedProject.impact}</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Key Learnings</h4>
                                    <div className="space-y-2">
                                        {selectedProject.lessons.map((lesson, index) => (
                                            <div key={index} className="flex items-start text-sm">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                                <span className="text-slate-600">{lesson}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Technologies</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-sm pt-2">
                                    <div>
                                        <span className="text-slate-500">Role:</span>
                                        <p className="font-medium text-slate-900">{selectedProject.role}</p>
                                    </div>
                                    <div>
                                        <span className="text-slate-500">Duration:</span>
                                        <p className="font-medium text-slate-900">{selectedProject.duration}</p>
                                    </div>
                                </div>

                                {selectedProject.github && (

                                    <a href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 bg-slate-900 text-white text-center rounded-lg font-medium hover:bg-slate-800 transition-colors text-sm"
                                    >
                                    <i className="fab fa-github mr-2"></i>
                                    View Source Code
                                    </a>
                                    )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;