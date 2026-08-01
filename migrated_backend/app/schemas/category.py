from datetime import datetime
from pydantic import BaseModel, ConfigDict


class CategoryBase(BaseModel):

    name: str


class CategoryCreate(CategoryBase):
    pass


class CategoryUpdate(BaseModel):

    name: str | None = None

    display_order: int | None = None

    is_active: bool | None = None


class CategoryResponse(CategoryBase):

    id: int

    slug: str

    display_order: int

    is_active: bool

    created_at: datetime

    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )