import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ENV } from '../config/env';
import { ASSETS } from '../config/data';

const About: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: '#fcfcfc' }}
        >
            <Helmet>
                <title>About Us | {ENV.SITE_NAME}</title>
                <meta name="description" content="Learn about our story, mission, and dedication to crafting the perfect personalized gifts since our inception." />
            </Helmet>

            {/* Header padding for sticky nav */}
            <div style={{ height: '80px' }}></div>

            {/* Hero Section */}
            <section className="py-5" style={{ backgroundColor: '#1d1d1f', color: '#fff' }}>
                <div className="container py-5 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="display-3 fw-bold mb-4">Crafting Memories Since Inception</h1>
                        <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
                            We believe that every gift tells a story. At {ENV.SITE_NAME}, our vision is to turn your precious moments into eternal keepsakes with unmatched premium quality.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story & Mission Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="display-6 fw-bold mb-4">Our Story</h2>
                                <p className="text-secondary mb-4 fs-5" style={{ lineHeight: '1.8' }}>
                                    What started as a small passion for design and customization quickly grew into a fully-fledged premium gifting destination. We realized that off-the-shelf products lacked the emotional connection people seek when gifting their loved ones.
                                </p>
                                <p className="text-secondary fs-5" style={{ lineHeight: '1.8' }}>
                                    Today, we leverage state-of-the-art laser engraving, precision UV printing, and handpicked materials to deliver products that don't just look good, but feel incredibly premium.
                                </p>
                            </motion.div>
                        </div>
                        <div className="col-lg-6">
                            <motion.div
                                className="position-relative overflow-hidden rounded-4 shadow-sm mb-4"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                style={{ height: '250px' }}
                            >
                                <img src={ASSETS.ABOUT_US_IMAGE} alt="Inside Karthikeya Customized Gifts" className="w-100 h-100 object-fit-cover" />
                            </motion.div>
                            <motion.div
                                className="position-relative p-4 bg-white rounded-4 shadow-sm"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="d-flex align-items-center mb-4">
                                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px' }}>
                                        <i className="bi bi-bullseye fs-3"></i>
                                    </div>
                                    <h3 className="fw-bold mb-0">Our Mission</h3>
                                </div>
                                <p className="text-secondary fs-5 mb-0">
                                    To provide an unparalleled, seamless, and elegant gifting experience by offering meticulously crafted personalized products that celebrate life's most meaningful moments.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Stats */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">Why Choose Us</h2>
                    </div>
                    <div className="row g-4 text-center">
                        {[
                            { num: '10K+', label: 'Happy Customers', icon: 'bi-emoji-smile' },
                            { num: '500+', label: 'Premium Designs', icon: 'bi-palette' },
                            { num: '100%', label: 'Quality Assured', icon: 'bi-shield-check' },
                            { num: '24/7', label: 'Support via WhatsApp', icon: 'bi-chat-dots' }
                        ].map((stat, idx) => (
                            <div className="col-6 col-md-3" key={idx}>
                                <motion.div
                                    className="p-4 bg-white rounded-4 shadow-sm h-100"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <i className={`bi ${stat.icon} fs-1 text-info mb-3 d-block`}></i>
                                    <h3 className="fw-bold mb-1 display-6">{stat.num}</h3>
                                    <p className="text-secondary mb-0 fw-medium">{stat.label}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
