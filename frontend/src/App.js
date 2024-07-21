import React, { useState } from 'react';

const App = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [message, setMessage] = useState('');
   const [isRegistering, setIsRegistering] = useState(false);

   const handleSubmit = async (e) => {
       e.preventDefault();
       try {
           const endpoint = isRegistering ? 'register' : 'login';
           const response = await fetch(`http://localhost:8000/auth/${endpoint}`, {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify({ username, password }),
           });

           const data = await response.json();

           if (response.ok) {
               if (isRegistering) {
                   setMessage('Registration successful');
               } else if (data.access_token) {
                   localStorage.setItem('token', data.access_token);
                   setMessage('Login successful');
               }
           } else {
               setMessage(data.detail || 'Request failed');
           }
       } catch (error) {
           console.error('Error during request:', error);
           setMessage('An error occurred');
       }
   };

   return (
       <div className="login-container">
           <h1>{isRegistering ? 'Register' : 'Login'}</h1>
           <form onSubmit={handleSubmit}>
               <input
                   type="text"
                   placeholder="Username"
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
               />
               <input
                   type="password"
                   placeholder="Password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
               />
               <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
           </form>
           <p>{message}</p>
           <button onClick={() => setIsRegistering(!isRegistering)}>
               {isRegistering ? 'Back to Login' : 'Register'}
           </button>
       </div>
   );
};

export default App;
