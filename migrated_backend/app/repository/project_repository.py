from app.repository.base_repository import BaseRepository
from app.schemas.project import ProjectResponse

import json


class ProjectRepository(BaseRepository):

    SHEET_NAME = "projects"
    RESPONSE_MODEL = ProjectResponse

    JSON_FIELDS = {
        "description"
    }

    # -----------------------------
    # Admin
    # -----------------------------

    def map_record(self, record: dict | None):
        if record is not None:
            description = record.get("description")

            if isinstance(description, str):
                try:
                    parsed = json.loads(description)

                    if isinstance(parsed, list):
                        record["description"] = parsed
                    else:
                        record["description"] = [
                            {
                                "type": "paragraph",
                                "text": description
                            }
                        ]

                except json.JSONDecodeError:
                    record["description"] = [
                        {
                            "type": "paragraph",
                            "text": description
                        }
                    ]

        return super().map_record(record)

    def list_projects(self):
        return sorted(
            self.find_all(),
            key=lambda x: x.display_order or 0,
        )

    def get_project(self, project_id: int):
        return self.find_by_id(project_id)

    def create_project(self, data):
        return self.insert(data)

    def update_project(self, project_id: int, data):
        return self.update(
            project_id,
            data,
        )

    def delete_project(self, project_id: int):
        return self.delete(project_id)

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

    def by_slug(self, slug: str):
        return self.find_first(
            "slug",
            slug,
        )

    def by_category(self, category_id: int):
        projects = self.find_by(
            "category_id",
            category_id,
        )

        return sorted(
            projects,
            key=lambda x: x.display_order or 0,
        )