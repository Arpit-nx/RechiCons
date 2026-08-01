from sqlalchemy.orm import Session

from app.models.category import Category


class CategoryService:

    def __init__(self, db: Session):
        self.db = db

    def list_categories(self):

        return (
            self.db.query(Category)
            .filter(Category.is_active == True)
            .order_by(Category.display_order)
            .all()
        )