from fastapi import APIRouter

router = APIRouter(prefix="/media", tags=["media"])


@router.get("/")
def media_root():
    return {"message": "media endpoint"}
