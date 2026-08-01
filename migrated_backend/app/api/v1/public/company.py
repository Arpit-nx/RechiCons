from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db

from app.services.company_service import CompanyService

from app.schemas.company import CompanyResponse

router = APIRouter(

    prefix="/public/company",

    tags=["Public Company"],

)

@router.get(
    "",
    response_model=CompanyResponse,
)
def get_company(
    db: Session = Depends(get_db),
):

    service = CompanyService(db)

    company = service.get_company()

    if company is None:

        raise HTTPException(
            status_code=404,
            detail="Company profile not found.",
        )

    return company