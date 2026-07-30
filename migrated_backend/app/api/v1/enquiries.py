from fastapi import APIRouter

router = APIRouter(prefix="/enquiries", tags=["enquiries"])


@router.get("/")
def enquiries_root():
    return {"message": "enquiries endpoint"}
