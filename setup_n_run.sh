#!/bin/bash

# support both Mac and Window Users
 
python3 -m venv venv
source venv/bin/activate

if [ -f "backend/test.db" ]; then
  rm backend/test.db
fi

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
uvicorn main:app --reload

