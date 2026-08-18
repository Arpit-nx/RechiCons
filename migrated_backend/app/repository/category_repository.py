from app.repository.base_repository import BaseRepository
from app.schemas.category import CategoryResponse


class CategoryRepository(BaseRepository):

    SHEET_NAME = "categories"

    RESPONSE_MODEL = CategoryResponse

    # List active categories
    def active_categories(self):

        return sorted(

            self.find_by(
                "is_active",
                True,
            ),

            key=lambda x: x.display_order or 0,

        )

    # Admin list
    def list_categories(self):

        return sorted(

            self.find_all(),

            key=lambda x: x.display_order or 0,

        )

    # Get by ID
    def get_category(
        self,
        category_id: int,
    ):

        return self.find_by_id(
            category_id,
        )

    # Create
    def create_category(
        self,
        data,
    ):

        return self.insert(
            data,
        )

    # Update
    def update_category(
        self,
        category_id: int,
        data,
    ):

        return self.update(
            category_id,
            data,
        )

    # Delete
    def delete_category(
        self,
        category_id: int,
    ):

        return self.delete(
            category_id,
        )

    # Public lookup
    def find_by_slug(
        self,
        slug: str,
    ):

        return self.find_first(
            "slug",
            slug,
        )

    def exists_by_name(
        self,
        name: str,
    ):
        return self.find_first(
            "name",
            name,
        )