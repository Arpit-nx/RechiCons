from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ServiceBase(BaseModel):

    title: str

    content: str

    display_order: int = 0

    is_active: bool = True


class ServiceCreate(ServiceBase):
    pass


class ServiceUpdate(BaseModel):

    title: str | None = None

    content: str | None = None

    display_order: int | None = None

    is_active: bool | None = None


class ServiceResponse(ServiceBase):

    id: int

    slug: str | None = None

    image_path: str | None = None

    created_at: datetime | None = None

    updated_at: datetime | None = None

    model_config = ConfigDict(
        from_attributes=True
    )


class PublicServiceCard(BaseModel):

    id: int

    title: str

    slug: str

    image_path: str | None

    model_config = ConfigDict(
        from_attributes=True
    )


class PublicServiceDetail(BaseModel):

    id: int

    title: str

    slug: str

    content: str

    image_path: str | None

    model_config = ConfigDict(
        from_attributes=True
    )