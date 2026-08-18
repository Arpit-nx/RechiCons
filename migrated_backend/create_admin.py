from getpass import getpass

from app.repository.auth_repository import AuthRepository
from app.core.security import hash_password


def create_admin():

    repo = AuthRepository()

    existing_admin = repo.get_admin()

    if existing_admin:

        print("An active admin already exists.")
        return

    print("=== Rechi CMS Admin Setup ===")

    username = input("Username: ").strip()
    email = input("Email: ").strip()

    password = getpass("Password: ")
    confirm_password = getpass("Confirm password: ")

    if password != confirm_password:

        print("Passwords do not match.")
        return

    if not username:

        print("Username cannot be empty.")
        return

    if not password:

        print("Password cannot be empty.")
        return

    data = {
        "username": username,
        "email": email,
        "password": hash_password(password),
        "role": "admin",
        "is_active": True,
    }

    admin = repo.create_user(data)

    print()
    print("Admin created successfully.")
    print(f"Username: {admin.username}")
    print(f"Admin ID: {admin.id}")


if __name__ == "__main__":
    create_admin()