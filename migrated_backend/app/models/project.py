from datetime import datetime

from sqlalchemy import (
    Boolean,
    DateTime,
    ForeignKey,
    Integer,
    String,
    Text,
    func,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    category_id: Mapped[int] = mapped_column(
        ForeignKey("categories.id")
    )

    title: Mapped[str] = mapped_column(
        String(250),
        nullable=False
    )

    slug: Mapped[str] = mapped_column(
        String(280),
        unique=True,
        nullable=False
    )

    short_description: Mapped[str | None] = mapped_column(
        Text
    )

    description: Mapped[str | None] = mapped_column(
        Text
    )

    location: Mapped[str | None] = mapped_column(
        String(200)
    )

    builder: Mapped[str | None] = mapped_column(
        String(150)
    )

    status: Mapped[str | None] = mapped_column(
        String(100)
    )

    price: Mapped[str | None] = mapped_column(
        String(100)
    )

    rera_number: Mapped[str | None] = mapped_column(
        String(150)
    )

    thumbnail: Mapped[str | None] = mapped_column(
        String(255)
    )

    is_featured: Mapped[bool] = mapped_column(
        Boolean,
        default=False
    )

    display_order: Mapped[int] = mapped_column(
        Integer,
        default=0
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )

    category = relationship(
        "Category",
        back_populates="projects"
    )

    images = relationship(
        "ProjectImage",
        back_populates="project",
        cascade="all, delete-orphan"
    )

    amenities = relationship(
        "ProjectAmenity",
        back_populates="project",
        cascade="all, delete-orphan"
    )