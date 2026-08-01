from sqlalchemy.orm import Session

from app.models.project import Project
from app.schemas.project import (
    ProjectCreate,
    ProjectUpdate,
)
from app.utils.slug import generate_slug
from app.utils.media import media_url

#Imports for public view
from app.schemas.project import PublicProjectDetail
from app.schemas.project_image import ProjectImageResponse
from app.schemas.project_amenity import AmenityResponse
from app.core.constants import ImageType
from app.models import project


class ProjectService:

    #ADMIN ROUTES FOR PROJECT RETRIEVAL, CREATION, UPDATION AND DELETION
    def __init__(self, db: Session):
        self.db = db

    def create_project(
        self,
        payload: ProjectCreate,
    ) -> Project:

        slug = self._generate_unique_slug(payload.title)

        existing = (
            self.db.query(Project)
            .filter(Project.slug == slug)
            .first()
        )

        if existing:
            raise ValueError(
                "Project already exists."
            )

        project = Project(
            **payload.model_dump(),
            slug=slug,
        )

        self.db.add(project)

        self.db.commit()

        self.db.refresh(project)

        return project

    #Slug Helper
    def _generate_unique_slug(
        self,
        title: str,
    ):

        base = generate_slug(title)

        slug = base

        counter = 1

        while (
            self.db.query(Project)
            .filter(Project.slug == slug)
            .first()
        ):

            counter += 1

            slug = f"{base}-{counter}"

        return slug

    def update_project(
        self,
        project_id: int,
        payload: ProjectUpdate,
    ):

        project = (
            self.db.query(Project)
            .filter(Project.id == project_id)
            .first()
        )

        if project is None:
            raise ValueError(
                "Project not found."
            )

        update_data = payload.model_dump(
            exclude_none=True,
            exclude_unset=True,
        )

        if (
            "title" in update_data
            and update_data["title"] != project.title
        ):
            project.slug = self._generate_unique_slug(
                update_data["title"]
            )

        for key, value in update_data.items():
            setattr(project, key, value)

        self.db.commit()

        self.db.refresh(project)

        return project

    def delete_project(
        self,
        project_id: int,
    ):

        project = (
            self.db.query(Project)
            .filter(Project.id == project_id)
            .first()
        )

        if project is None:
            raise ValueError(
                "Project not found."
            )

        self.db.delete(project)

        self.db.commit()

    #Get one project for admin
    def get_project(
        self,
        project_id: int,
    ):

        return (
            self.db.query(Project)
            .filter(Project.id == project_id)
            .first()
        )

    #Get one project by sloug for public visibility
    def get_project_by_slug(
        self,
        slug: str,
    ):

        return (
            self.db.query(Project)
            .filter(Project.slug == slug)
            .first()
        )

    #Lisiting projects for admin
    def list_projects(self):

        return (
            self.db.query(Project)
            .order_by(Project.display_order)
            .all()
        )

    #Homepage projects to showcase
    def list_homepage_projects(self):

        return (
            self.db.query(Project)
            .filter(Project.is_featured == True)
            .order_by(Project.display_order)
            .all()
        )

    #Category filter.
    def list_by_category(
        self,
        category_id: int,
    ):

        return (
            self.db.query(Project)
            .filter(Project.category_id == category_id)
            .order_by(Project.display_order)
            .all()
        )

    #PUBLIC ROUTES FOR PROJECT RETRIEVAL...
    #Public projects for public visibility
    def get_public_projects(self):
        projects = self.list_homepage_projects()
        for project in projects:
            project.thumbnail = media_url(project.thumbnail)
        return projects

    def get_public_project(self,slug: str,):

        project = (
            self.db.query(Project)
            .filter(Project.slug == slug)
            .first()
        )

        if project is None:
            raise ValueError("Project not found.")

        gallery = []
        for img in project.images:
            if img.image_type == ImageType.GALLERY.value:
                image = ProjectImageResponse.model_validate(img)
                image.image_path = media_url(image.image_path)
                gallery.append(image)

        floorplans = []
        for img in project.images:
            if img.image_type == ImageType.FLOORPLAN.value:
                image = ProjectImageResponse.model_validate(img)
                image.image_path = media_url(image.image_path)
                floorplans.append(image)

        siteplans = []
        for img in project.images:
            if img.image_type == ImageType.SITEPLAN.value:
                image = ProjectImageResponse.model_validate(img)
                image.image_path = media_url(image.image_path)
                siteplans.append(image)

        amenities = [
            AmenityResponse.model_validate(item)
            for item in project.amenities
        ]

        return PublicProjectDetail(
            id=project.id,
            title=project.title,
            slug=project.slug,
            short_description=project.short_description,
            description=project.description,
            location=project.location,
            builder=project.builder,
            status=project.status,
            price=project.price,
            rera_number=project.rera_number,
            thumbnail=media_url(project.thumbnail),
            gallery=gallery,
            floorplans=floorplans,
            siteplans=siteplans,
            amenities=amenities,
        )