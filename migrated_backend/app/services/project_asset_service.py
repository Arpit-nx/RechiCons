from sqlalchemy.orm import Session

from app.models.project import Project
from app.models.project_image import ProjectImage

from app.core.constants import ImageType

class ProjectAssetService:

    def __init__(self, db: Session):

        self.db = db

    #Get project images or files.
    def get_project(
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

        return project

    #Add a gallery image to a project
    def add_gallery_image(
        self,
        project_id: int,
        image_path: str,
    ):

        self.get_project(project_id)

        image = ProjectImage(

            project_id=project_id,

            image_path=image_path,

            image_type=ImageType.GALLERY.value,
        )

        self.db.add(image)

        self.db.commit()

        self.db.refresh(image)

        return image

    def add_floorplan_image(
        self,
        project_id: int,
        image_path: str,
    ):

        self.get_project(project_id)

        image = ProjectImage(

            project_id=project_id,

            image_path=image_path,

            image_type=ImageType.FLOORPLAN.value,
        )

        self.db.add(image)

        self.db.commit()

        self.db.refresh(image)

        return image

    def add_siteplan_image(
        self,
        project_id: int,
        image_path: str,
    ):

        self.get_project(project_id)

        image = ProjectImage(

            project_id=project_id,

            image_path=image_path,

            image_type=ImageType.SITEPLAN.value,
        )

        self.db.add(image)

        self.db.commit()

        self.db.refresh(image)

        return image

    def update_thumbnail(
        self,
        project_id: int,
        image_path: str,
    ):

        project = self.get_project(project_id)

        project.thumbnail = image_path

        self.db.commit()

        self.db.refresh(project)

        return project

    def list_images(
        self,
        project_id: int,
    ):

        return (

            self.db.query(ProjectImage)

            .filter(
                ProjectImage.project_id == project_id
            )

            .all()

        )

    def delete_image(
        self,
        image_id: int,
    ):

        image = (

            self.db.query(ProjectImage)

            .filter(
                ProjectImage.id == image_id
            )

            .first()

        )

        if image is None:

            raise ValueError(
                "Image not found."
            )

        self.db.delete(image)

        self.db.commit()

        return image