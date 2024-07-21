#!/bin/bash

rm backend/test.db

# Set up backend
cd backend
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt

# Build frontend if not already built
if [ ! -d "../frontend/build" ]; then
  cd ../frontend
  npm install
  npm run build
fi

# Run backend server
cd ../backend
uvicorn main:app --reload
