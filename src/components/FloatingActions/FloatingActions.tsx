import React from 'react';
import { motion } from 'framer-motion';
import { ENV } from '../../config/env';

const FloatingActions: React.FC = () => {
    const WHATSAPP_NUMBER = ENV.WHATSAPP_NUMBER; // Placeholder, user will configure

    return (
        <div className="position-fixed bottom-0 end-0 p-4" style={{ zIndex: 1040 }}>
            <div className="d-flex flex-column gap-3">
                <motion.a
                    href={ENV.INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className="btn btn-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center text-white"
                    style={{ width: '56px', height: '56px', background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', border: 'none' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <i className="bi bi-instagram fs-4"></i>
                </motion.a>

                <motion.a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                    className="btn btn-success rounded-circle shadow-lg d-flex align-items-center justify-content-center"
                    style={{ width: '64px', height: '64px' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <i className="bi bi-whatsapp fs-3"></i>
                </motion.a>
            </div>
        </div>
    );
};

export default FloatingActions;
