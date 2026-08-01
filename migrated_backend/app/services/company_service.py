from sqlalchemy.orm import Session

from app.models.company import Company
from app.schemas.company import (
    CompanyCreate,
    CompanyUpdate,
)


class CompanyService:

    def __init__(self, db: Session):
        self.db = db

    # ==========================================================
    # Get Company Details
    # ==========================================================

    def get_company(self) -> Company | None:
        
        return (
            self.db.query(Company)
            .first()
        )

    # ==========================================================
    # Create Company
    # (Runs only once)
    # ==========================================================

    def create_company(
        self,
        payload: CompanyCreate,
    ) -> Company:

        company = self.get_company()

        if company:
            raise ValueError(
                "Company profile already initialized."
            )

        company = Company(
            **payload.model_dump()
        )

        self.db.add(company)

        self.db.commit()

        self.db.refresh(company)

        return company

    # ==========================================================
    # Update Company
    # ==========================================================

    def update_company(
        self,
        company_id: int,
        payload: CompanyUpdate,
    ):

        company = (
            self.db.query(Company)
            .filter(Company.id == company_id)
            .first()
        )

        if company is None:
            raise ValueError("Company not found.")

        update_data = payload.model_dump(
            exclude_none=True,
            exclude_unset=True
        )

        for key, value in update_data.items():
            setattr(company, key, value)

        self.db.commit()
        self.db.refresh(company)

        return company