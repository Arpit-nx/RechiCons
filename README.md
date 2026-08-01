# Rechi Construction Migration Project

## Overview

This project migrates the legacy CodeIgniter backend to a modern
FastAPI + SQL Server architecture while preparing a React frontend. The
objective is business continuity, cleaner architecture, and API-first
development.

## Technology Stack

### Backend

-   FastAPI
-   SQLAlchemy
-   Microsoft SQL Server
-   JWT Authentication
-   Pydantic v2
-   Swagger/OpenAPI
-   Static File Serving

### Planned Frontend

-   React
-   Vite
-   Framer Motion
-   Axios

## Architecture

``` text
React
   |
Public APIs
   |
FastAPI Routers
   |
Service Layer
   |
SQLAlchemy Models
   |
SQL Server
```

## Backend Sprints

### Sprint 1

-   Project setup
-   Configuration
-   Database connection
-   JWT Authentication
-   Login & Registration

### Sprint 2

-   Company module
-   Project CRUD
-   Upload system
-   Static media
-   Media helper

### Sprint 3

-   Public Company API
-   Public Projects API
-   Public Categories API

### Sprint 4

-   Services
-   Public Services
-   Enquiries
-   API verification

### Sprint 5

-   Backend freeze
-   Cleanup
-   Regression testing
-   API handoff

## Improvements over Legacy CodeIgniter

-   API-first architecture
-   Clean separation of routers, services, models and schemas
-   JWT secured admin APIs
-   SQLAlchemy ORM
-   Automatic Swagger documentation
-   Unified company information model
-   Aggregated project detail API
-   Reusable upload service
-   Central media URL helper
-   Slug-based public routes
-   Persistent enquiry storage
-   Easier testing and maintenance

## Migration Benefits

-   Decoupled frontend and backend
-   Easier future enhancements
-   Better maintainability
-   Cleaner codebase
-   Faster development cycle
-   Cloud/CDN ready media handling
-   Better developer onboarding
-   Consistent validation
-   Improved scalability path

## Frontend Roadmap (Planned)

1.  Project setup & routing
2.  Shared layout (Navbar/Footer)
3.  Homepage
4.  Project listing
5.  Project details
6.  Contact/About
7.  Animations with Framer Motion
8.  Responsive optimisation
9.  Final integration & QA

## Future Enhancements

-   Email notifications
-   Admin analytics
-   Role-based authorization
-   Search & filtering
-   Docker deployment
-   CI/CD
-   Image optimisation

## Status

Backend: Feature Complete ✅

Frontend: Planned ⏳
