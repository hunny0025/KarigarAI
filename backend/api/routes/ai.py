from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional

router = APIRouter()


class DescriptionRequest(BaseModel):
    product_name: str
    material: Optional[str] = None
    craft_type: Optional[str] = None
    region: Optional[str] = None


class MarketingRequest(BaseModel):
    product_name: str
    content_type: str = "instagram"  # instagram, short_text


@router.post("/generate-description")
async def generate_description(request: DescriptionRequest):
    """Generate a product description based on product details.
    Uses template-based generation with optional LLM enhancement.
    The artisan can edit the result before publishing.
    """
    material_text = f"premium {request.material}" if request.material else "finest natural materials"
    craft_text = request.craft_type or "traditional Indian"
    region_text = f" from {request.region}" if request.region else ""

    description = (
        f"Discover the exquisite beauty of this handcrafted {request.product_name}, "
        f"meticulously created by a skilled artisan using traditional {craft_text} techniques{region_text}. "
        f"Each piece is thoughtfully made with {material_text}, "
        f"reflecting centuries of craftsmanship passed down through generations.\n\n"
        f"What makes this piece special:\n"
        f"• Authentic handmade craftsmanship\n"
        f"• Premium quality {request.material or 'natural'} material\n"
        f"• Traditional {craft_text} technique\n"
        f"• Each piece is unique with subtle variations\n"
        f"• Supports artisan livelihoods directly\n\n"
        f"Perfect for those who appreciate the beauty of traditional artisanship."
    )

    return {
        "description": description,
        "method": "template_based",
        "editable": True,
        "note": "This is an AI-generated suggestion. Please review and edit before publishing.",
    }


@router.post("/generate-marketing")
async def generate_marketing(request: MarketingRequest):
    """Generate marketing content for social media.
    Creates Instagram captions or short marketing text.
    """
    if request.content_type == "instagram":
        content = (
            f"✨ Every thread tells a story, every stitch carries a legacy.\n\n"
            f"Presenting our {request.product_name} — where tradition meets timeless elegance. "
            f"Made by master artisans who've perfected their craft over generations. 🧵\n\n"
            f"Each piece is unique, just like the artisan who created it.\n\n"
            f"🛍️ Shop now → Link in bio\n\n"
            f"#KarigarAI #Handcrafted #IndianArtisans #TraditionalCrafts"
        )
    else:
        content = (
            f"Handcrafted with love, steeped in tradition. "
            f"Our {request.product_name} is a testament to the skill and dedication "
            f"of India's master artisans. Discover the beauty of authentic craftsmanship."
        )

    return {
        "content": content,
        "content_type": request.content_type,
        "editable": True,
    }
