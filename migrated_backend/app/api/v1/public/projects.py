from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session

from app.db.session import get_db

from app.services.project_service import ProjectService

from app.schemas.project import (
    PublicProjectCard,
    PublicProjectDetail,
)

router = APIRouter(

    prefix="/public/projects",

    tags=["Public Projects"],
)

@router.get(
    "",
    response_model=list[PublicProjectCard],
)
def homepage_projects(

    db: Session = Depends(get_db),

):

    service = ProjectService(db)

    return service.get_public_projects()

@router.get(
    "/{slug}",
    response_model=PublicProjectDetail,
)
def property_details(

    slug: str,

    db: Session = Depends(get_db),

):

    service = ProjectService(db)

    try:

        return service.get_public_project(slug)

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )