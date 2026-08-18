from fastapi import APIRouter, HTTPException, status
# from sqlalchemy.orm import Session
# from app.db.session import get_db
from app.schemas.company import (
    CompanyCreate,
    CompanyUpdate,
    CompanyResponse,
)
from app.services.company_service import CompanyService

router = APIRouter(
    prefix="/company",
    tags=["Company"],
)

service = CompanyService()

# ==========================================================
# Get Company
# ==========================================================

@router.get("",response_model=CompanyResponse,)
def get_company():

    company = service.get_company()

    if not company:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Company profile not found."
        )

    return company


# ==========================================================
# Create Company
# ==========================================================

@router.post("",response_model=CompanyResponse,status_code=status.HTTP_201_CREATED,)
def create_company(
    payload: CompanyCreate,
    # db: Session = Depends(get_db),
):

    try:
        return service.create_company(payload)

    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )


# ==========================================================
# Update Company
# ==========================================================

@router.put("/{company_id}",response_model=CompanyResponse,)
def update_company(
    company_id: int,
    payload: CompanyUpdate,
    # db: Session = Depends(get_db),
):

    try:
        return service.update_company(
            company_id,
            payload,
        )

    except ValueError as e:
        raise HTTPException(
            status_code=404,
            detail=str(e),
        )