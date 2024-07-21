from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from auth import router as auth_router

app = FastAPI()

# Include authentication routes
app.include_router(auth_router, prefix="/auth")

# Serve static files from 'frontend/build'
app.mount("/", StaticFiles(directory="../frontend/build", html=True), name="static")
