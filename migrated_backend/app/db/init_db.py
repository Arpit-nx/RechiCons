# app/db/init_db.py

from app.db.base import Base
from app.db.session import engine

# Import every model here
from app.models.user import User

def init_db():
    Base.metadata.create_all(bind=engine)