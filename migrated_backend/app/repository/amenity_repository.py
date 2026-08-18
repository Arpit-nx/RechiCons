from app.repository.base_repository import BaseRepository


class AmenityRepository(BaseRepository):

    SHEET_NAME = "amenities"

    def by_project(
        self,
        project_id: int,
    ):

        return self.find_by(
            "project_id",
            project_id,
        )