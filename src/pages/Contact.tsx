import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ENV } from '../config/env';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate WhatsApp order routing or form submission
        const text = encodeURIComponent(`Hello, my name is ${formData.name}. I have an inquiry:\n${formData.message}`);
        window.open(`https://wa.me/${ENV.WHATSAPP_NUMBER}?text=${text}`, '_blank');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: '#fcfcfc' }}
        >
            <Helmet>
                <title>Contact Us | {ENV.SITE_NAME}</title>
                <meta name="description" content="Get in touch with us for bulk orders, corporate gifting inquiries, or general questions." />
            </Helmet>

            <div style={{ height: '80px' }}></div>
            <div className="container py-5 min-vh-100">
                <div className="text-center mb-5">
                    <motion.h1
                        className="display-4 fw-bold mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        className="lead text-secondary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        We'd love to hear from you. Let's create something beautiful together.
                    </motion.p>
                </div>

                <div className="row g-5">
                    <div className="col-lg-5">
                        <motion.div
                            className="bg-dark text-white p-5 rounded-4 h-100 shadow-lg position-relative overflow-hidden"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {/* Decorative Circle */}
                            <div className="position-absolute rounded-circle bg-white opacity-10" style={{ width: '300px', height: '300px', top: '-100px', right: '-100px' }}></div>
                            <div className="position-absolute rounded-circle bg-info opacity-10 blur-xl" style={{ width: '200px', height: '200px', bottom: '-50px', left: '-50px', filter: 'blur(50px)' }}></div>

                            <div className="position-relative z-index-1">
                                <h3 className="fw-bold mb-4">Contact Information</h3>
                                <p className="opacity-75 mb-5">Fill up the form and our team will get back to you within 24 hours. For immediate assistance, feel free to use WhatsApp or call us.</p>

                                <div className="d-flex flex-column gap-4 mb-5">
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="bi bi-telephone text-info fs-4"></i>
                                        <div>
                                            <div className="fs-6 mb-0 fw-bold">Phone</div>
                                            <p className="mb-0 opacity-75">{ENV.CONTACT_PHONE}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="bi bi-envelope text-info fs-4"></i>
                                        <div>
                                            <div className="fs-6 mb-0 fw-bold">Email</div>
                                            <p className="mb-0 opacity-75">{ENV.CONTACT_EMAIL}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start gap-3">
                                        <i className="bi bi-geo-alt text-info fs-4 mt-1"></i>
                                        <div>
                                            <div className="fs-6 mb-0 fw-bold">Location</div>
                                            <p className="mb-0 opacity-75">{ENV.SITE_NAME}<br />Hyderabad, Telangana, India</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex gap-3">
                                    <a href={ENV.INSTAGRAM_URL} aria-label="Instagram" className="btn btn-outline-light rounded-circle shadow-none p-0 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                    <a href={`https://wa.me/${ENV.WHATSAPP_NUMBER}`} aria-label="WhatsApp" className="btn btn-outline-light rounded-circle shadow-none p-0 d-flex align-items-center justify-content-center border-0 bg-success text-white" style={{ width: '45px', height: '45px' }}>
                                        <i className="bi bi-whatsapp"></i>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="col-lg-7">
                        <motion.div
                            className="bg-white p-5 rounded-4 shadow-sm border border-light"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="fw-bold mb-4">Send us a Message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="form-label fw-medium text-secondary small">Your Name</label>
                                        <input type="text" className="form-control form-control-lg bg-light border-0 shadow-none px-4 py-3" placeholder="Ram" required
                                            value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-medium text-secondary small">Email Address</label>
                                        <input type="email" className="form-control form-control-lg bg-light border-0 shadow-none px-4 py-3" placeholder="ram@example.com" required
                                            value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fw-medium text-secondary small">Phone Number / WhatsApp</label>
                                        <input type="tel" className="form-control form-control-lg bg-light border-0 shadow-none px-4 py-3" placeholder={ENV.CONTACT_PHONE} required
                                            value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fw-medium text-secondary small">Your Message / Inquiry</label>
                                        <textarea className="form-control form-control-lg bg-light border-0 shadow-none px-4 py-3" rows={5} placeholder="Tell us about the gift you want to customize..." required
                                            value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <button type="submit" className="btn btn-dark btn-lg w-100 rounded-pill py-3 fw-medium d-flex align-items-center justify-content-center gap-2">
                                            <i className="bi bi-send"></i> Send Message
                                        </button>
                                        <p className="text-secondary small mt-3 text-center">
                                            <i className="bi bi-shield-check text-success"></i> Your information is safe. We use reCAPTCHA for spam protection.
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
