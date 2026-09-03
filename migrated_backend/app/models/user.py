# from datetime import datetime

# from sqlalchemy import Boolean, DateTime, Enum, Integer, String, func
# from sqlalchemy.orm import Mapped, mapped_column

# from app.db.base import Base

# from enum import Enum as PyEnum

# #User Base DTO for users table
# class UserRole(str, PyEnum):
#     ADMIN = "admin"
#     EDITOR = "editor"


# class User(Base):
#     __tablename__ = "users"

#     id: Mapped[int] = mapped_column(
#         Integer,
#         primary_key=True,
#         index=True
#     )

#     username: Mapped[str] = mapped_column(
#         String(50),
#         unique=True,
#         nullable=False
#     )

#     email: Mapped[str] = mapped_column(
#         String(120),
#         unique=True,
#         nullable=False
#     )

#     password: Mapped[str] = mapped_column(
#         String(255),
#         nullable=False
#     )

#     role: Mapped[UserRole] = mapped_column(
#         Enum(UserRole),
#         default=UserRole.ADMIN
#     )

#     is_active: Mapped[bool] = mapped_column(
#         Boolean,
#         default=True
#     )

#     created_at: Mapped[datetime] = mapped_column(
#         DateTime(timezone=True),
#         server_default=func.now()
#     )

#     updated_at: Mapped[datetime] = mapped_column(
#         DateTime(timezone=True),
#         server_default=func.now(),
#         onupdate=func.now()
#     )