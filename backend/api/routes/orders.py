from fastapi import APIRouter, HTTPException
from typing import Optional

router = APIRouter()


MOCK_ORDERS = [
    {"id": "KAI-001", "buyer_id": "u1", "artisan_id": "a1", "product_id": "p1", "amount": 12500, "status": "shipped", "date": "2026-03-12"},
    {"id": "KAI-002", "buyer_id": "u2", "artisan_id": "a1", "product_id": "p7", "amount": 3200, "status": "processing", "date": "2026-03-11"},
]


@router.get("/")
async def list_orders(
    status: Optional[str] = None,
    artisan_id: Optional[str] = None,
    buyer_id: Optional[str] = None,
):
    """List orders with optional filters."""
    results = MOCK_ORDERS.copy()
    if status:
        results = [o for o in results if o["status"] == status]
    if artisan_id:
        results = [o for o in results if o["artisan_id"] == artisan_id]
    if buyer_id:
        results = [o for o in results if o["buyer_id"] == buyer_id]
    return {"orders": results, "total": len(results)}


@router.get("/{order_id}")
async def get_order(order_id: str):
    """Get order details."""
    order = next((o for o in MOCK_ORDERS if o["id"] == order_id), None)
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order


@router.post("/")
async def create_order(order: dict):
    """Create a new order (checkout)."""
    order["id"] = f"KAI-{len(MOCK_ORDERS) + 1:03d}"
    order["status"] = "pending"
    MOCK_ORDERS.append(order)
    return {"message": "Order placed successfully", "order": order}


@router.put("/{order_id}/status")
async def update_order_status(order_id: str, status_update: dict):
    """Update order status."""
    order = next((o for o in MOCK_ORDERS if o["id"] == order_id), None)
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    order["status"] = status_update.get("status", order["status"])
    return {"message": "Order status updated", "order": order}
