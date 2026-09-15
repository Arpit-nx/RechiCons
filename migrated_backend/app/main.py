# Creating a basic FastAPI project with a health check route.
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.auth import router as auth_router
from app.api.v1.categories import router as categories_router
from app.api.v1.company import router as company_router
from app.api.v1.enquiries import router as enquiries_router
from app.api.v1.media import router as media_router
from app.api.v1.projects import router as projects_router
from app.api.v1.services import router as services_router
from app.api.v1.project_asset import router as project_assets_router

from app.api.v1.public.projects import router as public_projects_router
from app.api.v1.public.company import router as public_company_router
from app.api.v1.public.categories import router as public_categories_router
from app.api.v1.public.services import router as public_services_router
from app.api.v1.public.enquiries import router as public_enquiries_router
from contextlib import asynccontextmanager
# from app.db.init_db import init_db

@asynccontextmanager
async def lifespan(app):

    # init_db()

    yield

app = FastAPI(
    title="Rechi Construction API",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://rechiconstruction.in",
        "https://www.rechiconstruction.in"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/api/v1")
app.include_router(categories_router, prefix="/api/v1")
app.include_router(company_router, prefix="/api/v1")
app.include_router(enquiries_router, prefix="/api/v1")
app.include_router(media_router, prefix="/api/v1")
app.include_router(projects_router, prefix="/api/v1")
app.include_router(services_router, prefix="/api/v1")
app.include_router(project_assets_router, prefix="/api/v1")

app.include_router(public_projects_router, prefix="/api/v1")
app.include_router(public_company_router, prefix="/api/v1")
app.include_router(public_categories_router, prefix="/api/v1")
app.include_router(public_services_router, prefix="/api/v1")
app.include_router(public_enquiries_router, prefix="/api/v1")

from fastapi.staticfiles import StaticFiles

app.mount(
    "/uploads",
    StaticFiles(directory="app/uploads"),
    name="uploads",
)

@app.get("/health")
def health_check():
    return {"status": "ok"}
