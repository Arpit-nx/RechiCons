from pydantic import BaseModel, ConfigDict


class AmenityCreate(BaseModel):

    name: str

    icon: str | None = None


class AmenityResponse(AmenityCreate):

    id: int

    model_config = ConfigDict(
        from_attributes=True
    )