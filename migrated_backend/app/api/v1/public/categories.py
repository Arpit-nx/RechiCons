from fastapi import APIRouter, HTTPException
# from sqlalchemy.orm import Session

# from app.db.session import get_db
from app.services.category_service import CategoryService
from app.schemas.category import CategoryResponse

router = APIRouter(
    prefix="/public/categories",
    tags=["Public Categories"],
)

service = CategoryService()

# @router.get(
#     "",
#     response_model=list[CategoryResponse],
# )
# def get_categories(
#     db: Session = Depends(get_db),
# ):

#     service = CategoryService(db)

#     return service.list_categories()

@router.get("",
    response_model=list[CategoryResponse],)
def public_categories():

    try:

        return service.list_active_categories()

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e),
        )