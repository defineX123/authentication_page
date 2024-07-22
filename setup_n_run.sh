#!/bin/bash

python3 -m venv venv
source venv/bin/activate

# Set up backend
cd backend

pip install -r requirements.txt

# Build frontend if not already built
if [ ! -d "../frontend/build" ]; then
  cd ../frontend
  npm install
  npm run build
fi

# Run backend server
cd ../backend
uvicorn main:app

