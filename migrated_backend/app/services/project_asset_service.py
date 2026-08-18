# from sqlalchemy.orm import Session

# from app.models.project import Project
# from app.models.project_image import ProjectImage

# from app.core.constants import ImageType

# class ProjectAssetService:

#     def __init__(self, db: Session):

#         self.db = db

#     #Get project images or files.
#     def get_project(
#         self,
#         project_id: int,
#     ):

#         project = (
#             self.db.query(Project)
#             .filter(Project.id == project_id)
#             .first()
#         )

#         if project is None:
#             raise ValueError(
#                 "Project not found."
#             )

#         return project

#     #Add a gallery image to a project
#     def add_gallery_image(
#         self,
#         project_id: int,
#         image_path: str,
#     ):

#         self.get_project(project_id)

#         image = ProjectImage(

#             project_id=project_id,

#             image_path=image_path,

#             image_type=ImageType.GALLERY.value,
#         )

#         self.db.add(image)

#         self.db.commit()

#         self.db.refresh(image)

#         return image

#     def add_floorplan_image(
#         self,
#         project_id: int,
#         image_path: str,
#     ):

#         self.get_project(project_id)

#         image = ProjectImage(

#             project_id=project_id,

#             image_path=image_path,

#             image_type=ImageType.FLOORPLAN.value,
#         )

#         self.db.add(image)

#         self.db.commit()

#         self.db.refresh(image)

#         return image

#     def add_siteplan_image(
#         self,
#         project_id: int,
#         image_path: str,
#     ):

#         self.get_project(project_id)

#         image = ProjectImage(

#             project_id=project_id,

#             image_path=image_path,

#             image_type=ImageType.SITEPLAN.value,
#         )

#         self.db.add(image)

#         self.db.commit()

#         self.db.refresh(image)

#         return image

#     def update_thumbnail(
#         self,
#         project_id: int,
#         image_path: str,
#     ):

#         project = self.get_project(project_id)

#         project.thumbnail = image_path

#         self.db.commit()

#         self.db.refresh(project)

#         return project

#     def list_images(
#         self,
#         project_id: int,
#     ):

#         return (

#             self.db.query(ProjectImage)

#             .filter(
#                 ProjectImage.project_id == project_id
#             )

#             .all()

#         )

#     def delete_image(
#         self,
#         image_id: int,
#     ):

#         image = (

#             self.db.query(ProjectImage)

#             .filter(
#                 ProjectImage.id == image_id
#             )

#             .first()

#         )

#         if image is None:

#             raise ValueError(
#                 "Image not found."
#             )

#         self.db.delete(image)

#         self.db.commit()

#         return image

from app.repository.project_repository import ProjectRepository
from app.repository.project_asset_repository import ProjectAssetRepository
from app.core.constants import ImageType


class ProjectAssetService:

    def __init__(self):

        self.project_repo = ProjectRepository()
        self.asset_repo = ProjectAssetRepository()

    # -----------------------------------------
    # Validate Project
    # -----------------------------------------

    def get_project(
        self,
        project_id: int,
    ):

        project = self.project_repo.get_project(
            project_id,
        )

        if project is None:

            raise ValueError(
                "Project not found."
            )

        return project

    # -----------------------------------------
    # Add Gallery Image
    # -----------------------------------------

    def add_gallery_image(
        self,
        project_id: int,
        image_path: str,
    ):

        self.get_project(project_id)

        data = {
            "project_id": project_id,
            "image_path": image_path,
            "image_type": ImageType.GALLERY.value,
            "sort_order": 0,
        }

        return self.asset_repo.create_image(
            data,
        )

    # -----------------------------------------
    # Add Floorplan
    # -----------------------------------------

    def add_floorplan_image(
        self,
        project_id: int,
        image_path: str,
    ):

        self.get_project(project_id)

        data = {
            "project_id": project_id,
            "image_path": image_path,
            "image_type": ImageType.FLOORPLAN.value,
            "sort_order": 0,
        }

        return self.asset_repo.create_image(
            data,
        )

    # -----------------------------------------
    # Add Siteplan
    # -----------------------------------------

    def add_siteplan_image(
        self,
        project_id: int,
        image_path: str,
    ):

        self.get_project(project_id)

        data = {
            "project_id": project_id,
            "image_path": image_path,
            "image_type": ImageType.SITEPLAN.value,
            "sort_order": 0,
        }

        return self.asset_repo.create_image(
            data,
        )

    # -----------------------------------------
    # List Project Images
    # -----------------------------------------

    def list_images(
        self,
        project_id: int,
    ):

        self.get_project(project_id)

        return self.asset_repo.project_images(
            project_id,
        )

    # -----------------------------------------
    # Delete Image
    # -----------------------------------------

    def delete_image(
        self,
        image_id: int,
    ):

        image = self.asset_repo.get_image(
            image_id,
        )

        if image is None:

            raise ValueError(
                "Image not found."
            )

        self.asset_repo.delete_image(
            image_id,
        )

        return {
            "message": "Image deleted successfully."
        }

    def update_thumbnail(
        self,
        project_id: int,
        image_path: str,
    ):

        self.get_project(project_id)

        return self.project_repo.update_project(
            project_id,
            {
                "thumbnail": image_path,
            },
        )