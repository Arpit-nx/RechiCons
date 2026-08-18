# from fastapi import APIRouter, Depends, HTTPException, status
# from sqlalchemy.orm import Session

# from app.db.session import get_db
# from app.schemas.auth import (
#     LoginRequest,
#     LoginResponse,
#     Token,
#     UserResponse,
#     CreateUserRequest,
# )
# from app.services.auth_service import AuthService

# router = APIRouter(
#     prefix="/auth",
#     tags=["Authentication"],
# )


# @router.post(
#     "/register",
#     response_model=UserResponse,
#     status_code=status.HTTP_201_CREATED,
# )
# async def register(
#     payload: CreateUserRequest,
#     db: Session = Depends(get_db),
# ):
#     service = AuthService(db)

#     try:
#         user = service.create_user(payload)
#         return user

#     except ValueError as e:
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail=str(e),
#         )


# @router.post(
#     "/login",
#     response_model=LoginResponse,
# )
# async def login(
#     payload: LoginRequest,
#     db: Session = Depends(get_db),
# ):
#     service = AuthService(db)

#     try:
#         result = service.login(payload)

#         return LoginResponse(
#             success=True,
#             message="Login successful.",
#             token=Token(
#                 access_token=result["access_token"],
#             ),
#             user=UserResponse.model_validate(
#                 result["user"]
#             ),
#         )

#     except ValueError as e:
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail=str(e),
#         )


# @router.get(
#     "/health",
# )
# async def auth_health():
#     return {
#         "module": "Authentication",
#         "status": "ready",
#     }

from fastapi import (
    APIRouter,
    HTTPException,
    status,
)

from app.schemas.auth import (
    LoginRequest,
    LoginResponse,
    Token,
    UserResponse,
)

from app.services.auth_service import AuthService


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)

service = AuthService()


@router.post(
    "/login",
    response_model=LoginResponse,
)
def login(
    payload: LoginRequest,
):

    try:

        result = service.login(
            payload
        )

        return LoginResponse(
            success=True,
            message="Login successful.",
            token=Token(
                access_token=result[
                    "access_token"
                ],
            ),
            user=UserResponse.model_validate(
                result["user"]
            ),
        )

    except ValueError as e:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(e),
        )


@router.get("/health")
def auth_health():

    return {
        "module": "Authentication",
        "status": "ready",
    }