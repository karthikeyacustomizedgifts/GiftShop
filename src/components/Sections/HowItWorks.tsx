import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            step: '01',
            title: 'Choose Your Gift',
            desc: 'Browse through our premium collection of LED frames, plaques, and custom gifts.',
            icon: 'bi-hand-index-thumb'
        },
        {
            step: '02',
            title: 'Share Your Details',
            desc: 'Connect with us on WhatsApp to share your photos, text, and customization preferences.',
            icon: 'bi-whatsapp text-success'
        },
        {
            step: '03',
            title: 'We Craft It',
            desc: 'Our experts beautifully design and assemble your personalized keepsake.',
            icon: 'bi-tools'
        },
        {
            step: '04',
            title: 'Fast Delivery',
            desc: 'Receive your beautifully packaged gift right at your doorstep.',
            icon: 'bi-box-seam'
        }
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
                        How It Works
                    </motion.h2>
                    <motion.p
                        className="lead text-secondary opacity-75"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Four simple steps to the perfect custom gift
                    </motion.p>
                </div>

                <div className="row g-4 position-relative">
                    {/* Connecting line for desktop */}
                    <div className="d-none d-lg-block position-absolute top-50 start-0 w-100 border-top border-2 border-dashed border-secondary opacity-25" style={{ transform: 'translateY(-50%)', zIndex: 0 }}></div>

                    {steps.map((item, idx) => (
                        <div className="col-12 col-md-6 col-lg-3" key={idx}>
                            <motion.div
                                className="text-center position-relative h-100 bg-white p-4 rounded-4 shadow-sm"
                                style={{ zIndex: 1 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle shadow-sm mb-4 position-relative" style={{ width: '80px', height: '80px' }}>
                                    <i className={`bi ${item.icon} fs-2`}></i>
                                    <span className="position-absolute align-items-center justify-content-center d-flex bg-dark text-white rounded-circle fw-bold" style={{ width: '30px', height: '30px', top: '-5px', right: '-5px', fontSize: '12px' }}>
                                        {item.step}
                                    </span>
                                </div>
                                <h5 className="fw-bold mb-3">{item.title}</h5>
                                <p className="text-secondary small mb-0">{item.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
