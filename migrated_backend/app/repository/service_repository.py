from app.repository.base_repository import BaseRepository
from app.schemas.service import ServiceResponse

class ServiceRepository(BaseRepository):

    SHEET_NAME = "services"
    RESPONSE_MODEL = ServiceResponse

    def active_services(self):

        services = self.find_by(
            "is_active",
            True,
        )

        return sorted(

            services,

            key=lambda x: x.display_order or 0,

        )

    def find_by_slug(
        self,
        slug: str,
    ):

        return self.find_first(
            "slug",
            slug,
        )

    def list_services(self):
        return sorted(
            self.find_all(),
            key=lambda x: x.display_order or 0,
        )

    def get_service(self, service_id: int):
        return self.find_by_id(service_id)

    def create_service(self, data):
        return self.insert(data)

    def update_service(self, service_id: int, data):
        return self.update(service_id, data)

    def delete_service(self, service_id: int):
        return self.delete(service_id)