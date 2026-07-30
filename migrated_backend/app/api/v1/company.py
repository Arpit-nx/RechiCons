from fastapi import APIRouter

router = APIRouter(prefix="/company", tags=["company"])


@router.get("/")
def company_root():
    return {"message": "company endpoint"}
