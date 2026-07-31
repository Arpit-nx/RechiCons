# Creating a basic FastAPI project with a health check route.
from fastapi import FastAPI
from app.api.v1.auth import router as auth_router
from app.api.v1.categories import router as categories_router
from app.api.v1.company import router as company_router
from app.api.v1.enquiries import router as enquiries_router
from app.api.v1.media import router as media_router
from app.api.v1.projects import router as projects_router
from app.api.v1.services import router as services_router
from contextlib import asynccontextmanager
from app.db.init_db import init_db

@asynccontextmanager
async def lifespan(app):

    init_db()

    yield

app = FastAPI(
    title="Rechi Construction API",
    version="1.0.0",
    lifespan=lifespan,
)

app.include_router(auth_router, prefix="/api/v1")
app.include_router(categories_router, prefix="/api/v1")
app.include_router(company_router, prefix="/api/v1")
app.include_router(enquiries_router, prefix="/api/v1")
app.include_router(media_router, prefix="/api/v1")
app.include_router(projects_router, prefix="/api/v1")
app.include_router(services_router, prefix="/api/v1")

@app.get("/health")
def health_check():
    return {"status": "ok"}
