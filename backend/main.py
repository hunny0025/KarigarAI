from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import products, users, orders, search, media, ai

app = FastAPI(
    title="KarigarAI API",
    description="Backend API for KarigarAI - India's Premier Artisan Marketplace",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://karigarai.vercel.app",
        "https://karigar-ai.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "name": "KarigarAI API",
        "version": "1.0.0",
        "status": "operational",
        "docs": "/api/docs",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# Register routers
app.include_router(products.router, prefix="/api/products", tags=["Products"])
app.include_router(users.router, prefix="/api/users", tags=["Users"])
app.include_router(orders.router, prefix="/api/orders", tags=["Orders"])
app.include_router(search.router, prefix="/api/search", tags=["Search"])
app.include_router(media.router, prefix="/api/media", tags=["Media"])
app.include_router(ai.router, prefix="/api/ai", tags=["AI"])
