import { type Product } from '../components/ProductCard/ProductCard';

// ---------------------------------------------------------------------------
// GLOBAL APPLICATION DATA & IMAGES
// You can replace these image links with your own local paths or URLs
// Example local path: '/assets/images/my-product.jpg' (Place in public folder)
// Example external URL: 'https://mysite.com/image.jpg'
// ---------------------------------------------------------------------------

export const ASSETS = {
    // Hero section image on the Home page
    HERO_IMAGE: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop',

    // You can add more global images here if needed
    ABOUT_US_IMAGE: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop',
};

// ---------------------------------------------------------------------------
// PRODUCTS CATALOG
// ---------------------------------------------------------------------------
export const PRODUCTS: Product[] = [
    { id: '1', name: 'Premium Rotating LED Lamp', category: 'LED Photo Frames', price: '₹1,499', image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&auto=format&fit=crop' },
    { id: '5', name: 'Wooden Photo Frame', category: 'LED Photo Frames', price: '₹799', image: 'https://images.unsplash.com/photo-1583847268964-b28e5f17468e?q=80&w=600&auto=format&fit=crop' },
    { id: '2', name: 'Custom Engraved Wooden Plaque', category: 'Anniversary Gifts', price: '₹899', image: 'https://images.unsplash.com/photo-1594900388701-49b8de65e91b?q=80&w=600&auto=format&fit=crop' },
    { id: '6', name: 'Couple Name Neon Sign', category: 'Anniversary Gifts', price: '₹2,499', image: 'https://images.unsplash.com/photo-1563243938-1644c3ec81b7?q=80&w=600&auto=format&fit=crop' },
    { id: '3', name: '3D Crystal Cube with LED Base', category: 'Birthday Gifts', price: '₹1,299', image: 'https://images.unsplash.com/photo-1565155658603-9d8a5732ac6a?q=80&w=600&auto=format&fit=crop' },
    { id: '7', name: 'Photo Magic Mug', category: 'Birthday Gifts', price: '₹499', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=600&auto=format&fit=crop' },
    { id: '4', name: 'Personalized Wallet & Pen Combo', category: 'Corporate Gifting', price: '₹999', image: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=600&auto=format&fit=crop' },
    { id: '8', name: 'Custom Logo Organizer Diary', category: 'Corporate Gifting', price: '₹599', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop' },
];

export const FEATURED_PRODUCTS_IDS = ['1', '2', '3', '4'];
export const FEATURED_PRODUCTS = PRODUCTS.filter(p => FEATURED_PRODUCTS_IDS.includes(p.id));

export const PRODUCT_CATEGORIES = ['All', 'LED Photo Frames', 'Anniversary Gifts', 'Birthday Gifts', 'Corporate Gifting'];

// ---------------------------------------------------------------------------
// INSPIRATION GALLERY
// ---------------------------------------------------------------------------
export const GALLERY_IMAGES = [
    { id: 1, src: '/gallery/001-Karthikeya-Customized-Gifts-indoor.png', span: 'col-md-8 col-lg-8' },
    { id: 2, src: '/gallery/002-Karthikeya-Customized-Gifts-flexi.jpeg', span: 'col-md-4 col-lg-4' },
    { id: 3, src: '/gallery/003-Karthikeya-Customized-Gifts-photo-frame.jpeg', span: 'col-md-4 col-lg-4' },
    { id: 4, src: '/gallery/004-Karthikeya-Customized-Gifts Indoor1.jpeg', span: 'col-md-8 col-lg-4' },
    { id: 5, src: '/gallery/005-Karthikeya-Customized-Gifts-photo-frame1.jpeg', span: 'col-md-6 col-lg-4' },
    { id: 6, src: '/gallery/006-Karthikeya-Customized-Gifts-indoor2.jpeg', span: 'col-md-6 col-lg-8' },
];

// ---------------------------------------------------------------------------
// INSTAGRAM FEED MOCKS
// ---------------------------------------------------------------------------
export const INSTAGRAM_POSTS = [
    'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583847268964-b28e5f17468e?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1594900388701-49b8de65e91b?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563243938-1644c3ec81b7?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565155658603-9d8a5732ac6a?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=400&auto=format&fit=crop'
];


export const MOCK_REVIEWS = [
    {
        id: 1,
        name: 'Tharun chowdary',
        date: '',
        text: 'Excellent gift shop with many gift items. Prices are reasonable and the quality is good. The staff is helpful and friendly. I will visit again.',
        rating: 5
    },
    {
        id: 2,
        name: 'syam sundar kollipara',
        date: '',
        text: 'Impressed with the creativity and attention to detail! The customized gift exceeded expectations. Pricing was very reasonable, and customer service was responsive. Overall, happy shopper and will order again!',
        rating: 4
    },
    {
        id: 3,
        name: 'suresh jujjavarapu',
        date: '',
        text: 'The gift shop is a treasure trove of unique and personalized items. The staff is very friendly and helpful. The quality of the products is top-notch, and the prices are very reasonable. I will visit again.',
        rating: 5
    }
];