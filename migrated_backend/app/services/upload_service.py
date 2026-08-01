from pathlib import Path
from uuid import uuid4
import shutil

from fastapi import UploadFile

class UploadService:

    BASE_UPLOAD_DIR = Path("app/uploads")

    ALLOWED_IMAGE_TYPES = {
        ".jpg",
        ".jpeg",
        ".png",
        ".webp",
    }

    #Checking the file extension.
    @staticmethod
    def validate_extension(file: UploadFile):

        ext = Path(file.filename).suffix.lower()

        if ext not in UploadService.ALLOWED_IMAGE_TYPES:
            raise ValueError(
                "Unsupported image format."
            )

        return ext

    #Generating File name.
    @staticmethod
    def generate_filename(ext: str):

        return f"{uuid4().hex}{ext}"

    #Saving the file.
    @staticmethod
    def save_file(
        file: UploadFile,
        folder: str,
    ):

        ext = UploadService.validate_extension(file)

        filename = UploadService.generate_filename(ext)

        upload_dir = UploadService.BASE_UPLOAD_DIR / folder

        upload_dir.mkdir(
            parents=True,
            exist_ok=True,
        )

        filepath = upload_dir / filename

        with open(filepath, "wb") as buffer:
            shutil.copyfileobj(
                file.file,
                buffer,
            )

        return f"{folder}/{filename}"

    #Delete File.
    @staticmethod
    def delete_file(
        relative_path: str,
    ):

        file = UploadService.BASE_UPLOAD_DIR / relative_path

        if file.exists():
            file.unlink()