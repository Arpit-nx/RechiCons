from app.repository.base_repository import BaseRepository
from app.schemas.project import (
    ProjectCreate,
    ProjectUpdate,
    ProjectResponse,
    ProjectDetailResponse,
    ProjectHeader,
    ProjectOverview,
    ProjectDetails,
    ProjectMediaGallery,
)


class ProjectRepository(BaseRepository):

    SHEET_NAME = "projects"

    RESPONSE_MODEL = ProjectResponse

    JSON_FIELDS = {
        "description"
    }

    # -----------------------------
    # Admin
    # -----------------------------

    def list_projects(self):

        return sorted(
            self.find_all(),
            key=lambda x: x.display_order or 0,
        )

    def get_project(self, project_id: int):
        project = self.repo.get_project(project_id)

        if project is None:
            raise ValueError("Project not found.")

        return ProjectDetailResponse(
            id=project.id,
            slug=project.slug,

            header={
                "title": project.title
            },

            overview={
                "developer": project.builder,
                "location": project.location
            },

            details={
                "title": "Project Details",
                "paragraphs": project.description or []
            },

            mediaGallery={
                "projectView": [],
                "floorPlan": [],
                "underConstruction": []
            },

            amenities=[]
        )
    
    def create_project(
        self,
        data,
    ):

        return self.insert(
            data,
        )

    def update_project(
        self,
        project_id: int,
        data,
    ):

        return self.update(
            project_id,
            data,
        )

    def delete_project(
        self,
        project_id: int,
    ):

        return self.delete(
            project_id,
        )

    # -----------------------------
    # Public
    # -----------------------------

    def featured_projects(self):

        featured = self.find_by(
            "is_featured",
            True,
        )

        return sorted(
            featured,
            key=lambda x: x.display_order or 0,
        )

    def by_slug(
        self,
        slug: str,
    ):

        return self.find_first(
            "slug",
            slug,
        )

    def by_category(
        self,
        category_id: int,
    ):

        projects = self.find_by(
            "category_id",
            category_id,
        )

        return sorted(
            projects,
            key=lambda x: x.display_order or 0,
        )