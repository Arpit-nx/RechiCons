from app.repository.base_repository import BaseRepository
from app.schemas.auth import AuthUserRecord


class AuthRepository(BaseRepository):

    SHEET_NAME = "users"

    RESPONSE_MODEL = AuthUserRecord

    def get_admin(self):

        users = self.find_all()

        for user in users:

            if (
                user.role == "admin"
                and user.is_active
            ):
                return user

        return None

    def get_by_username(
        self,
        username: str,
    ):

        return self.find_first(
            "username",
            username,
        )

    def create_user(
        self,
        data,
    ):

        return self.insert(data)