import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        // Handle successful login
        console.log('Login successful');
      } else {
        // Handle failed login
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="bod flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-semibold text-caff33 mb-4">Login</h1>
      <p className="text-gray-300 text-center mb-8">Welcome back! Please log in to access your account.</p>

      <form className="login-form">
        <div className="flex items-center">
          <input
            type="text"
            id="username"
            placeholder="Enter your email"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-14 p-4 rounded-lg border border-gray-300 mb-4"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 p-4 rounded-lg border border-gray-300 mb-4"
            required
          />
        </div>

        <button className="w-full h-14 bg-caff33 text-white rounded-lg mb-4" onClick={handleLogin}>
          Login
        </button>

        <button className="w-full h-14 bg-gray-300 text-gray-700 rounded-lg">
          Signup
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
