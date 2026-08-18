# from sqlalchemy.orm import Session

# from app.models.user import User
# from app.schemas.auth import (
#     CreateUserRequest,
#     LoginRequest,
# )
# from app.core.security import (
#     hash_password,
#     verify_password,
# )
# from app.core.jwt import create_access_token


# class AuthService:

#     def __init__(self, db: Session):
#         self.db = db

#     # =====================================================
#     # Register User
#     # =====================================================

#     def create_user(self, payload: CreateUserRequest) -> User:

#         # Check Username
#         existing_username = (
#             self.db.query(User)
#             .filter(User.username == payload.username)
#             .first()
#         )

#         if existing_username:
#             raise ValueError("Username already exists.")

#         # Check Email
#         existing_email = (
#             self.db.query(User)
#             .filter(User.email == payload.email)
#             .first()
#         )

#         if existing_email:
#             raise ValueError("Email already exists.")

#         user = User(
#             username=payload.username,
#             email=payload.email,
#             password=hash_password(payload.password),
#             role=payload.role,
#         )

#         self.db.add(user)
#         self.db.commit()
#         self.db.refresh(user)

#         return user

#     # =====================================================
#     # Login
#     # =====================================================

#     def login(self, payload: LoginRequest):

#         user = (
#             self.db.query(User)
#             .filter(User.username == payload.username)
#             .first()
#         )

#         if not user:
#             raise ValueError("Invalid username or password.")

#         if not verify_password(
#             payload.password,
#             user.password,
#         ):
#             raise ValueError("Invalid username or password.")

#         if not user.is_active:
#             raise ValueError("Account has been disabled.")

#         token = create_access_token(
#             {
#                 "sub": str(user.id),
#                 "username": user.username,
#                 "role": user.role,
#             }
#         )

#         return {
#             "user": user,
#             "access_token": token,
#         }

#     # =====================================================
#     # Get User
#     # =====================================================

#     def get_user(self, user_id: int):

#         return (
#             self.db.query(User)
#             .filter(User.id == user_id)
#             .first()
#         )

from app.repository.auth_repository import AuthRepository
from app.schemas.auth import (
    LoginRequest,
    UserResponse,
)

from app.core.security import (
    verify_password,
)
from app.core.jwt import create_access_token


class AuthService:

    def __init__(self):

        self.repo = AuthRepository()

    def login(
        self,
        payload: LoginRequest,
    ):

        user = self.repo.get_by_username(
            payload.username
        )

        if user is None:

            raise ValueError(
                "Invalid username or password."
            )

        if not user.is_active:

            raise ValueError(
                "Account is inactive."
            )

        if user.role != "admin":

            raise ValueError(
                "Admin access required."
            )

        if not verify_password(
            payload.password,
            user.password,
        ):

            raise ValueError(
                "Invalid username or password."
            )

        access_token = create_access_token(
            {
                "sub": str(user.id),
                "username": user.username,
                "role": "admin",
            }
        )

        return {
            "access_token": access_token,
            "user": UserResponse.model_validate(
                user
            ),
        }