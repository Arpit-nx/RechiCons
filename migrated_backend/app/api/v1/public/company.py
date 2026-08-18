from fastapi import APIRouter, HTTPException, status
# from sqlalchemy.orm import Session

# from app.db.session import get_db

from app.services.company_service import CompanyService

from app.schemas.company import CompanyResponse

router = APIRouter(

    prefix="/public/company",

    tags=["Public Company"],

)

@router.get("",response_model=CompanyResponse,)
def get_company():

    service = CompanyService()

    company = service.get_company()

    if not company:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Company profile not found."
        )

    return company