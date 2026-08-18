from app.repository.base_repository import BaseRepository
from app.schemas.enquiry import EnquiryResponse


class EnquiryRepository(BaseRepository):

    SHEET_NAME = "enquiries"

    RESPONSE_MODEL = EnquiryResponse

    # -----------------------------------------
    # Create
    # -----------------------------------------

    def create_enquiry(
        self,
        data,
    ):

        return self.insert(
            data,
        )

    # -----------------------------------------
    # List
    # -----------------------------------------

    def list_enquiries(self):

        enquiries = self.find_all()

        return sorted(
            enquiries,
            key=lambda x: x.created_at,
            reverse=True,
        )

    # -----------------------------------------
    # Get
    # -----------------------------------------

    def get_enquiry(
        self,
        enquiry_id: int,
    ):

        return self.find_by_id(
            enquiry_id,
        )

    # -----------------------------------------
    # Mark Read
    # -----------------------------------------

    def mark_read(
        self,
        enquiry_id: int,
    ):

        return self.update(
            enquiry_id,
            {
                "is_read": True,
            },
        )

    # -----------------------------------------
    # Delete
    # -----------------------------------------

    def delete_enquiry(
        self,
        enquiry_id: int,
    ):

        return self.delete(
            enquiry_id,
        )

    # -----------------------------------------
    # Unread
    # -----------------------------------------

    def unread(self):

        return self.find_by(
            "is_read",
            False,
        )