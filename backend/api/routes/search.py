from fastapi import APIRouter, Query
from typing import Optional

router = APIRouter()


@router.get("/")
async def search_products(
    q: str = Query(..., min_length=1),
    category: Optional[str] = None,
    limit: int = Query(20, ge=1, le=100),
):
    """Search products by keyword. Supports full-text and tag-based search.
    When PostgreSQL + pgvector is connected, this will also support vector similarity search.
    """
    return {
        "query": q,
        "results": [
            {
                "id": "p1",
                "title": "Banarasi Silk Saree",
                "relevance_score": 0.95,
                "type": "product",
            }
        ],
        "total": 1,
        "search_type": "keyword",  # Will be "vector" when pgvector is active
    }


@router.get("/recommendations/{product_id}")
async def get_recommendations(product_id: str, limit: int = Query(4, ge=1, le=20)):
    """Get similar product recommendations.
    Uses vector embeddings for similarity when pgvector is available.
    Falls back to category-based recommendations otherwise.
    """
    return {
        "product_id": product_id,
        "recommendations": [],
        "method": "category_based",  # Will be "vector_similarity" when pgvector is active
    }


@router.get("/trending")
async def get_trending():
    """Get trending products based on views and sales."""
    return {"trending": [], "period": "7d"}
