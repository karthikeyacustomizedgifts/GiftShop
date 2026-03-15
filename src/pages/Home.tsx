import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ENV } from '../config/env';
import { ASSETS } from '../config/data';

// Sections
import Hero from '../components/Sections/Hero';
import Categories from '../components/Sections/Categories';
import FeaturedGifts from '../components/Sections/FeaturedGifts';
import HowItWorks from '../components/Sections/HowItWorks';
import Testimonials from '../components/Sections/Testimonials';
import InstagramFeed from '../components/Sections/InstagramFeed';
import FAQ from '../components/Sections/FAQ';

const Home: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Helmet>
                <title>{ENV.SITE_NAME} | Premium Personalized Gifting</title>
                <meta name="description" content="Discover premium customized gifts for all occasions. LED photo frames, birthday gifts, corporate gifting and more." />
                <link rel="preload" as="image" href={ASSETS.HERO_IMAGE} fetchPriority="high" />
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "LocalBusiness",
                      "name": "${ENV.SITE_NAME}",
                      "image": "https://karthikeyagifts.com/logo.png",
                      "@id": "https://karthikeyagifts.com",
                      "url": "https://karthikeyagifts.com",
                      "telephone": "${ENV.CONTACT_PHONE}",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Hyderabad",
                        "addressRegion": "Telangana",
                        "addressCountry": "IN"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 17.4061803,
                        "longitude": 78.4344403
                      },
                      "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Saturday"
                        ],
                        "opens": "09:00",
                        "closes": "20:00"
                      }
                    }
                  `}
                </script>
            </Helmet>

            <Hero />
            <FeaturedGifts />
            <Categories />
            <HowItWorks />
            <Testimonials />
            <FAQ />
            <InstagramFeed />

            {/* Call to Action Section */}
            <section className="section-padding" style={{ backgroundColor: '#1d1d1f' }}>
                <div className="container text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="display-5 fw-bold mb-4">Ready to Create Something Beautiful?</h2>
                        <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                            Let's craft a perfect memory. Contact our design experts today to discuss your customization requirements or bulk orders.
                        </p>
                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                            <a href={`https://wa.me/${ENV.WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn btn-success rounded-pill px-5 py-3 fw-medium fs-5 shadow-lg d-flex align-items-center justify-content-center gap-2">
                                <i className="bi bi-whatsapp"></i> Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Embedded Google Map */}
            <section className="bg-light">
                <iframe
                    title={`${ENV.SITE_SHORT_NAME} Location`}
                    src={ENV.MAP_EMBED_URL}
                    width="100%"
                    height="450"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </motion.div>
    );
};

export default Home;
