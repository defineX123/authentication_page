#!/bin/bash
cd backend
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload &
cd ../frontend
npm install
npm start

