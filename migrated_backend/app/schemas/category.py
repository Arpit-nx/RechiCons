from datetime import datetime
from pydantic import BaseModel, ConfigDict


class CategoryBase(BaseModel):

    name: str


class CategoryCreate(CategoryBase):

    slug: str | None = None

    display_order: int | None = None

    is_active: bool | None = None


class CategoryUpdate(BaseModel):

    name: str | None = None

    display_order: int | None = None

    is_active: bool | None = None


class CategoryResponse(CategoryBase):

    id: int

    slug: str | None = None

    display_order: int | None = None

    is_active: bool | None = None

    created_at: datetime | None = None

    updated_at: datetime | None = None

    model_config = ConfigDict(
        from_attributes=True
    )