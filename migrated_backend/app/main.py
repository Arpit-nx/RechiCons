# Creating a basic FastAPI project with a health check route.
from fastapi import FastAPI
from api.v1.auth import router as auth_router
from api.v1.categories import router as categories_router
from api.v1.company import router as company_router
from api.v1.enquiries import router as enquiries_router
from api.v1.media import router as media_router
from api.v1.projects import router as projects_router
from api.v1.services import router as services_router

app = FastAPI()

app.include_router(auth_router)
app.include_router(categories_router)
app.include_router(company_router)
app.include_router(enquiries_router)
app.include_router(media_router)
app.include_router(projects_router)
app.include_router(services_router)


@app.get("/health")
def health_check():
    return {"status": "ok"}
