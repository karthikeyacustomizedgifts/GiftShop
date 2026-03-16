import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ENV } from '../config/env';

const Cart: React.FC = () => {
    const { cartItems, updateQuantity, removeFromCart, totalItems } = useCart();

    const generateWhatsAppMessage = () => {
        let message = `*New Order Request*\n\n`;
        message += `Hello, I would like to order the following items:\n\n`;
        
        cartItems.forEach((item, index) => {
            message += `${index + 1}. *${item.name}*\n`;
            message += `   Category: ${item.category}\n`;
            if (item.price) message += `   Price: ${item.price}\n`;
            message += `   Quantity: ${item.quantity}\n\n`;
        });
        
        message += `Please confirm the order details. Thank you!`;
        return encodeURIComponent(message);
    };

    const whatsappLink = `https://wa.me/${ENV.WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: '#f5f5f7' }}
        >
            <Helmet>
                <title>Shopping Cart | {ENV.SITE_NAME}</title>
            </Helmet>

            <div style={{ height: '80px' }}></div>

            <div className="container py-5 min-vh-100">
                <div className="text-center mb-5">
                    <motion.h1
                        className="display-4 fw-bold mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Your Cart
                    </motion.h1>
                    <motion.p
                        className="lead text-secondary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {totalItems} item(s) selected
                    </motion.p>
                </div>

                {cartItems.length === 0 ? (
                    <motion.div
                        className="text-center py-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="bg-white p-5 rounded-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
                            <i className="bi bi-cart-x display-1 text-secondary opacity-50 mb-4"></i>
                            <h3 className="fw-bold text-dark">Your cart is empty</h3>
                            <p className="text-secondary mb-4">You haven't added any items to your cart yet.</p>
                            <Link to="/products" className="btn btn-dark rounded-pill px-4 py-2 fw-medium">
                                Browse Products
                            </Link>
                        </div>
                    </motion.div>
                ) : (
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="bg-white rounded-4 shadow-sm p-4">
                                <AnimatePresence mode="popLayout">
                                    {cartItems.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            className="row align-items-center mb-4 pb-4 border-bottom"
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="col-md-3 mb-3 mb-md-0">
                                                <div className="rounded-3 overflow-hidden shadow-sm" style={{ aspectRatio: '1/1' }}>
                                                    <img src={item.image} alt={item.name} className="w-100 h-100 object-fit-cover" />
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="d-flex justify-content-between align-items-start mb-2">
                                                    <div>
                                                        <h5 className="fw-bold mb-1">{item.name}</h5>
                                                        <span className="badge bg-light text-dark fw-medium rounded-pill px-2 py-1 mb-2">
                                                            {item.category}
                                                        </span>
                                                        {item.price && <p className="text-dark fw-medium mb-0">{item.price}</p>}
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="btn btn-outline-danger btn-sm rounded-circle d-flex align-items-center justify-content-center"
                                                        style={{ width: '35px', height: '35px' }}
                                                        aria-label="Remove item"
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </div>
                                                <div className="d-flex align-items-center gap-3 mt-3">
                                                    <span className="text-secondary small fw-medium">Quantity:</span>
                                                    <div className="input-group" style={{ width: '120px' }}>
                                                        <button 
                                                            className="btn btn-outline-secondary" 
                                                            type="button"
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                        >
                                                            <i className="bi bi-dash"></i>
                                                        </button>
                                                        <input 
                                                            type="text" 
                                                            className="form-control text-center fw-medium bg-white" 
                                                            value={item.quantity} 
                                                            readOnly 
                                                        />
                                                        <button 
                                                            className="btn btn-outline-secondary" 
                                                            type="button"
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                        >
                                                            <i className="bi bi-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white rounded-4 shadow-sm p-4 sticky-top" style={{ top: '100px' }}>
                                <h4 className="fw-bold mb-4">Order Summary</h4>
                                <div className="d-flex justify-content-between mb-3 text-secondary">
                                    <span>Total Items</span>
                                    <span className="fw-medium text-dark">{totalItems}</span>
                                </div>
                                <hr className="my-4" />
                                <a 
                                    href={whatsappLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-success w-100 rounded-pill py-3 fw-bold fs-5 shadow d-flex align-items-center justify-content-center gap-2"
                                >
                                    <i className="bi bi-whatsapp"></i> Checkout via WhatsApp
                                </a>
                                <p className="text-center text-secondary small mt-3 mb-0">
                                    You will be redirected to WhatsApp to finalize your order details.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Cart;
