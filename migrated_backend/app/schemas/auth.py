from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr, Field


# ==========================================================
# Login
# ==========================================================

class LoginRequest(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    password: str = Field(..., min_length=6)


# ==========================================================
# JWT Response
# ==========================================================

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


# ==========================================================
# User Response
# ==========================================================

class UserResponse(BaseModel):
    id: int
    username: str
    email: EmailStr
    role: str
    is_active: bool
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


# ==========================================================
# Login Response
# ==========================================================

class LoginResponse(BaseModel):
    success: bool
    message: str
    token: Token
    user: UserResponse


# ==========================================================
# Create Admin
# ==========================================================

class CreateUserRequest(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)

    email: EmailStr

    password: str = Field(..., min_length=8)

    role: str = "admin"