import React from 'react';
import { motion } from 'framer-motion';

const Categories: React.FC = () => {
    const categories = [
        { title: 'LED Photo Frames', icon: 'bi-image-alt', color: '#007aff', count: '45+ Products' },
        { title: 'Birthday Gifts', icon: 'bi-gift', color: '#ff2d55', count: '120+ Products' },
        { title: 'Anniversary', icon: 'bi-heart', color: '#ff9500', count: '85+ Products' },
        { title: 'Corporate Gifting', icon: 'bi-briefcase', color: '#5856d6', count: '30+ Packages' },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container">
                <div className="text-center mb-5">
                    <motion.h2
                        className="display-5 fw-bold mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Shop by Category
                    </motion.h2>
                    <motion.p
                        className="lead text-secondary"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Find the perfect gift tailored for every occasion
                    </motion.p>
                </div>

                <div className="row g-4">
                    {categories.map((cat, idx) => (
                        <div className="col-md-6 col-lg-3" key={idx}>
                            <motion.div
                                className="card h-100 border-0 bg-light p-4 text-center d-flex flex-column align-items-center justify-content-center"
                                style={{ borderRadius: '1.5rem', cursor: 'pointer' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10, backgroundColor: '#fcfcfc', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
                            >
                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                                    style={{ width: '80px', height: '80px', backgroundColor: `${cat.color}15`, color: cat.color }}
                                >
                                    <i className={`bi ${cat.icon} fs-1`}></i>
                                </div>
                                <h4 className="fw-bold mb-2">{cat.title}</h4>
                                <p className="text-secondary mb-0">{cat.count}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
