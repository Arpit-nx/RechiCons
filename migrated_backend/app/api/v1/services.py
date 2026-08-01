from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
)

from sqlalchemy.orm import Session

from app.db.session import get_db

from app.services.service_service import ServiceService

from app.schemas.service import (
    ServiceCreate,
    ServiceUpdate,
    ServiceResponse,
)

router = APIRouter(
    prefix="/services",
    tags=["Services"],
)

@router.post(
    "",
    response_model=ServiceResponse,
    status_code=201,
)
def create_service(
    payload: ServiceCreate,
    db: Session = Depends(get_db),
):

    service = ServiceService(db)

    try:

        return service.create_service(payload)

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e),
        )

@router.get(
    "",
    response_model=list[ServiceResponse],
)
def list_services(
    db: Session = Depends(get_db),
):

    service = ServiceService(db)

    return service.list_services()

@router.get(
    "/{service_id}",
    response_model=ServiceResponse,
)
def get_service(
    service_id: int,
    db: Session = Depends(get_db),
):

    service = ServiceService(db)

    result = service.get_service(service_id)

    if result is None:

        raise HTTPException(
            status_code=404,
            detail="Service not found.",
        )

    return result

@router.put(
    "/{service_id}",
    response_model=ServiceResponse,
)
def update_service(
    service_id: int,
    payload: ServiceUpdate,
    db: Session = Depends(get_db),
):

    service = ServiceService(db)

    try:

        return service.update_service(
            service_id,
            payload,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )

@router.delete(
    "/{service_id}",
)
def delete_service(
    service_id: int,
    db: Session = Depends(get_db),
):

    service = ServiceService(db)

    try:

        service.delete_service(service_id)

        return {
            "success": True,
            "message": "Service deleted successfully.",
        }

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )