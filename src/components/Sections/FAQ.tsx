import React from 'react';
import { motion } from 'framer-motion';

const FAQ: React.FC = () => {
    const faqs = [
        {
            q: 'How do I place an order?',
            a: 'Simply select the product you like and click on "Order on WhatsApp". Our team will quickly assist you in finalizing the customization details and confirming the order.'
        },
        {
            q: 'How many photos can I add to an LED frame?',
            a: 'It varies by design. Our standard frames accept 1-4 photos, while our larger rotating frames can accommodate up to 8 photos. Check individual product descriptions for details.'
        },
        {
            q: 'How long does delivery take?',
            a: 'For metro cities, standard delivery takes 3-5 business days. For other locations, it might take 5-7 business days. Expedited shipping is available upon request.'
        },
        {
            q: 'Do you accept bulk orders for corporate gifting?',
            a: 'Yes, we specialize in corporate and bulk gifting! We offer special pricing and custom branding options. Please contact us via WhatsApp or Phone to discuss your requirements.'
        }
    ];

    return (
        <section className="section-padding bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center mb-5">
                            <motion.h2
                                className="display-5 fw-bold mb-3"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Frequently Asked Questions
                            </motion.h2>
                            <p className="lead text-secondary">Have questions? We're here to help.</p>
                        </div>

                        <motion.div
                            className="accordion"
                            id="faqAccordion"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            {faqs.map((faq, idx) => (
                                <div className="accordion-item border-0 mb-3 shadow-sm" style={{ borderRadius: '1rem', overflow: 'hidden' }} key={idx}>
                                    <h2 className="accordion-header" id={`heading${idx}`}>
                                        <button
                                            className={`accordion-button fw-bold fs-5 ${idx !== 0 ? 'collapsed' : ''}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${idx}`}
                                            aria-expanded={idx === 0 ? 'true' : 'false'}
                                            aria-controls={`collapse${idx}`}
                                            style={{ backgroundColor: '#fff', color: '#1d1d1f' }}
                                        >
                                            {faq.q}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${idx}`}
                                        className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                                        aria-labelledby={`heading${idx}`}
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body text-secondary bg-white">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
