import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogInPage.css'; 
// import backgroundImage from '../images/background.jpeg'; // Adjust the path as needed

function LogInPage() {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  
	const handleUsernameChange = (event) => {
	  setUsername(event.target.value);
	};
  
	const handlePasswordChange = (event) => {
	  setPassword(event.target.value);
	};
  
	const handleSubmit = (event) => {
		event.preventDefault();
		// Simulate login logic, replace with your actual API call
		if (username === 'username' && password === 'password') { // Replace with actual login check
		  console.log('Login successful!');
		  navigate('/login'); // Navigate to the logged-in page
		} else {
		  console.log('Login failed!');
		  alert('Invalid username or password'); // Display error message
		}
	  };
  
	return (
		<div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
					<p className='forgot-password'>
                      <a href="/forgot-password">Forgot Password?</a>
                    </p>
                    <p className='login-button-container'><button className='login-button' type="submit">Login</button></p>
                    
                    <p className='signup'>
                      <a href="/signup">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
	);
  }
  
export default LogInPage;