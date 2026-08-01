from sqlalchemy.orm import Session

from app.models.service import Service
from app.schemas.service import (
    ServiceCreate,
    ServiceUpdate,
)

from app.utils.slug import generate_slug

class ServiceService:

    def __init__(self, db: Session):
        self.db = db

    def create_service(
        self,
        payload: ServiceCreate,
    ):

        slug = self._generate_unique_slug(
            payload.title
        )

        service = Service(
            **payload.model_dump(),
            slug=slug,
        )

        self.db.add(service)

        self.db.commit()

        self.db.refresh(service)

        return service

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

        service = (
            self.db.query(Service)
            .filter(Service.id == service_id)
            .first()
        )

        if service is None:

            raise ValueError(
                "Service not found."
            )

        update_data = payload.model_dump(
            exclude_none=True,
            exclude_unset=True,
        )

        if (
            "title" in update_data
            and update_data["title"] != service.title
        ):

            service.slug = self._generate_unique_slug(
                update_data["title"]
            )

        for key, value in update_data.items():

            setattr(
                service,
                key,
                value,
            )

        self.db.commit()

        self.db.refresh(service)

        return service

    def delete_service(
        self,
        service_id: int,
    ):

        service = (
            self.db.query(Service)
            .filter(Service.id == service_id)
            .first()
        )

        if service is None:

            raise ValueError(
                "Service not found."
            )

        self.db.delete(service)

        self.db.commit()

    def get_service(
        self,
        service_id: int,
    ):

        return (
            self.db.query(Service)
            .filter(Service.id == service_id)
            .first()
        )

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

        return (
            self.db.query(Service)
            .order_by(Service.display_order)
            .all()
        )

    def get_public_services(self):

        return (
            self.db.query(Service)
            .filter(Service.is_active == True)
            .order_by(Service.display_order)
            .all()
        )

    def get_public_service(
        self,
        slug: str,
    ):

        service = (
            self.db.query(Service)
            .filter(
                Service.slug == slug,
                Service.is_active == True,
            )
            .first()
        )

        if service is None:

            raise ValueError(
                "Service not found."
            )

        return service