from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.session import get_db

from app.schemas.project import (
    ProjectCreate,
    ProjectUpdate,
    ProjectResponse,
)

from app.services.project_service import ProjectService

router = APIRouter(
    prefix="/projects",
    tags=["Projects"],
)

#Get all Projects
@router.get(
    "",
    response_model=list[ProjectResponse],
)
def list_projects(
    db: Session = Depends(get_db),
):

    service = ProjectService(db)

    return service.list_projects()

#Get project by ID
@router.get(
    "/{project_id}",
    response_model=ProjectResponse,
)
def get_project(
    project_id: int,
    db: Session = Depends(get_db),
):

    service = ProjectService(db)

    project = service.get_project(project_id)

    if project is None:
        raise HTTPException(
            status_code=404,
            detail="Project not found."
        )

    return project

#Insert a project
@router.post(
    "",
    response_model=ProjectResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_project(
    payload: ProjectCreate,
    db: Session = Depends(get_db),
):

    service = ProjectService(db)

    try:
        return service.create_project(payload)

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e),
        )

#Update a project
@router.put(
    "/{project_id}",
    response_model=ProjectResponse,
)
def update_project(
    project_id: int,
    payload: ProjectUpdate,
    db: Session = Depends(get_db),
):

    service = ProjectService(db)

    try:

        return service.update_project(
            project_id,
            payload,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )

#Delete a project
@router.delete(
    "/{project_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_project(
    project_id: int,
    db: Session = Depends(get_db),
):

    service = ProjectService(db)

    try:

        service.delete_project(project_id)

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )