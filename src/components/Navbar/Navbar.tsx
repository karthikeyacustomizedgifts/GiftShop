import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ENV } from '../../config/env';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { totalItems } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <motion.nav
            className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4 text-gradient" to="/" onClick={closeMenu}>
                    {ENV.SITE_SHORT_NAME}
                </Link>
                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    aria-label="Toggle navigation menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-2`}></i>
                </button>
                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show bg-white p-4 rounded shadow mt-3' : ''}`}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium">
                        <li className="nav-item">
                            <Link className={`nav-link px-3 ${location.pathname === '/' ? 'active text-primary fw-bold' : ''}`} to="/" onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link px-3 ${location.pathname === '/products' ? 'active text-primary fw-bold' : ''}`} to="/products" onClick={closeMenu}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link px-3 ${location.pathname === '/gallery' ? 'active text-primary fw-bold' : ''}`} to="/gallery" onClick={closeMenu}>Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link px-3 ${location.pathname === '/about' ? 'active text-primary fw-bold' : ''}`} to="/about" onClick={closeMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link px-3 ${location.pathname === '/contact' ? 'active text-primary fw-bold' : ''}`} to="/contact" onClick={closeMenu}>Contact</Link>
                        </li>
                        <li className="nav-item d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
                            <Link to="/cart" className="btn btn-outline-dark rounded-circle position-relative p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }} onClick={closeMenu} aria-label="Cart">
                                <i className="bi bi-cart3 fs-5"></i>
                                {totalItems > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.65rem' }}>
                                        {totalItems}
                                        <span className="visually-hidden">items in cart</span>
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
