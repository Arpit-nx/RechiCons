from app.repository.base_repository import BaseRepository
from app.schemas.project import ProjectResponse


class ProjectRepository(BaseRepository):

    SHEET_NAME = "projects"
    RESPONSE_MODEL = ProjectResponse

    # -----------------------------
    # Admin
    # -----------------------------

    def list_projects(self):

        return sorted(
            self.find_all(),
            key=lambda x: x.display_order or 0,
        )

    def get_project(
        self,
        project_id: int,
    ):

        return self.find_by_id(
            project_id,
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