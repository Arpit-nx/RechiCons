from datetime import datetime

from sqlalchemy import DateTime, Integer, String, Text, func
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base

#This is the company DTO
class Company(Base):
    __tablename__ = "company"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    company_name: Mapped[str] = mapped_column(
        String(150),
        nullable=False
    )

    about: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )

    mission: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )

    vision: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )

    phone: Mapped[str | None] = mapped_column(
        String(30),
        nullable=True
    )

    alternate_phone: Mapped[str | None] = mapped_column(
        String(30),
        nullable=True
    )

    email: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True
    )

    address: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )

    facebook: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    instagram: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    linkedin: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    youtube: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    logo: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    favicon: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
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