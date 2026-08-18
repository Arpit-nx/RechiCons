from fastapi import APIRouter, Depends, HTTPException
# from sqlalchemy.orm import Session

# from app.db.session import get_db
from app.services.service_service import ServiceService

from app.schemas.service import (
    PublicServiceCard,
    PublicServiceDetail,
)

router = APIRouter(
    prefix="/public/services",
    tags=["Public Services"],
)

service = ServiceService()

@router.get(
    "",
    response_model=list[PublicServiceCard],
)
def get_services():
    return service.get_public_services()

@router.get(
    "/{slug}",
    response_model=PublicServiceDetail,
)
def get_service(
    slug: str,
):
    try:

        return service.get_public_service(slug)

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )