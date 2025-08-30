import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
    const titleVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    };

    const underlineVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: {
            width: "3rem",
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const subtitleVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.5
            }
        }
    };

    return (
        <div className="mb-12 text-center relative">
            <motion.div
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, threshold: 0.3 }}
                className="relative z-10"
            >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-3">
                    {title}
                </h2>

                <div className="flex justify-center mb-3">
                    <motion.div
                        variants={underlineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, threshold: 0.3 }}
                        className="h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                    />
                </div>

                {subtitle && (
                    <motion.p
                        variants={subtitleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, threshold: 0.3 }}
                        className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </motion.div>
        </div>
    );
};

export default SectionTitle;