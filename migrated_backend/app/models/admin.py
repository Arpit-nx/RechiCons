# from sqlalchemy import Integer, String
# from sqlalchemy.orm import Mapped, mapped_column

# from app.db.base import Base

# #Admin DTO for legacy admin_login table
# class Admin(Base):
#     """
#     SQLAlchemy model for the legacy `admin_login` table.
#     """

#     __tablename__ = "admin_login"

#     id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)

#     username: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)

#     password: Mapped[str] = mapped_column(String(255), nullable=False)

#     name: Mapped[str | None] = mapped_column(String(150), nullable=True)

#     email: Mapped[str | None] = mapped_column(String(150), nullable=True)