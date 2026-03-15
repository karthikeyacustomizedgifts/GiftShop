import React from 'react';
import { Link } from 'react-router-dom';
import { ENV } from '../../config/env';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6">
                        <h4 className="fw-bold mb-3">{ENV.SITE_SHORT_NAME}</h4>
                        <p className="text-secondary mb-4">
                            Crafting memories into beautiful, personalized keepsakes. Your premier destination for custom gifting solutions.
                        </p>
                        <div className="d-flex gap-3">
                            <a href={ENV.INSTAGRAM_URL} className="text-white fs-4" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                            <a href={ENV.FACEBOOK_URL} className="text-white fs-4" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                            <a href={`https://wa.me/${ENV.WHATSAPP_NUMBER}`} className="text-white fs-4" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 text-secondary">
                            <li><Link to="/" className="text-secondary text-decoration-none">Home</Link></li>
                            <li><Link to="/products" className="text-secondary text-decoration-none">Products</Link></li>
                            <li><Link to="/gallery" className="text-secondary text-decoration-none">Gallery</Link></li>
                            <li><Link to="/about" className="text-secondary text-decoration-none">About Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3">Categories</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 text-secondary">
                            <li><Link to="/products?category=frames" className="text-secondary text-decoration-none">LED Photo Frames</Link></li>
                            <li><Link to="/products?category=birthday" className="text-secondary text-decoration-none">Birthday Gifts</Link></li>
                            <li><Link to="/products?category=anniversary" className="text-secondary text-decoration-none">Anniversary Gifts</Link></li>
                            <li><Link to="/products?category=corporate" className="text-secondary text-decoration-none">Corporate Gifts</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3">Contact Us</h5>
                        <ul className="list-unstyled d-flex flex-column gap-3 text-secondary">
                            <li className="d-flex align-items-start gap-2">
                                <i className="bi bi-geo-alt mt-1"></i>
                                <a href={ENV.MAP_LINK} target="_blank" rel="noreferrer" className="text-secondary text-decoration-none">View Location on Map</a>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-telephone"></i>
                                <span>{ENV.CONTACT_PHONE}</span>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-envelope"></i>
                                <span>{ENV.CONTACT_EMAIL}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4 border-secondary border-opacity-50" />

                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0 text-secondary small">&copy; {new Date().getFullYear()} {ENV.SITE_NAME}. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="mb-0 text-secondary small">Designed for Premium Experience</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
