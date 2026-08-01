from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field

from app.schemas.project_amenity import AmenityResponse
from app.schemas.project_image import ProjectImageResponse


class ProjectBase(BaseModel):

    category_id: int

    title: str

    short_description: str | None = None

    description: str | None = None

    location: str | None = None

    builder: str | None = None

    status: str | None = None

    price: str | None = None

    rera_number: str | None = None

    is_featured: bool = False

    display_order: int = 0

class ProjectCreate(ProjectBase):
    pass

class ProjectUpdate(BaseModel):

    category_id: int | None = None

    title: str | None = None

    short_description: str | None = None

    description: str | None = None

    location: str | None = None

    builder: str | None = None

    status: str | None = None

    price: str | None = None

    rera_number: str | None = None

    is_featured: bool | None = None

    display_order: int | None = None

#Admin Response Schema
class ProjectResponse(ProjectBase):

    id: int

    slug: str

    thumbnail: str | None

    created_at: datetime

    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )

#Public Response Schema i.e /public/projects <- for showing all the available projects.
class PublicProjectCard(BaseModel):

    id: int

    title: str

    slug: str

    thumbnail: str | None

    location: str | None

    short_description: str | None

    model_config = ConfigDict(
        from_attributes=True
    )

#Public Response Schema i.e /public/projects/{slug} <- for showing a particular project detail.
#Schema in accordance to the frontend i.e PUBLIC URLs
class PublicProjectDetail(BaseModel):

    id: int

    title: str

    slug: str

    short_description: str | None

    description: str | None

    location: str | None

    builder: str | None

    status: str | None

    price: str | None

    rera_number: str | None

    thumbnail: str | None

    gallery: list[ProjectImageResponse] = Field(default_factory=list)

    floorplans: list[ProjectImageResponse] = Field(default_factory=list)

    siteplans: list[ProjectImageResponse] = Field(default_factory=list)

    amenities: list[AmenityResponse] = Field(default_factory=list)

    model_config = ConfigDict(
        from_attributes=True
    )