import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => ({
                id: item.href.substring(1),
                element: document.getElementById(item.href.substring(1))
            }));

            const currentSection = sections.find(section => {
                if (section.element) {
                    const rect = section.element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        // Set initial active section
        setActiveSection('home');
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

    const handleNavClick = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    };

    return (
        <motion.nav
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3'
                    : 'bg-transparent py-6'
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#home');
                        }}
                        className={`text-2xl font-bold transition-colors duration-300 ${
                            scrolled ? 'text-slate-900' : 'text-sky-950'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        M
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            avn
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}
                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    activeSection === item.href.substring(1)
                                        ? scrolled
                                            ? 'text-blue-600'
                                            :  'text-slate-900'
                                        : scrolled
                                            ? 'text-slate-600 hover:text-slate-900'
                                            : 'text-slate-700 hover:text-slate-900'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeSection === item.href.substring(1) && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className={`absolute inset-0 rounded-lg ${
                                            scrolled ? 'bg-blue-50' : 'bg-white/10'
                                        }`}
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30
                                        }}
                                    />
                                )}
                                <span className="relative z-10">{item.name}</span>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#contact');
                        }}
                        className={`hidden md:inline-flex items-center px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                            scrolled
                                ? 'bg-slate-900 text-white hover:bg-slate-800'
                                : 'bg-white text-slate-900 hover:bg-slate-100'
                        }`}
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Let's Talk
                    </motion.a>

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                        }`}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.div
                            animate={mobileMenuOpen ? "open" : "closed"}
                            className="flex flex-col justify-center items-center"
                        >
                            <motion.span
                                className={`block w-6 h-0.5 mb-1 transition-all duration-300 ${
                                    scrolled ? 'bg-slate-700' : 'bg-white'
                                }`}
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: 45, y: 6 }
                                }}
                            />
                            <motion.span
                                className={`block w-6 h-0.5 mb-1 transition-all duration-300 ${
                                    scrolled ? 'bg-slate-700' : 'bg-white'
                                }`}
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 }
                                }}
                            />
                            <motion.span
                                className={`block w-6 h-0.5 transition-all duration-300 ${
                                    scrolled ? 'bg-slate-700' : 'bg-white'
                                }`}
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: -45, y: -6 }
                                }}
                            />
                        </motion.div>
                    </motion.button>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden pb-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 m-2 shadow-lg border border-slate-200">
                                <div className="space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick(item.href);
                                            }}
                                            className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                                                activeSection === item.href.substring(1)
                                                    ? 'bg-blue-50 text-blue-600'
                                                    : 'text-slate-700 hover:bg-slate-50'
                                            }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {item.name}
                                        </motion.a>
                                    ))}
                                    <motion.a
                                        href="#contact"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick('#contact');
                                        }}
                                        className="block w-full mt-4 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium text-center hover:bg-slate-800 transition-all duration-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: navItems.length * 0.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Let's Talk
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default NavBar;