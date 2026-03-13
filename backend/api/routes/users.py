from fastapi import APIRouter, HTTPException

router = APIRouter()


@router.get("/profile/{user_id}")
async def get_user_profile(user_id: str):
    """Get user profile by ID."""
    return {
        "id": user_id,
        "name": "Sample User",
        "email": "user@example.com",
        "role": "buyer",
        "joined": "2025-01-15",
    }


@router.put("/profile/{user_id}")
async def update_user_profile(user_id: str, updates: dict):
    """Update user profile."""
    return {"message": "Profile updated successfully", "user_id": user_id}


@router.get("/artisan/{artisan_id}")
async def get_artisan_profile(artisan_id: str):
    """Get artisan public profile."""
    return {
        "id": artisan_id,
        "name": "Rajan Ansari",
        "craft": "Banarasi Weaving",
        "location": "Varanasi, Uttar Pradesh",
        "rating": 4.9,
        "product_count": 45,
        "total_sales": 890,
    }
