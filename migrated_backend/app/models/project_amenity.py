# from sqlalchemy import ForeignKey, Integer, String
# from sqlalchemy.orm import Mapped, mapped_column, relationship

# from app.db.base import Base


# class ProjectAmenity(Base):
#     __tablename__ = "project_amenities"

#     id: Mapped[int] = mapped_column(
#         Integer,
#         primary_key=True
#     )

#     project_id: Mapped[int] = mapped_column(
#         ForeignKey("projects.id")
#     )

#     name: Mapped[str] = mapped_column(
#         String(150),
#         nullable=False
#     )

#     icon: Mapped[str | None] = mapped_column(
#         String(100)
#     )

#     display_order: Mapped[int] = mapped_column(
#         Integer,
#         default=0
#     )

#     project = relationship(
#         "Project",
#         back_populates="amenities"
#     )