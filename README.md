# KarigarAI

India's premier AI-assisted artisan marketplace, connecting traditional craftspeople with global buyers.

## 🎨 About

KarigarAI bridges the gap between India's 7 million artisan families and the global market using thoughtful technology. The platform is **AI-assisted, not AI-dependent** — AI tools help artisans present their work professionally while the marketplace connects them directly with buyers.

## 🏗️ Architecture

```
Frontend (Next.js 15) → API Gateway → Backend (FastAPI)
                                         ↓
                                    PostgreSQL + pgvector
                                         ↓
                                       Redis Cache
```

## 📁 Project Structure

```
├── frontend/          # Next.js 15 app (TypeScript, TailwindCSS, Framer Motion)
├── backend/           # Python FastAPI services
├── database/          # PostgreSQL schemas (pgvector enabled)
├── scripts/           # Utility scripts
├── deployment/        # CI/CD configs
└── .github/           # GitHub Actions workflows
```

## 🚀 Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
# Open http://localhost:3000
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
# API docs at http://localhost:8000/api/docs
```

## ✨ Features

### For Buyers
- Browse 15,000+ handcrafted products
- Advanced search & filtering
- Wishlist & cart
- Multi-step checkout
- Order tracking

### For Artisans
- Product management dashboard
- AI-powered description generator
- Image enhancement tools
- Sales analytics
- Order management
- Marketing content generator

### AI Features (Limited & Focused)
- **Product Description Assistant** — Template + optional LLM
- **Image Enhancement** — Pillow-based processing
- **Smart Search** — Vector similarity with pgvector
- **Marketing Generator** — Social captions & ad text

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15, React, TailwindCSS, Framer Motion |
| Backend | Python FastAPI, async architecture |
| Database | PostgreSQL, pgvector |
| Cache | Redis |
| Auth | Clerk |
| Storage | Supabase / Cloudflare R2 |
| CI/CD | GitHub Actions |
| Hosting | Vercel (frontend) |

## 📄 License

MIT
