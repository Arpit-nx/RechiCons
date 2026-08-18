# from fastapi import (
#     APIRouter,
#     Depends,
#     File,
#     HTTPException,
#     UploadFile,
#     status,
# )
# from sqlalchemy.orm import Session

# from app.db.session import get_db

# from app.services.upload_service import UploadService
# from app.services.project_asset_service import ProjectAssetService

# router = APIRouter(
#     prefix="/projects",
#     tags=["Project Assets"],
# )

# #Upload Project Thumbnail
# @router.post(
#     "/{project_id}/thumbnail",
#     status_code=status.HTTP_200_OK,
# )
# def upload_thumbnail(
#     project_id: int,
#     file: UploadFile = File(...),
#     db: Session = Depends(get_db),
# ):

#     upload_service = UploadService()
#     asset_service = ProjectAssetService(db)

#     try:

#         image_path = upload_service.save_file(
#             file=file,
#             folder="projects/thumbnails",
#         )

#         project = asset_service.update_thumbnail(
#             project_id,
#             image_path,
#         )

#         return {
#             "success": True,
#             "message": "Thumbnail uploaded successfully.",
#             "thumbnail": project.thumbnail,
#         }

#     except ValueError as e:

#         raise HTTPException(
#             status_code=400,
#             detail=str(e),
#         )

# #Upload gallery image
# @router.post(
#     "/{project_id}/gallery",
#     status_code=status.HTTP_201_CREATED,
# )
# def upload_gallery(
#     project_id: int,
#     file: UploadFile = File(...),
#     db: Session = Depends(get_db),
# ):

#     upload_service = UploadService()
#     asset_service = ProjectAssetService(db)

#     try:

#         image_path = upload_service.save_file(
#             file=file,
#             folder="projects/gallery",
#         )

#         image = asset_service.add_gallery_image(
#             project_id,
#             image_path,
#         )

#         return {
#             "success": True,
#             "message": "Gallery image uploaded.",
#             "data": image,
#         }

#     except ValueError as e:

#         raise HTTPException(
#             status_code=400,
#             detail=str(e),
#         )

# #Upload floorplan image
# @router.post(
#     "/{project_id}/floorplans",
#     status_code=status.HTTP_201_CREATED,
# )
# def upload_floorplan(
#     project_id: int,
#     file: UploadFile = File(...),
#     db: Session = Depends(get_db),
# ):

#     upload_service = UploadService()
#     asset_service = ProjectAssetService(db)

#     try:

#         image_path = upload_service.save_file(
#             file=file,
#             folder="projects/floorplans",
#         )

#         image = asset_service.add_floorplan_image(
#             project_id,
#             image_path,
#         )

#         return {
#             "success": True,
#             "message": "Floor plan uploaded.",
#             "data": image,
#         }

#     except ValueError as e:

#         raise HTTPException(
#             status_code=400,
#             detail=str(e),
#         )

# #Upload siteplan image
# @router.post(
#     "/{project_id}/siteplans",
#     status_code=status.HTTP_201_CREATED,
# )
# def upload_siteplan(
#     project_id: int,
#     file: UploadFile = File(...),
#     db: Session = Depends(get_db),
# ):

#     upload_service = UploadService()
#     asset_service = ProjectAssetService(db)

#     try:

#         image_path = upload_service.save_file(
#             file=file,
#             folder="projects/siteplans",
#         )

#         image = asset_service.add_siteplan_image(
#             project_id,
#             image_path,
#         )

#         return {
#             "success": True,
#             "message": "Site plan uploaded.",
#             "data": image,
#         }

#     except ValueError as e:

#         raise HTTPException(
#             status_code=400,
#             detail=str(e),
#         )

# #Image Listing.
# @router.get(
#     "/{project_id}/images",
# )
# def list_images(
#     project_id: int,
#     db: Session = Depends(get_db),
# ):

#     asset_service = ProjectAssetService(db)

#     return asset_service.list_images(project_id)

# #Delete Image
# @router.delete(
#     "/images/{image_id}",
# )
# def delete_image(
#     image_id: int,
#     db: Session = Depends(get_db),
# ):

#     upload_service = UploadService()
#     asset_service = ProjectAssetService(db)

#     try:

#         image = asset_service.delete_image(image_id)

#         upload_service.delete_file(
#             image.image_path
#         )

#         return {
#             "success": True,
#             "message": "Image deleted successfully.",
#         }

#     except ValueError as e:

#         raise HTTPException(
#             status_code=404,
#             detail=str(e),
#         )

from fastapi import (
    APIRouter,
    File,
    HTTPException,
    UploadFile,
    status,
)

from app.services.upload_service import UploadService
from app.services.project_asset_service import ProjectAssetService


router = APIRouter(
    prefix="/projects",
    tags=["Project Assets"],
)

service = ProjectAssetService()
upload_service = UploadService()


# ==========================================================
# Upload Project Thumbnail
# ==========================================================

@router.post(
    "/{project_id}/thumbnail",
    status_code=status.HTTP_200_OK,
)
def upload_thumbnail(
    project_id: int,
    file: UploadFile = File(...),
):

    try:

        image_path = upload_service.save_file(
            file=file,
            folder="projects/thumbnails",
        )

        project = service.update_thumbnail(
            project_id,
            image_path,
        )

        return {
            "success": True,
            "message": "Thumbnail uploaded successfully.",
            "thumbnail": project.thumbnail,
        }

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )


# ==========================================================
# Upload Gallery Image
# ==========================================================

@router.post(
    "/{project_id}/gallery",
    status_code=status.HTTP_201_CREATED,
)
def upload_gallery(
    project_id: int,
    file: UploadFile = File(...),
):

    try:

        image_path = upload_service.save_file(
            file=file,
            folder="projects/gallery",
        )

        image = service.add_gallery_image(
            project_id,
            image_path,
        )

        return {
            "success": True,
            "message": "Gallery image uploaded.",
            "data": image,
        }

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )


# ==========================================================
# Upload Floorplan
# ==========================================================

@router.post(
    "/{project_id}/floorplans",
    status_code=status.HTTP_201_CREATED,
)
def upload_floorplan(
    project_id: int,
    file: UploadFile = File(...),
):

    try:

        image_path = upload_service.save_file(
            file=file,
            folder="projects/floorplans",
        )

        image = service.add_floorplan_image(
            project_id,
            image_path,
        )

        return {
            "success": True,
            "message": "Floor plan uploaded.",
            "data": image,
        }

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )


# ==========================================================
# Upload Siteplan
# ==========================================================

@router.post(
    "/{project_id}/siteplans",
    status_code=status.HTTP_201_CREATED,
)
def upload_siteplan(
    project_id: int,
    file: UploadFile = File(...),
):

    try:

        image_path = upload_service.save_file(
            file=file,
            folder="projects/siteplans",
        )

        image = service.add_siteplan_image(
            project_id,
            image_path,
        )

        return {
            "success": True,
            "message": "Site plan uploaded.",
            "data": image,
        }

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )


# ==========================================================
# List Project Images
# ==========================================================

@router.get(
    "/{project_id}/images",
)
def list_images(
    project_id: int,
):

    try:

        return service.list_images(
            project_id,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )


# ==========================================================
# Delete Image
# ==========================================================

@router.delete(
    "/images/{image_id}",
)
def delete_image(
    image_id: int,
):

    try:

        image = service.asset_repo.get_image(
            image_id,
        )

        if image is None:

            raise ValueError(
                "Image not found."
            )

        upload_service.delete_file(
            image.image_path,
        )

        service.asset_repo.delete_image(
            image_id,
        )

        return {
            "success": True,
            "message": "Image deleted successfully.",
        }

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )