import React from 'react';
import { motion } from 'framer-motion';
import { ENV } from '../../config/env';
import { INSTAGRAM_POSTS } from '../../config/data';

// For a real integration, you would hit an Instagram Graph API endpoint or use a service like Elfsight.
// We are simulating an elegant grid that links to the Instagram page.

const InstagramFeed: React.FC = () => {
    return (
        <section className="section-padding bg-light">
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-5"
                >
                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mb-3" style={{ width: '60px', height: '60px' }}>
                        <i className="bi bi-instagram fs-2 text-danger"></i>
                    </div>
                    <h2 className="display-6 fw-bold mb-2">Join Our Community</h2>
                    <p className="lead text-secondary">
                        Follow <a href={ENV.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="fw-medium text-dark text-decoration-none border-bottom border-dark pb-1 hover-gradient">{ENV.INSTAGRAM_HANDLE}</a> for daily inspiration
                    </p>
                </motion.div>

                <div className="row g-3 mt-4 justify-content-center">
                    {INSTAGRAM_POSTS.map((img, idx) => (
                        <div className="col-4 col-md-2" key={idx}>
                            <motion.a
                                href={ENV.INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="d-block position-relative overflow-hidden rounded-3 shadow-sm"
                                style={{ aspectRatio: '1/1' }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 hover-opacity-50 transition-base z-index-1 d-flex align-items-center justify-content-center">
                                    <i className="bi bi-instagram text-white fs-3"></i>
                                </div>
                                <img src={img} alt={`Instagram Post ${idx + 1}`} className="w-100 h-100 object-fit-cover transition-base" />
                            </motion.a>
                        </div>
                    ))}
                </div>

                <motion.div
                    className="mt-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <a href={ENV.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark rounded-pill px-4 py-2 fw-medium">
                        Follow Us on Instagram
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default InstagramFeed;
