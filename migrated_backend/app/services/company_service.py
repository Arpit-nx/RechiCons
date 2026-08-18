from app.models.company import Company
from app.schemas.company import (
    CompanyCreate,
    CompanyUpdate,
)


from app.repository.company_repository import (
    CompanyRepository,
)

class CompanyService:

    def __init__(self):

        self.repo = CompanyRepository()

    # ==========================================================
    # Get Company Details
    # ==========================================================

    def get_company(self) -> Company | None:
        
        return self.repo.get_company()

    # ==========================================================
    # Create Company
    # (Runs only once)
    # ==========================================================

    def create_company(
        self,
        payload: CompanyCreate,
    ):

        if self.repo.get_company():

            raise ValueError(
                "Company profile already initialized."
            )

        return self.repo.create_company(
            payload
        )

    # ==========================================================
    # Update Company
    # ==========================================================

    def update_company(
        self,
        company_id: int,
        payload: CompanyUpdate,
    ):

        if self.repo.find_by_id(company_id) is None:
            raise ValueError(
                "Company not found."
            )

        return self.repo.update_company(company_id, payload,)