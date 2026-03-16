import React from 'react';
import { motion } from 'framer-motion';
import { ENV } from '../../config/env';
import { useCart } from '../../context/CartContext';

export interface Product {
    id: string;
    name: string;
    category: string;
    price?: string;
    image: string;
    description?: string;
}

interface ProductCardProps {
    product: Product;
    index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
    const { addToCart } = useCart();
    const WHATSAPP_NUMBER = ENV.WHATSAPP_NUMBER;
    const message = encodeURIComponent(`Hello, I want to order this customized gift: ${product.name}`);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    return (
        <motion.div
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: '1rem', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
        >
            <div className="position-relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <motion.img
                    src={product.image}
                    className="card-img-top w-100 h-100 object-fit-cover"
                    alt={product.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
                <div className="position-absolute top-0 end-0 p-3">
                    <span className="badge bg-light text-dark fw-medium shadow-sm rounded-pill px-3 py-2">
                        {product.category}
                    </span>
                </div>
            </div>
            <div className="card-body d-flex flex-column p-4">
                <h5 className="card-title fw-bold mb-2">{product.name}</h5>
                {product.description && <p className="card-text text-secondary small mb-3">{product.description}</p>}
                {product.price && <h6 className="fw-bold mb-4">{product.price}</h6>}

                <div className="mt-auto d-flex flex-column gap-2">
                    <button 
                        onClick={() => addToCart(product)}
                        className="btn btn-dark rounded-pill fw-medium d-flex align-items-center justify-content-center gap-2 py-2"
                    >
                        <i className="bi bi-cart-plus"></i> Add to Cart
                    </button>
                    <div className="d-flex gap-2">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-success rounded-pill fw-medium d-flex align-items-center justify-content-center gap-2 py-2 flex-grow-1">
                            <i className="bi bi-whatsapp"></i> Buy
                        </a>
                        <button className="btn btn-outline-dark rounded-pill fw-medium py-2 flex-grow-1">Details</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
