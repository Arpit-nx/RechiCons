from app.repository.base_repository import BaseRepository
from app.schemas.company import CompanyResponse

class CompanyRepository(BaseRepository):

    SHEET_NAME = "company"
    RESPONSE_MODEL = CompanyResponse

    def create_company(
        self,
        data,
    ):
        return self.insert(data)

    def get_company(self):
        rows = self.find_all()
        return rows[0] if rows else None

    def update_company(
        self,
        company_id : int,
        data,
    ):
        return self.update(
            company_id,
            data,
        )