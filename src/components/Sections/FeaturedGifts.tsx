import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../ProductCard/ProductCard';
import { FEATURED_PRODUCTS } from '../../config/data';

const FeaturedGifts: React.FC = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: '#f5f5f7' }}>
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5">
                    <div>
                        <motion.h2
                            className="display-5 fw-bold mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Featured Collections
                        </motion.h2>
                        <motion.p
                            className="lead text-secondary mb-0"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Handpicked premium gifts for your special ones
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mt-4 mt-md-0"
                    >
                        <button className="btn btn-outline-dark rounded-pill px-4 py-2 fw-medium">
                            View All Products <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                    </motion.div>
                </div>

                <div className="row g-4">
                    {FEATURED_PRODUCTS.map((product, idx) => (
                        <div className="col-12 col-md-6 col-lg-3" key={product.id}>
                            <ProductCard product={product} index={idx} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedGifts;
