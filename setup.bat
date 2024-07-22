@echo off

chmod +x
REM Create and activate virtual environment
python -m venv venv
venv\Scripts\activate

REM Remove existing test database if it exists
IF EXIST "backend\test.db" (
    del backend\test.db
)

REM Set up backend
cd backend
pip install -r requirements.txt

REM Build frontend if not already built
IF NOT EXIST "..\frontend\build" (
    cd ..\frontend
    npm install
    npm run build
)

REM Run backend server
cd ..\backend
uvicorn main:app --reload
