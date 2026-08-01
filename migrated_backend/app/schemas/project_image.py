from pydantic import BaseModel, ConfigDict


class ProjectImageResponse(BaseModel):

    id: int

    image_path: str

    image_type: str

    sort_order: int

    model_config = ConfigDict(
        from_attributes=True
    )