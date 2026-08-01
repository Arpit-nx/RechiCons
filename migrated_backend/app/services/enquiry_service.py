from sqlalchemy.orm import Session

from app.models.enquiry import Enquiry
from app.schemas.enquiry import (
    EnquiryCreate,
)
class EnquiryService:

    def __init__(self, db: Session):
        self.db = db

    def create_enquiry(
        self,
        payload: EnquiryCreate,
    ):

        enquiry = Enquiry(
            **payload.model_dump()
        )

        self.db.add(enquiry)

        self.db.commit()

        self.db.refresh(enquiry)

        return enquiry

    def list_enquiries(self):

        return (
            self.db.query(Enquiry)
            .order_by(
                Enquiry.created_at.desc()
            )
            .all()
        )

    def get_enquiry(
        self,
        enquiry_id: int,
    ):

        return (
            self.db.query(Enquiry)
            .filter(
                Enquiry.id == enquiry_id
            )
            .first()
        )

    def mark_as_read(
        self,
        enquiry_id: int,
    ):

        enquiry = (
            self.db.query(Enquiry)
            .filter(
                Enquiry.id == enquiry_id
            )
            .first()
        )

        if enquiry is None:
            raise ValueError(
                "Enquiry not found."
            )

        enquiry.is_read = True

        self.db.commit()

        self.db.refresh(enquiry)

        return enquiry

    def delete_enquiry(
        self,
        enquiry_id: int,
    ):

        enquiry = (
            self.db.query(Enquiry)
            .filter(
                Enquiry.id == enquiry_id
            )
            .first()
        )

        if enquiry is None:
            raise ValueError(
                "Enquiry not found."
            )

        self.db.delete(enquiry)

        self.db.commit()