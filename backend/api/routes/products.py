from fastapi import APIRouter, HTTPException, Query
from typing import Optional

router = APIRouter()


# In-memory mock data for development
MOCK_PRODUCTS = [
    {
        "id": "p1",
        "title": "Banarasi Silk Saree — Royal Blue",
        "description": "Handwoven Banarasi silk saree with intricate gold zari work.",
        "price": 12500,
        "category": "Textiles & Weaving",
        "craft": "Banarasi Weaving",
        "region": "Uttar Pradesh",
        "material": "Silk",
        "artisan_id": "a1",
        "artisan_name": "Rajan Ansari",
        "location": "Varanasi, Uttar Pradesh",
        "rating": 4.9,
        "in_stock": True,
        "stock_quantity": 5,
        "tags": ["handloom", "silk", "wedding"],
    },
    {
        "id": "p2",
        "title": "Blue Pottery Vase — Jaipur Floral",
        "description": "Traditional Jaipur blue pottery vase with hand-painted floral motifs.",
        "price": 2800,
        "category": "Pottery & Ceramics",
        "craft": "Blue Pottery",
        "region": "Rajasthan",
        "material": "Clay",
        "artisan_id": "a2",
        "artisan_name": "Priya Kumawat",
        "location": "Jaipur, Rajasthan",
        "rating": 4.7,
        "in_stock": True,
        "stock_quantity": 12,
        "tags": ["pottery", "blue", "decorative"],
    },
]


@router.get("/")
async def list_products(
    category: Optional[str] = None,
    region: Optional[str] = None,
    material: Optional[str] = None,
    min_price: Optional[float] = None,
    max_price: Optional[float] = None,
    search: Optional[str] = None,
    sort: Optional[str] = Query(None, regex="^(price_asc|price_desc|newest|popular|rating)$"),
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
):
    """List all products with optional filters."""
    results = MOCK_PRODUCTS.copy()

    if category:
        results = [p for p in results if p["category"] == category]
    if region:
        results = [p for p in results if p["region"] == region]
    if material:
        results = [p for p in results if p["material"] == material]
    if min_price is not None:
        results = [p for p in results if p["price"] >= min_price]
    if max_price is not None:
        results = [p for p in results if p["price"] <= max_price]
    if search:
        q = search.lower()
        results = [p for p in results if q in p["title"].lower() or q in p["description"].lower()]

    if sort == "price_asc":
        results.sort(key=lambda p: p["price"])
    elif sort == "price_desc":
        results.sort(key=lambda p: p["price"], reverse=True)
    elif sort == "rating":
        results.sort(key=lambda p: p["rating"], reverse=True)

    total = len(results)
    start = (page - 1) * limit
    results = results[start : start + limit]

    return {"products": results, "total": total, "page": page, "limit": limit}


@router.get("/{product_id}")
async def get_product(product_id: str):
    """Get a single product by ID."""
    product = next((p for p in MOCK_PRODUCTS if p["id"] == product_id), None)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


@router.post("/")
async def create_product(product: dict):
    """Create a new product."""
    product["id"] = f"p{len(MOCK_PRODUCTS) + 1}"
    MOCK_PRODUCTS.append(product)
    return {"message": "Product created successfully", "product": product}


@router.put("/{product_id}")
async def update_product(product_id: str, updates: dict):
    """Update an existing product."""
    product = next((p for p in MOCK_PRODUCTS if p["id"] == product_id), None)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    product.update(updates)
    return {"message": "Product updated successfully", "product": product}


@router.delete("/{product_id}")
async def delete_product(product_id: str):
    """Delete a product."""
    global MOCK_PRODUCTS
    MOCK_PRODUCTS = [p for p in MOCK_PRODUCTS if p["id"] != product_id]
    return {"message": "Product deleted successfully"}
