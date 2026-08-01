# app/db/init_db.py

from app.db.base import Base
from app.db.session import engine

from app.models.user import User
from app.models.company import Company   # NEW

from app.models.category import Category
from app.models.project import Project
from app.models.project_image import ProjectImage
from app.models.project_amenity import ProjectAmenity


def init_db():
    Base.metadata.create_all(bind=engine)