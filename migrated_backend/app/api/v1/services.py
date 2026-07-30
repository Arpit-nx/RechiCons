from fastapi import APIRouter

router = APIRouter(prefix="/services", tags=["services"])


@router.get("/")
def services_root():
    return {"message": "services endpoint"}
