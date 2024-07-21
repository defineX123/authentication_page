# Authentication Project

## Overview

This project demonstrates a simple authentication system with a backend server using FastAPI and a frontend application using React. The backend provides authentication endpoints for (1) login and (2) registration, and the frontend allows users to interact with these endpoints.

## Project Structure

authentication_project/
│
├── backend/
│ ├── main.py
│ ├── auth.py
│ ├── models.py
│ └── requirements.txt
│
└── frontend/
├── public/
│ └── index.html
├── src/
│ ├── App.js
│ └── index.js
├── package.json
└── package-lock.json

### Running the Project

1. Clone the repository:
    git clone https://github.com/yourusername/your-repo-name.git
    cd authentication_page

2. Run the setup and start script:
    ./setup_and_run.sh

The bash script is written using my knowledge in CS136 and it will streamline the setting up process which includes: 
- Setting up a virtual environment for the backend.
- Installing dependencies for both backend and frontend.
- Starting both the backend and frontend servers.

Access the frontend application at `http://localhost:3000`. The frontend will communicate with the backend server at `http://localhost:8000`.


# Backend

    main.py: Entry point for the FastAPI backend server.
    auth.py: Defines the authentication routes for login and registration.
    models.py: Defines the SQLAlchemy models and sets up the database.
    requirements.txt: Lists the required Python packages for the backend.

# Frontend

    public/index.html: The HTML file that contains a div with the id of root.
    src/App.js: React component that handles the login and registration forms.
    src/index.js: Entry point for the React application.
    package.json: Lists the dependencies and scripts for the frontend.
