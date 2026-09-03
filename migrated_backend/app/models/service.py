# from sqlalchemy import (
#     Column,
#     Integer,
#     String,
#     Text,
#     Boolean,
#     DateTime,
# )

# from sqlalchemy.sql import func

# from app.db.base import Base


# class Service(Base):

#     __tablename__ = "services"

#     id = Column(
#         Integer,
#         primary_key=True,
#         index=True,
#     )

#     title = Column(
#         String(255),
#         nullable=False,
#     )

#     slug = Column(
#         String(255),
#         unique=True,
#         nullable=False,
#         index=True,
#     )

#     content = Column(
#         Text,
#         nullable=False,
#     )

#     image_path = Column(
#         String(500),
#         nullable=True,
#     )

#     display_order = Column(
#         Integer,
#         default=0,
#     )

#     is_active = Column(
#         Boolean,
#         default=True,
#     )

#     created_at = Column(
#         DateTime,
#         server_default=func.now(),
#     )

#     updated_at = Column(
#         DateTime,
#         server_default=func.now(),
#         onupdate=func.now(),
#     )