import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../../config/data';

const Hero: React.FC = () => {
    return (
        <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden" style={{ background: '#fcfcfc' }}>
            {/* Decorative background gradients */}
            <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
                <div className="position-absolute rounded-circle bg-info opacity-10 blur-xl" style={{ width: '400px', height: '400px', top: '-100px', left: '-100px', filter: 'blur(100px)' }}></div>
                <div className="position-absolute rounded-circle bg-warning opacity-10 blur-xl" style={{ width: '500px', height: '500px', bottom: '-200px', right: '-100px', filter: 'blur(100px)' }}></div>
            </div>

            <div className="container position-relative" style={{ zIndex: 1, paddingTop: '100px' }}>
                <div className="row align-items-center gy-5">
                    <div className="col-lg-6 text-center text-lg-start">
                        <motion.span
                            className="badge bg-dark bg-opacity-10 text-dark rounded-pill px-3 py-2 fw-medium mb-4 d-inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            ✨ Premium Personalized Gifts
                        </motion.span>

                        <motion.h1
                            className="display-2 fw-bold mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            style={{ lineHeight: 1.1 }}
                        >
                            Memories <br />
                            <span className="text-gradient">Crafted With Elegance.</span>
                        </motion.h1>

                        <motion.p
                            className="lead text-secondary mb-5 pe-lg-5"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Elevate your gifting experience with our premium, personalized keepsakes. Perfect for birthdays, anniversaries, and corporate events. Every detail perfected for the ones you love.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3"
                        >
                            <button className="btn btn-dark rounded-pill px-5 py-3 fw-medium fs-5 shadow-lg d-flex align-items-center justify-content-center gap-2">
                                Explore Gifts <i className="bi bi-arrow-right"></i>
                            </button>
                            <button className="btn btn-outline-dark rounded-pill px-5 py-3 fw-medium fs-5 d-flex align-items-center justify-content-center gap-2">
                                <i className="bi bi-whatsapp"></i> Order Now
                            </button>
                        </motion.div>
                    </div>

                    <div className="col-lg-6">
                        <motion.div
                            className="position-relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                        >
                            <div className="ratio ratio-1x1 bg-white rounded-circle shadow-lg mx-auto position-relative" style={{ maxWidth: '500px' }}>
                                <div className="w-100 h-100 rounded-circle overflow-hidden bg-light d-flex align-items-center justify-content-center border border-4 border-white shadow-sm">
                                    <img src={ASSETS.HERO_IMAGE} alt="Premium LED Frame Gift" className="w-100 h-100 object-fit-cover" fetchPriority="high" />
                                </div>
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                className="position-absolute bg-white p-3 rounded-4 shadow-lg d-flex align-items-center gap-3"
                                style={{ top: '10%', right: '-5%' }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            >
                                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <div>
                                    <div className="fs-6 mb-0 fw-bold">4.9/5</div>
                                    <small className="text-secondary">Customer Rating</small>
                                </div>
                            </motion.div>

                            <motion.div
                                className="position-absolute bg-white p-3 rounded-4 shadow-lg d-flex align-items-center gap-3"
                                style={{ bottom: '15%', left: '-5%' }}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-box-seam"></i>
                                </div>
                                <div>
                                    <div className="fs-6 mb-0 fw-bold">1k+</div>
                                    <small className="text-secondary">Gifts Delivered</small>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
