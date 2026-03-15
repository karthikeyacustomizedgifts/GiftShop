import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ENV } from '../config/env';
import { GALLERY_IMAGES } from '../config/data';

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: '#fff' }}
        >
            <Helmet>
                <title>Inspiration Gallery | {ENV.SITE_NAME}</title>
                <meta name="description" content="Explore our portfolio of crafted personalized gifts, customer photos, and Instagram inspirations." />
            </Helmet>

            <div style={{ height: '80px' }}></div>
            <div className="container py-5 min-vh-100">
                <div className="text-center mb-5">
                    <motion.h1
                        className="display-4 fw-bold mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Inspiration Gallery
                    </motion.h1>
                    <motion.p
                        className="lead text-secondary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        See the smiles we've delivered and works of art we've crafted.
                    </motion.p>
                </div>

                {/* Masonry-style Grid using Bootstrap */}
                <div className="row g-3">
                    {GALLERY_IMAGES.map((item, idx) => (
                        <div className={`col-12 ${item.span}`} key={item.id}>
                            <motion.div
                                className="position-relative overflow-hidden rounded-4 shadow-sm w-100 h-100"
                                style={{ cursor: 'pointer', minHeight: '300px' }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 0.98 }}
                                onClick={() => setSelectedImage(item.src)}
                            >
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 transition-base" style={{ zIndex: 1 }}></div>
                                <img src={item.src} alt="Gallery item" className="w-100 h-100 object-fit-cover transition-base" style={{ filter: 'brightness(0.95)' }} />

                                <div className="position-absolute top-50 start-50 translate-middle opacity-0 z-index-2 transition-base d-flex align-items-center justify-content-center bg-white rounded-circle shadow-lg" style={{ width: '60px', height: '60px' }}>
                                    <i className="bi bi-arrows-fullscreen fs-4 text-dark"></i>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1050 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="position-absolute btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center"
                            style={{ top: '20px', right: '20px', width: '50px', height: '50px' }}
                            onClick={() => setSelectedImage(null)}
                        >
                            <i className="bi bi-x-lg fs-4"></i>
                        </button>
                        <motion.img
                            src={selectedImage}
                            alt="Expanded gallery view"
                            className="max-w-100 max-h-100 object-fit-contain p-4"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Gallery;

// CSS for Lightbox hover effects in SCSS:
// Add to main.scss later if needed to animate the glass circle
