# Authentication Project

## Overview

This project demonstrates a simple authentication system with a backend server using FastAPI and a frontend application using React. The backend provides authentication endpoints for (1) login and (2) registration, and the frontend allows users to interact with these endpoints.

### Running the Project

1. Clone the repository:
    git clone https://github.com/defineX123/authentication_page

2. Navigate to root:
   cd authentication_page

3. Run the setup and start script:
- ./setup_and_run.sh (for MacOS)
- ./setup.bat (for Windows)
- [These can be combined using a single Python script using some conditionals]

The bash script is written using my knowledge in CS136 and it will streamline the setting up process which includes: 
- Setting up a virtual environment for the backend.
- Installing dependencies.
- Starting the backend server which serves static files to the frontend.

4. Access the server by typing `http://localhost:8000`into the browser. Register, and login to your favorite app!


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

# Additional Details:
    This system used token-based authentication to avoid re-authenticate against a user every time they navigate a page.

# Images

Registering august
![Registering august](images/first_reg.png)
Changing page
![Changing page](images/change_page.png)
Logging in august
![Logging august](images/login_1.png)
Logging in unregistered username
![Logging in unregistered username](images/invalid_login.png)
Re-registering august
![Re-registering august](images/re_register.png)

