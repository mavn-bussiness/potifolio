import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full opacity-10"
                        style={{
                            width: `${80 + i * 30}px`,
                            height: `${80 + i * 30}px`,
                            left: `${20 + i * 25}%`,
                            top: `${20 + i * 20}%`,
                            background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                        }}
                        animate={{
                            x: [0, 20, 0],
                            y: [0, -15, 0],
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 6 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 1,
                        }}
                    />
                ))}
            </div>
        </>
    );
};

const TypewriterText = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const phrases = [
        'Software Engineer',
        'Problem Solver',
        'Tech Enthusiast',
        'Full-Stack Developer'
    ];

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 80;
        const currentPhrase = phrases[currentIndex];

        const timer = setTimeout(() => {
            if (!isDeleting && displayText === currentPhrase) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % phrases.length);
            } else {
                setDisplayText(prev =>
                    isDeleting
                        ? prev.substring(0, prev.length - 1)
                        : currentPhrase.substring(0, prev.length + 1)
                );
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentIndex]);

    return (
        <div className="h-12 flex items-center">
            <span className="text-xl lg:text-2xl font-medium text-blue-600">
                {displayText}
                <span className="opacity-70 animate-pulse">|</span>
            </span>
        </div>
    );
};

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <AnimatedBackground />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="text-center lg:text-left space-y-6">
                        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                            <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="text-sm font-medium text-slate-700">
                                    Available for opportunities
                                </span>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-3">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                <span className="text-slate-900">Hi, I'm </span>
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                        Marvin
                                    </span>
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.6, duration: 0.6 }}
                                    />
                                </span>
                            </h1>
                            <TypewriterText />
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Building scalable applications and innovative solutions with modern technologies.
                            Passionate about creating meaningful digital experiences.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2"
                        >
                            <motion.a
                                href="#projects"
                                className="group inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all duration-300"
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View My Work
                                <motion.i
                                    className="ml-2 fas fa-arrow-right text-sm"
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </motion.a>

                            <motion.a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 rounded-xl font-medium hover:border-slate-400 hover:text-slate-900 transition-all duration-300"
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <i className="mr-2 fas fa-envelope text-sm"></i>
                                Get In Touch
                            </motion.a>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center lg:justify-start gap-8 pt-4"
                        >
                            {[
                                { number: '3+', label: 'Years Experience' },
                                { number: '15+', label: 'Projects' },
                                { number: '10+', label: 'Technologies' }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                                    <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center lg:justify-end"
                    >
                        <motion.div
                            className="relative"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-1">
                                    <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                                        <img
                                            src="face-card.jpg"
                                            alt="Marvin Mpanga - Software Engineer"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <motion.div
                                    className="absolute -top-4 -right-4 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shadow-md"
                                    animate={{ rotate: [0, 8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <i className="fas fa-code text-lg text-blue-600"></i>
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-md border border-white/50"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-xs font-medium text-slate-900">Ready to collaborate</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center text-slate-400 cursor-pointer"
                    >
                        <span className="text-xs mb-2 font-medium">Scroll to explore</span>
                        <div className="w-5 h-8 border border-slate-300 rounded-full flex justify-center p-1">
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-0.5 h-2 bg-slate-400 rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;