from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field

from app.schemas.project_image import ProjectImageResponse
from app.schemas.project_amenity import AmenityResponse


class ContentBlock(BaseModel):
    type: str
    text: str | None = None
    items: list[str] | None = None


class ProjectHeader(BaseModel):
    title: str


class ProjectOverview(BaseModel):
    developer: str | None = None
    location: str | None = None


class ProjectDetails(BaseModel):
    title: str = "Project Details"

    content: list[ContentBlock] = Field(
        default_factory=list
    )


class ProjectMediaGallery(BaseModel):
    projectView: list[ProjectImageResponse] = Field(
        default_factory=list
    )

    floorPlan: list[ProjectImageResponse] = Field(
        default_factory=list
    )

    underConstruction: list[ProjectImageResponse] = Field(
        default_factory=list
    )

class ProjectDetailsUpdate(BaseModel):

    title: str = "Project Details"

    content: list[ContentBlock] = Field(
        default_factory=list
    )

class ProjectDetailResponse(BaseModel):
    id: int
    slug: str
    header: ProjectHeader
    overview: ProjectOverview
    details: ProjectDetails
    mediaGallery: ProjectMediaGallery
    amenities: list[AmenityResponse] = Field(default_factory=list)
    
class ProjectDetailsResponse(ProjectDetails):
    pass

class ProjectBase(BaseModel):

    category_id: int

    title: str

    short_description: str | None = None

    description: list[ContentBlock] = Field(
        default_factory=list
    )
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

    description: list[ContentBlock] | None = None

    location: str | None = None

    builder: str | None = None

    status: str | None = None

    price: str | None = None

    rera_number: str | None = None

    is_featured: bool | None = None

    display_order: int | None = None


class ProjectResponse(ProjectBase):

    id: int

    slug: str

    thumbnail: str | None = None

    created_at: datetime

    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )


class PublicProjectCard(BaseModel):

    id: int
    title: str
    slug: str
    thumbnail: str | None = None
    location: str | None = None
    short_description: str | None = None

    model_config = ConfigDict(
        from_attributes=True
    )


class PublicProjectDetail(BaseModel):

    id: int

    slug: str

    header: ProjectHeader

    overview: ProjectOverview

    details: ProjectDetails

    mediaGallery: ProjectMediaGallery

    amenities: list[AmenityResponse] = Field(
        default_factory=list
    )