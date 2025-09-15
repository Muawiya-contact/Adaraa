# ADARAA Fashion Store

A full-stack e-commerce application for women's clothing built with MERN stack.

## Project Structure

```
ADARAA/
├── Frontend/          # React + Vite + Tailwind
├── Backend/           # Node.js + Express + MongoDB
└── README.md
```

## Features

- Modern, responsive UI with dark mode
- User authentication (login/signup)
- Product catalog with filtering
- Shopping cart functionality
- Admin panel for product management
- Stripe payment integration
- Cloudinary image uploads
- Order management system

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router
- Framer Motion
- React Hook Form + Zod
- Stripe Elements

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication
- Cloudinary
- Stripe
- Security middleware (helmet, cors, rate limiting)

## Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Frontend
```bash
cd Frontend
npm install
npm run dev
```

### Backend
```bash
cd Backend
npm install
# Create .env file with your configuration
npm run dev
```

## Environment Variables

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:5000
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
```

### Backend (.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/ADARAA
JWT_ACCESS_SECRET=your_secret
JWT_REFRESH_SECRET=your_refresh_secret
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CORS_ORIGIN=http://localhost:5173
```

## Deployment

### Netlify (Frontend)
- Base directory: `Frontend`
- Build command: `npm run build`
- Publish directory: `dist`

### Render (Backend)
- Root directory: `Backend`
- Build command: `npm install`
- Start command: `node src/server.js`

## Development

1. Clone the repository
2. Install dependencies in both Frontend and Backend
3. Set up environment variables
4. Start both servers
5. Open http://localhost:5173

## License

MIT