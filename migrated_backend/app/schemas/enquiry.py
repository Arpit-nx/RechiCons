from datetime import datetime

from pydantic import (
    BaseModel,
    ConfigDict,
    EmailStr,
)


class EnquiryCreate(BaseModel):

    name: str

    email: EmailStr

    phone: str | None = None

    subject: str | None = None

    message: str

    project_id: int | None = None


class EnquiryResponse(EnquiryCreate):

    id: int

    is_read: bool

    created_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )