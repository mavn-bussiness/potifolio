import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: 'fab fa-github',
            url: 'https://github.com/mavn-bussiness',
            description: 'View my code'
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin',
            url: 'https://www.linkedin.com/in/mpanga-marvin/',
            description: 'Professional network'
        },
        {
            name: 'Email',
            icon: 'fas fa-envelope',
            url: 'mailto:mpangamarvin2003@gmail.com',
            description: 'Direct contact'
        }
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const handleNavClick = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-slate-900 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, threshold: 0.1 }}
                >
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                        {/* Brand & Story Conclusion */}
                        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                            <div>
                                <motion.h3
                                    className="text-3xl font-bold text-white mb-4"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    Thank you for following my journey
                                </motion.h3>
                                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6"></div>
                            </div>

                            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                                From a curious student to a passionate software engineer, this portfolio represents
                                my commitment to growth, learning, and building solutions that matter. The story continues
                                with each new project, challenge, and collaboration.
                            </p>

                            <div className="space-y-4">
                                <h4 className="text-white font-semibold">What's next in my journey:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        'Seeking impactful internship opportunities',
                                        'Exploring advanced AI and ML applications',
                                        'Contributing to open-source projects',
                                        'Building solutions for real-world problems'
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                            <span className="text-slate-300 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Connect Section */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h4 className="text-xl font-bold text-white">Let's Stay Connected</h4>

                            <div className="space-y-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target={social.url.startsWith('http') ? '_blank' : '_self'}
                                        rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                                        className="flex items-center p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all duration-300 group"
                                        whileHover={{ x: 4, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-600 transition-colors duration-300">
                                            <i className={`${social.icon} text-slate-300`}></i>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">{social.name}</p>
                                            <p className="text-slate-400 text-sm">{social.description}</p>
                                        </div>
                                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <i className="fas fa-arrow-right text-slate-400"></i>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="bg-slate-800 rounded-xl p-4">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-map-marker-alt text-blue-400 mr-2"></i>
                                    <span className="text-white font-medium">Based in Kampala, Uganda</span>
                                </div>
                                <p className="text-slate-400 text-sm">
                                    East Africa's growing tech hub
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Navigation */}
                    <motion.div
                        variants={itemVariants}
                        className="border-t border-slate-700 pt-8"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex flex-wrap justify-center md:justify-start gap-6">
                                {quickLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        }}
                                        className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                                        whileHover={{ y: -2 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="text-center md:text-right">
                                <p className="text-slate-400 text-sm">
                                    &copy; {currentYear} Marvin Mpanga
                                </p>
                                <p className="text-slate-500 text-xs mt-1">
                                    Built with passion and purpose
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Final CTA */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-12 pt-8 border-t border-slate-700"
                    >
                        <motion.a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('#home');
                            }}
                            className="inline-flex items-center px-6 py-3 border border-slate-600 text-slate-300 rounded-xl hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className="fas fa-arrow-up mr-2"></i>
                            Back to Top
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;