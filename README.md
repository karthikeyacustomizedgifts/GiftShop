# Karthikeya Customized Gifts - Web App

A premium, modern e-commerce landing site built with React, Vite, TypeScript, and Framer Motion. 
Designed for speed, elegant UI (Apple-like aesthetics), and heavily optimized for Local SEO.

## Features Included
- **Premium Glassmorphic UI**: Custom SCSS variables with Bootstrap 5 integration.
- **Micro-interactions**: Framer Motion scroll reveals and route transitions.
- **WhatsApp Order Automation**: Seamless "Order on WhatsApp" buttons that pre-fill custom messages.
- **Local SEO Optimized**: JSON-LD Schema markup, dynamic React-Helmet meta tags, XML Sitemap, and robots.txt.
- **Instagram Feed**: Clean layout integrating community engagement.

## Prerequisites
- Node.js (v18+)
- npm or yarn

## Setup Instructions
1. Clone the repository and navigate to the project directory:
   ```bash
   cd Editor2
   ```
2. Install dependencies (installed locally, NO CDNs used):
   ```bash
   npm install
   ```

## Running Locally
To start the development server:
```bash
npm run dev
```
Navigate to `http://localhost:5173/` to view the site.

## Build Instructions
To build the project for production, run:
```bash
npm run build
```
The optimized bundled files will be generated in the `dist/` directory.

## Deployment Guide

### Vercel / Netlify (Recommended)
1. Push your repository to GitHub.
2. Link the repository to your Vercel or Netlify account.
3. Configure the Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy.

### Nginx (Self-Hosted/Docker)
If you wish to host it yourself using Nginx, here is a basic `nginx.conf` structure to route requests properly:
```nginx
server {
    listen 80;
    server_name karthikeyagifts.com;
    root /var/www/html/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Security & Architecture
- Local libraries are exclusively used for privacy and stable speed.
- All product routes dynamically render from local mock arrays (easily connectable to MongoDB/Node.js).
