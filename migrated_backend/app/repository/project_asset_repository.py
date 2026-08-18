from app.repository.base_repository import BaseRepository
from app.schemas.project_image import ProjectImageResponse


class ProjectAssetRepository(BaseRepository):

    SHEET_NAME = "project_images"
    RESPONSE_MODEL = ProjectImageResponse

    # Get all images belonging to a project
    def project_images(
        self,
        project_id: int,
    ):

        return self.find_by(
            "project_id",
            project_id,
        )

    # Get gallery images
    def gallery(
        self,
        project_id: int,
    ):

        return [
            image
            for image in self.project_images(project_id)
            if image.image_type == "gallery"
        ]

    # Get floorplan images
    def floorplans(
        self,
        project_id: int,
    ):

        return [
            image
            for image in self.project_images(project_id)
            if image.image_type == "floorplan"
        ]

    # Get siteplan images
    def siteplans(
        self,
        project_id: int,
    ):

        return [
            image
            for image in self.project_images(project_id)
            if image.image_type == "siteplan"
        ]

    # Get one image
    def get_image(
        self,
        image_id: int,
    ):

        return self.find_by_id(
            image_id,
        )

    # Create image
    def create_image(
        self,
        data,
    ):

        return self.insert(
            data,
        )

    # Update image
    def update_image(
        self,
        image_id: int,
        data,
    ):

        return self.update(
            image_id,
            data,
        )

    # Delete image
    def delete_image(
        self,
        image_id: int,
    ):

        return self.delete(
            image_id,
        )