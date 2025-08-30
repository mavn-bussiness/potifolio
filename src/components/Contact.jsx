import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const contactMethods = [
        {
            icon: 'fas fa-envelope',
            title: 'Email',
            subtitle: 'Professional inquiries',
            value: 'mpangamarvin2003@gmail.com',
            link: 'mailto:mpangamarvin2003@gmail.com',
            description: 'Best for detailed project discussions and formal communications'
        },
        {
            icon: 'fab fa-linkedin',
            title: 'LinkedIn',
            subtitle: 'Professional network',
            value: 'Connect with me',
            link: 'https://www.linkedin.com/in/mpanga-marvin/',
            description: 'Let\'s build our professional network together'
        },
        {
            icon: 'fas fa-phone',
            title: 'Phone',
            subtitle: 'Direct conversation',
            value: '+256 757 006088',
            link: 'tel:+256757006088',
            description: 'Available for calls during business hours (EAT)'
        },
        {
            icon: 'fab fa-github',
            title: 'GitHub',
            subtitle: 'Code collaboration',
            value: 'View my code',
            link: 'https://github.com/mavn-bussiness',
            description: 'Explore my open-source contributions and projects'
        }
    ];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', company: '', message: '' });

            setTimeout(() => {
                setSubmitStatus(null);
            }, 4000);
        }, 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <SectionTitle
                    title="Let's Connect"
                    subtitle="Ready to start a conversation about building something great together?"
                />

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    {/* Introduction */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-16"
                    >
                        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                                The Next Chapter Starts Here
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Whether you're looking for a dedicated team member, have an exciting project in mind,
                                or simply want to connect with a fellow tech enthusiast, I'd love to hear from you.
                                Every great collaboration begins with a simple conversation.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Methods */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                                    Choose Your Preferred Method
                                </h3>
                                <p className="text-slate-600 mb-8">
                                    I believe in making connections easy. Reach out through whichever channel works best for you.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {contactMethods.map((method, index) => (
                                    <motion.a
                                        key={index}
                                        href={method.link}
                                        target={method.link.startsWith('http') ? '_blank' : '_self'}
                                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                        className="group block bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                                        whileHover={{ x: 4, scale: 1.01 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="flex items-start">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <i className={`${method.icon} text-white`}></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="font-bold text-slate-900">{method.title}</h4>
                                                    <span className="text-slate-500 text-sm">{method.subtitle}</span>
                                                </div>
                                                <p className="text-blue-600 font-medium mb-2">{method.value}</p>
                                                <p className="text-slate-600 text-sm">{method.description}</p>
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-4">
                                                <i className="fas fa-arrow-right text-slate-400"></i>
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Availability */}
                            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                                <div className="flex items-center mb-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                                    <span className="font-semibold text-green-800">Available for Opportunities</span>
                                </div>
                                <p className="text-green-700 text-sm">
                                    Currently seeking internship and full-time positions.
                                    Response time: Usually within 24 hours.
                                </p>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Direct Message</h3>
                                <p className="text-slate-600 mb-8">
                                    Prefer to reach out directly? Fill out this form and I'll get back to you promptly.
                                </p>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Company/Organization
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="5"
                                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Tell me about your project, opportunity, or how we can work together..."
                                        />
                                    </div>

                                    <motion.button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-xl font-semibold text-lg hover:from-slate-800 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                                />
                                                Sending Message...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center">
                                                <i className="fas fa-paper-plane mr-2"></i>
                                                Send Message
                                            </span>
                                        )}
                                    </motion.button>
                                </div>

                                {/* Success Message */}
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl"
                                    >
                                        <div className="flex items-center">
                                            <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                            <div>
                                                <p className="text-green-800 font-medium">Message sent successfully!</p>
                                                <p className="text-green-600 text-sm">I'll get back to you within 24 hours.</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-20"
                    >
                        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                                Ready to Build Something Amazing?
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                {[
                                    {
                                        icon: 'fas fa-handshake',
                                        title: 'Internship Opportunities',
                                        description: 'Looking for hands-on experience with innovative teams'
                                    },
                                    {
                                        icon: 'fas fa-project-diagram',
                                        title: 'Project Collaboration',
                                        description: 'Excited to contribute to meaningful open-source projects'
                                    },
                                    {
                                        icon: 'fas fa-coffee',
                                        title: 'Tech Discussions',
                                        description: 'Always open to discussing technology, ideas, and innovations'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <i className={`${item.icon} text-white text-xl`}></i>
                                        </div>
                                        <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-blue-100 text-sm">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                                Let's connect and explore how my passion for technology and commitment to excellence
                                can contribute to your team's success.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.a
                                    href="mailto:mpangamarvin2003@gmail.com"
                                    className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <i className="fas fa-envelope mr-2"></i>
                                    Email Me Directly
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

export default Contact;