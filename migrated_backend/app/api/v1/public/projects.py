from fastapi import (
    APIRouter,
    HTTPException,
)

from app.schemas.project import (
    PublicProjectCard,
    PublicProjectDetail,
)

from app.services.project_service import ProjectService


router = APIRouter(
    prefix="/public/projects",
    tags=["Public Projects"],
)

service = ProjectService()


# ==========================================================
# Public Project Listing
# ==========================================================

@router.get(
    "",
    response_model=list[PublicProjectCard],
)
def list_public_projects():

    return service.get_public_projects()


# ==========================================================
# Public Project Detail
# ==========================================================

@router.get(
    "/{slug}",
    response_model=PublicProjectDetail,
)
def get_public_project(
    slug: str,
):

    try:

        return service.get_public_project(
            slug,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )