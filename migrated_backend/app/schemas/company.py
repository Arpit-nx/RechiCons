# app/schemas/company.py

from datetime import datetime
from pydantic import BaseModel, ConfigDict, EmailStr


class CompanyBase(BaseModel):
    company_name: str

    about: str | None = None
    mission: str | None = None
    vision: str | None = None

    phone: str | None = None
    alternate_phone: str | None = None

    email: EmailStr | None = None

    address: str | None = None

    facebook: str | None = None
    instagram: str | None = None
    linkedin: str | None = None
    youtube: str | None = None

    logo: str | None = None
    favicon: str | None = None


class CompanyCreate(CompanyBase):
    pass


class CompanyUpdate(BaseModel):

    company_name: str | None = None

    about: str | None = None
    mission: str | None = None
    vision: str | None = None

    phone: str | None = None
    alternate_phone: str | None = None

    email: EmailStr | None = None

    address: str | None = None

    facebook: str | None = None
    instagram: str | None = None
    linkedin: str | None = None
    youtube: str | None = None

    logo: str | None = None
    favicon: str | None = None


class CompanyResponse(CompanyBase):

    id: int

    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)