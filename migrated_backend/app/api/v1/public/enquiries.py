# from fastapi import APIRouter, Depends, status
# from sqlalchemy.orm import Session

# from app.db.session import get_db

# from app.schemas.enquiry import (
#     EnquiryCreate,
#     EnquiryResponse,
# )

# from app.services.enquiry_service import (
#     EnquiryService,
# )

# router = APIRouter(
#     prefix="/public/enquiries",
#     tags=["Public Enquiries"],
# )

# @router.post(
#     "",
#     response_model=EnquiryResponse,
#     status_code=status.HTTP_201_CREATED,
# )
# def submit_enquiry(
#     payload: EnquiryCreate,
#     db: Session = Depends(get_db),
# ):

#     service = EnquiryService(db)

#     return service.create_enquiry(payload)

from fastapi import (
    APIRouter,
    status,
)

from app.schemas.enquiry import (
    EnquiryCreate,
    EnquiryResponse,
)

from app.services.enquiry_service import (
    EnquiryService,
)


router = APIRouter(
    prefix="/public/enquiries",
    tags=["Public Enquiries"],
)

service = EnquiryService()


@router.post(
    "",
    response_model=EnquiryResponse,
    status_code=status.HTTP_201_CREATED,
)
def submit_enquiry(
    payload: EnquiryCreate,
):

    return service.create_enquiry(
        payload,
    )