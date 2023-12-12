import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'; 
const LoginPage = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const toast = useToast(); // Initialize useToast
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      let { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      console.log(data)
      localStorage.setItem("RescueInfo", JSON.stringify(data));
      toast({
        title: "Login Successful",
        status: "success",
        duration: 2000, 
        isClosable: true,
        position: "bottom",
      });
      navigate("/home");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
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
            id="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setUsername(e.target.value)}
            className="h-14 p-4 rounded-lg border border-gray-300 mb-4 m-10"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 p-4 rounded-lg border border-gray-300 mb-4 m-10"
            required
          />
        </div>

        <button className="w-full h-14 bg-caff33 text-white rounded-lg mb-4" onClick={handleLogin}>
          Login
        </button>

        <button className="w-full h-14 bg-gray-300 text-gray-700 rounded-lg">
        <Link to="/signup">Signup</Link>
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
