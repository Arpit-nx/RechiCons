# from sqlalchemy.orm import Session

# from app.models.enquiry import Enquiry
# from app.schemas.enquiry import (
#     EnquiryCreate,
# )
# class EnquiryService:

#     def __init__(self, db: Session):
#         self.db = db

#     def create_enquiry(
#         self,
#         payload: EnquiryCreate,
#     ):

#         enquiry = Enquiry(
#             **payload.model_dump()
#         )

#         self.db.add(enquiry)

#         self.db.commit()

#         self.db.refresh(enquiry)

#         return enquiry

#     def list_enquiries(self):

#         return (
#             self.db.query(Enquiry)
#             .order_by(
#                 Enquiry.created_at.desc()
#             )
#             .all()
#         )

#     def get_enquiry(
#         self,
#         enquiry_id: int,
#     ):

#         return (
#             self.db.query(Enquiry)
#             .filter(
#                 Enquiry.id == enquiry_id
#             )
#             .first()
#         )

#     def mark_as_read(
#         self,
#         enquiry_id: int,
#     ):

#         enquiry = (
#             self.db.query(Enquiry)
#             .filter(
#                 Enquiry.id == enquiry_id
#             )
#             .first()
#         )

#         if enquiry is None:
#             raise ValueError(
#                 "Enquiry not found."
#             )

#         enquiry.is_read = True

#         self.db.commit()

#         self.db.refresh(enquiry)

#         return enquiry

#     def delete_enquiry(
#         self,
#         enquiry_id: int,
#     ):

#         enquiry = (
#             self.db.query(Enquiry)
#             .filter(
#                 Enquiry.id == enquiry_id
#             )
#             .first()
#         )

#         if enquiry is None:
#             raise ValueError(
#                 "Enquiry not found."
#             )

#         self.db.delete(enquiry)

#         self.db.commit()

from app.repository.enquiry_repository import EnquiryRepository
from app.schemas.enquiry import EnquiryCreate


class EnquiryService:

    def __init__(self):

        self.repo = EnquiryRepository()

    # =========================================
    # Create Enquiry
    # =========================================

    def create_enquiry(
        self,
        payload: EnquiryCreate,
    ):

        data = payload.model_dump()

        # New enquiries are unread by default
        data["is_read"] = False

        return self.repo.create_enquiry(
            data,
        )

    # =========================================
    # List Enquiries
    # =========================================

    def list_enquiries(self):

        return self.repo.list_enquiries()

    # =========================================
    # Get Enquiry
    # =========================================

    def get_enquiry(
        self,
        enquiry_id: int,
    ):

        return self.repo.get_enquiry(
            enquiry_id,
        )

    # =========================================
    # Mark As Read
    # =========================================

    def mark_as_read(
        self,
        enquiry_id: int,
    ):

        enquiry = self.repo.get_enquiry(
            enquiry_id,
        )

        if enquiry is None:

            raise ValueError(
                "Enquiry not found."
            )

        return self.repo.mark_read(
            enquiry_id,
        )

    # =========================================
    # Delete
    # =========================================

    def delete_enquiry(
        self,
        enquiry_id: int,
    ):

        enquiry = self.repo.get_enquiry(
            enquiry_id,
        )

        if enquiry is None:

            raise ValueError(
                "Enquiry not found."
            )

        self.repo.delete_enquiry(
            enquiry_id,
        )

        return {
            "message": "Enquiry deleted successfully."
        }

    # =========================================
    # Unread Enquiries
    # =========================================

    def unread_enquiries(self):

        return self.repo.unread()