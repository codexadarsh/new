import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrors('Both fields are required');
      return;
    }

    // You can send data to the backend here.
    console.log('Logging in with:', { email, password });

    // Reset form on successful login
    setEmail('');
    setPassword('');
    setErrors('');
  };

  const handleback = () => {
    document.querySelector('.home').style.display = 'block';
    document.querySelector('.login-container').style.display = 'none';
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {errors && <p style={{ color: 'red' }}>{errors}</p>}
        <button type="submit">Login</button>
        <button className='btn' onClick={handleback}>Back</button>
      </form>
    </div>
  );
};

export default LoginForm;
