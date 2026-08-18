# from sqlalchemy.orm import Session
from app.repository.service_repository import ServiceRepository
from app.models.service import Service
from app.schemas.service import (
    ServiceCreate,
    ServiceUpdate,
)

from app.utils.slug import generate_slug

class ServiceService:

    def __init__(self):
        self.repo = ServiceRepository()

    def create_service(
        self,
        payload: ServiceCreate,
    ):

        data = payload.model_dump()

        data["slug"] = generate_slug(data["title"])

        if data.get("display_order") is None:
            data["display_order"] = 0

        if data.get("is_active") is None:
            data["is_active"] = True

        return self.repo.create_service(data)

    def _generate_unique_slug(
        self,
        title: str,
    ):

        base = generate_slug(title)

        slug = base

        counter = 1

        while (
            self.db.query(Service)
            .filter(Service.slug == slug)
            .first()
        ):

            counter += 1

            slug = f"{base}-{counter}"

        return slug

    def update_service(
        self,
        service_id: int,
        payload: ServiceUpdate,
    ):

        service = self.repo.get_service(
                    service_id,
                )
        
        if service is None:
            raise ValueError(
                "Service not found."
            )

        data = payload.model_dump(
            exclude_none=True,
            exclude_unset=True,
        )

        if "title" in data:

            data["slug"] = generate_slug(
                data["title"]
            )

        # if self.repo.exists_by_name(
        #     data["title"]
        # ):
        #     raise ValueError(
        #         "Service already exists."
        #     )

        return self.repo.update_service(
            service_id,
            data,
        )

    def delete_service(
        self,
        service_id: int,
    ):

        if self.repo.get_category(service_id) is None:
            raise ValueError(
                "Service not found."
            )

        self.repo.delete_category(
            service_id,
        )

        return {
            "message": "Service deleted successfully."
        }

    def get_service(
        self,
        service_id: int,
    ):

        service = self.repo.get_service(service_id)

        if service is None:
            raise ValueError("Service not found.")

        return service

    def get_service_by_slug(
        self,
        slug: str,
    ):

        return (
            self.db.query(Service)
            .filter(Service.slug == slug)
            .first()
        )

    def list_services(self):

        return self.repo.list_services()

    def get_public_services(self):

        return self.repo.active_services()

    def get_public_service(
        self,
        slug: str,
    ):

        service = self.repo.find_by_slug(slug)

        if service is None:

            raise ValueError(
                "Service not found."
            )

        return service