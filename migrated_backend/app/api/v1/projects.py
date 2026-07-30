from fastapi import APIRouter

router = APIRouter(prefix="/projects", tags=["projects"])


@router.get("/")
def projects_root():
    return {"message": "projects endpoint"}
