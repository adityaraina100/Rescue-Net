import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pic, setPic] = useState('');
  const navigate = useNavigate();
  const toast = useToast(); // Initialize useToast

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/user/',
        { name, email, password, pic },
        config
      );
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      console.log(data);
      

      navigate('/'); 
    } catch (error) {
      console.error('Error during signup:', error);

      if (error.response && error.response.status === 400) {
        
        toast({
          title: 'User already exists.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } else {
   
        toast({
          title: 'An error occurred during signup. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <div className="bod flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-semibold text-caff33 mb-4">Signup</h1>
      <p className="text-gray-300 text-center mb-8">
        Create a new account to get started.
      </p>

      <form className="signup-form" onSubmit={handleSignup}>
        <div className="form-group">
        
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-14 p-4 rounded-lg border border-gray-300 mb-4"
            required
          />
        </div>

        <div className="form-group">
      
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 p-4 rounded-lg border border-gray-300 mb-4"
            required
          />
        </div>

        <div className="form-group">
       
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

        <div className="form-group">
          
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="h-14 p-4 rounded-lg border border-gray-300 mb-4"
            required
          />
        </div>

        <div className="form-group">
         
          <input
            type="file"
            id="pic"
            name="pic"
            onChange={(e) => setPic(e.target.files[0])}
            className="h-14 p-4 rounded-lg border border-gray-300 mb-4"
            accept="image/*"
          />
        </div>

        <button className="w-full h-14 bg-caff33 text-white rounded-lg mb-4" type="submit">
          Signup
        </button>

        <button
          className="w-full h-14 bg-gray-300 text-gray-700 rounded-lg"
          onClick={() => navigate('/')}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
