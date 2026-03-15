import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_REVIEWS } from '../../config/data';

const Testimonials: React.FC = () => {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container relative">
                <div className="text-center mb-5">
                    <motion.h2
                        className="display-5 fw-bold mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What Our Customers Say
                    </motion.h2>
                    <motion.div
                        className="d-flex justify-content-center align-items-center gap-2 text-warning fs-4 mb-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </motion.div>
                    <motion.p
                        className="lead text-secondary opacity-75"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Trusted by over 700+ happy customers everywhere
                    </motion.p>
                </div>

                <div className="row g-4 justify-content-center">
                    {MOCK_REVIEWS.map((review, idx) => (
                        <div className="col-12 col-md-6 col-lg-4" key={review.id}>
                            <motion.div
                                className="card h-100 border-0 shadow-sm p-4"
                                style={{ borderRadius: '1.5rem', backgroundColor: '#fcfcfc' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                            >
                                <div className="d-flex align-items-center mb-4">
                                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fs-5 fw-bold" style={{ width: '50px', height: '50px' }}>
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="ms-3">
                                        <div className="fs-6 fw-bold mb-0">{review.name}</div>
                                        <small className="text-secondary">{review.date}</small>
                                    </div>
                                </div>
                                <div className="mb-3 text-warning">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill me-1"></i>
                                    ))}
                                </div>
                                <p className="text-secondary fst-italic position-relative z-index-1">
                                    "{review.text}"
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
