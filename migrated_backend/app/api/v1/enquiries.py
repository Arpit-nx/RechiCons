from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
)

from sqlalchemy.orm import Session

from app.db.session import get_db

from app.schemas.enquiry import (
    EnquiryCreate,
    EnquiryResponse,
)

from app.services.enquiry_service import (
    EnquiryService,
)

router = APIRouter(
    prefix="/enquiries",
    tags=["Enquiries"],
)

@router.post(
    "",
    response_model=EnquiryResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_enquiry(
    payload: EnquiryCreate,
    db: Session = Depends(get_db),
):

    service = EnquiryService(db)

    return service.create_enquiry(payload)

@router.get(
    "",
    response_model=list[EnquiryResponse],
)
def list_enquiries(
    db: Session = Depends(get_db),
):

    service = EnquiryService(db)

    return service.list_enquiries()

@router.get(
    "/{enquiry_id}",
    response_model=EnquiryResponse,
)
def get_enquiry(
    enquiry_id: int,
    db: Session = Depends(get_db),
):

    service = EnquiryService(db)

    enquiry = service.get_enquiry(enquiry_id)

    if enquiry is None:

        raise HTTPException(
            status_code=404,
            detail="Enquiry not found.",
        )

    return enquiry

@router.put(
    "/{enquiry_id}/read",
    response_model=EnquiryResponse,
)
def mark_as_read(
    enquiry_id: int,
    db: Session = Depends(get_db),
):

    service = EnquiryService(db)

    try:

        return service.mark_as_read(
            enquiry_id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )

@router.delete(
    "/{enquiry_id}",
)
def delete_enquiry(
    enquiry_id: int,
    db: Session = Depends(get_db),
):

    service = EnquiryService(db)

    try:

        service.delete_enquiry(
            enquiry_id
        )

        return {
            "success": True,
            "message": "Enquiry deleted successfully.",
        }

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )