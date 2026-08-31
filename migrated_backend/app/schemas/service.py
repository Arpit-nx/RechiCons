from datetime import datetime
from typing import Literal

from pydantic import BaseModel, ConfigDict


class ServiceContentBlock(BaseModel):

    type: Literal[
        "paragraph",
        "bullet_list",
        "heading",
    ]

    text: str | None = None

    items: list[str] | None = None


class ServiceBase(BaseModel):

    title: str

    content: list[ServiceContentBlock]

    display_order: int = 0

    is_active: bool = True


class ServiceCreate(ServiceBase):
    pass


class ServiceUpdate(BaseModel):

    title: str | None = None

    content: list[ServiceContentBlock] | None = None

    display_order: int | None = None

    is_active: bool | None = None


class ServiceResponse(ServiceBase):

    id: int

    slug: str

    image_path: str | None

    created_at: datetime

    updated_at: datetime

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

    content: list[ServiceContentBlock]

    image_path: str | None

    model_config = ConfigDict(
        from_attributes=True
    )