import React, { useState } from 'react';

const App = () => {
    // Importwnt state variables
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            // Determine the endpoint based on registration mode [register/login]
            const endpoint = isRegistering ? 'register' : 'login';
            const response = await fetch(`http://localhost:8000/auth/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON
                },
                body: JSON.stringify({ username, password }), // Send username and password
            });

            const data = await response.json();

            if (response.ok) {
                // If registrarion is successful. Yeah!
                if (isRegistering) {
                    setMessage('Registration successful');
                } else if (data.access_token) {
                    // If login is successful and access token is received. Double Yeah!
                    localStorage.setItem('token', data.access_token); // Store the token in localStorage
                    setMessage('Login successful');
                }
            } else {
                // Display error message
                setMessage(data.detail || 'Request failed');
            }
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Error during request:', error);
            setMessage('An error occurred');
        }
    };

    return (
        <div className="login-container">
            {/* Display title based on registration mode */}
            <h1>{isRegistering ? 'Register' : 'Login'}</h1>
            <form onSubmit={handleSubmit}>
                {/* Input field for username */}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {/* Input field for password */}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* Submit button */}
                <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
            </form>
            {/* Display message to the user */}
            <p>{message}</p>
            {/* Toggle between login and registration mode */}
            <button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Back to Login' : 'Register'}
            </button>
        </div>
    );
};

export default App;
