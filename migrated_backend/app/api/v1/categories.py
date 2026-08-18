from fastapi import APIRouter, HTTPException

from app.schemas.category import (
    CategoryCreate,
    CategoryUpdate,
    CategoryResponse
)

from app.services.category_service import CategoryService

router = APIRouter(
    prefix="/categories",
    tags=["Categories"],
)

service = CategoryService()


@router.get("/",
    response_model=list[CategoryResponse],)
def list_categories():

    return service.list_categories()


@router.get("/{category_id}",
    response_model=list[CategoryResponse],)
def get_category(
    category_id: int,
):

    try:

        return service.get_category(
            category_id,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )


@router.post("/",
    response_model=list[CategoryResponse],)
def create_category(
    payload: CategoryCreate,
):

    return service.create_category(
        payload,
    )


@router.put("/{category_id}",
    response_model=list[CategoryResponse],)
def update_category(
    category_id: int,
    payload: CategoryUpdate,
):

    try:

        return service.update_category(
            category_id,
            payload,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )


@router.delete("/{category_id}")
def delete_category(
    category_id: int,
):

    try:

        return service.delete_category(
            category_id,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )


@router.get("/public/all")
def public_categories():

    return service.list_active_categories()


@router.get("/public/{slug}")
def category_by_slug(
    slug: str,
):

    try:

        return service.get_category_by_slug(
            slug,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )