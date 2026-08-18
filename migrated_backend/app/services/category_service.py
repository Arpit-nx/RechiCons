from app.repository.category_repository import CategoryRepository
from app.schemas.category import CategoryCreate, CategoryUpdate
from app.utils.slug import generate_slug

class CategoryService:

    def __init__(self):

        self.repo = CategoryRepository()

    def list_categories(self):

        return self.repo.list_categories()

    def list_active_categories(self):

        return self.repo.active_categories()

    def get_category(
        self,
        category_id: int,
    ):

        category = self.repo.get_category(
            category_id
        )

        if category is None:
            raise ValueError(
                "Category not found."
            )

        return category

    def create_category(
        self,
        payload: CategoryCreate,
    ):

        data = payload.model_dump()

        data["slug"] = generate_slug(
            data["name"]
        )

        if data.get("display_order") is None:
            data["display_order"] = 0

        if data.get("is_active") is None:
            data["is_active"] = True

        if self.repo.exists_by_name(
            data["name"]
        ):
            raise ValueError(
                "Category already exists."
            )

        return self.repo.create_category(
            data,
        )

    def update_category(
        self,
        category_id: int,
        payload: CategoryUpdate,
    ):

        category = self.repo.get_category(
            category_id,
        )

        if category is None:
            raise ValueError(
                "Category not found."
            )

        data = payload.model_dump(
            exclude_none=True,
            exclude_unset=True,
        )

        if "name" in data:

            data["slug"] = generate_slug(
                data["name"]
            )

        if self.repo.exists_by_name(
            data["name"]
        ):
            raise ValueError(
                "Category already exists."
            )

        return self.repo.update_category(
            category_id,
            data,
        )

    def delete_category(
        self,
        category_id: int,
    ):

        if self.repo.get_category(category_id) is None:
            raise ValueError(
                "Category not found."
            )

        self.repo.delete_category(
            category_id,
        )

        return {
            "message": "Category deleted successfully."
        }

    def get_category_by_slug(
        self,
        slug: str,
    ):

        category = self.repo.find_by_slug(
            slug,
        )

        if category is None:
            raise ValueError(
                "Category not found."
            )

        return category