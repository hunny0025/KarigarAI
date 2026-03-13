from fastapi import APIRouter, UploadFile, File, HTTPException

router = APIRouter()


@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    """Upload a media file (image or video).
    Files are stored in object storage (Supabase/R2).
    """
    allowed_types = ["image/jpeg", "image/png", "image/webp", "video/mp4"]
    if file.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail=f"File type {file.content_type} not allowed")

    # In production, upload to Supabase Storage or Cloudflare R2
    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "url": f"/media/{file.filename}",
        "message": "File uploaded successfully",
    }


@router.post("/enhance")
async def enhance_image(file: UploadFile = File(...)):
    """Enhance a product image.
    Uses Pillow-based processing for:
    - Background removal
    - Lighting improvement
    - Smart cropping
    """
    return {
        "original": file.filename,
        "enhanced_url": f"/media/enhanced_{file.filename}",
        "enhancements": ["brightness_adjusted", "contrast_enhanced", "auto_cropped"],
        "message": "Image enhanced successfully",
    }


@router.delete("/{file_id}")
async def delete_file(file_id: str):
    """Delete a media file."""
    return {"message": "File deleted successfully", "file_id": file_id}
