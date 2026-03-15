import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ENV } from '../config/env';
import ProductCard from '../components/ProductCard/ProductCard';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../config/data';

const Products: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = PRODUCTS.filter((product) => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: '#f5f5f7' }}
        >
            <Helmet>
                <title>All Products | {ENV.SITE_NAME}</title>
                <meta name="description" content="Browse our complete collection of personalized gifts, LED frames, birthday gifts, and corporate items." />
            </Helmet>

            <div style={{ height: '80px' }}></div>

            <div className="container py-5 min-vh-100">
                <div className="text-center mb-5">
                    <motion.h1
                        className="display-4 fw-bold mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Collection
                    </motion.h1>
                    <motion.p
                        className="lead text-secondary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Find the perfect gift for every occasion
                    </motion.p>
                </div>

                {/* Filter & Search Bar */}
                <motion.div
                    className="row mb-5 justify-content-between align-items-center gy-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="col-lg-8 overflow-auto pb-2 pb-lg-0">
                        <div className="d-flex gap-2 flex-nowrap" style={{ minWidth: 'max-content' }}>
                            {PRODUCT_CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`btn rounded-pill px-4 py-2 fw-medium ${activeCategory === cat ? 'btn-dark shadow-sm' : 'btn-outline-secondary bg-white'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="input-group bg-white rounded-pill p-1 shadow-sm border border-light">
                            <span className="input-group-text bg-transparent border-0 pe-2 ps-3">
                                <i className="bi bi-search text-secondary"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control border-0 bg-transparent shadow-none"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Product Grid */}
                <div className="row g-4">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product, idx) => (
                                <motion.div
                                    className="col-12 col-md-6 col-lg-3"
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProductCard product={product} index={idx} />
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                className="col-12 text-center py-5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <div className="bg-white p-5 rounded-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
                                    <i className="bi bi-search display-1 text-light mb-4 text-secondary opacity-50"></i>
                                    <h3 className="fw-bold text-dark">No products found</h3>
                                    <p className="text-secondary">Try adjusting your search query or changing the category filter.</p>
                                    <button
                                        className="btn btn-outline-dark rounded-pill px-4 mt-3"
                                        onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default Products;
