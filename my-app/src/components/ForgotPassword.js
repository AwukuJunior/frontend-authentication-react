import React, { useState } from 'react';
import './ForgotPassword.css'; // Adjust the path as needed

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate forgot password logic (replace with your API call)
    console.log('Forgot Password:', { email });
    setMessage('If an account with that email exists, a reset link will be sent.');
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;