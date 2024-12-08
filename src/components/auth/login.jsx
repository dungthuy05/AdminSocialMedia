import React, { useState } from 'react';

import { useAuth } from '../../libs/authProvider';
import Logo from '../../views/logo.svg';

const LoginForm = () => {
  const { login } = useAuth();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [statusMessage, setStatusMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { success, message, userId } = await login(credentials);
      if (success && userId === process.env.REACT_APP_ADMIN_ID) {
        setStatusMessage({ type: 'success', text: message || 'Login successful!' });

        // Redirect to the dashboard after 500ms
        setTimeout(() => {
          window.location.href = '/';
        }, 500);
      } else if (success) {
        setStatusMessage({ type: 'error', text: 'You are not authorized to access this page.' });
      } else {
        setStatusMessage({ type: 'error', text: message || 'Login failed!' });
      }
    } catch (error) {
      setStatusMessage({ type: 'error', text: 'An error occurred during login.' });
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-500 to-purple-700 items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center">
          <img src={Logo} alt="Aitee Logo" className="mx-auto mb-4 w-20 h-20 rounded-full" />
          <h1 className="text-2xl font-bold text-gray-700 mb-2">Welcome to Aitee</h1>
          <p className="text-gray-500 mb-6">Connect with the world</p>
        </div>
        {statusMessage && (
          <div
            className={`mb-4 text-center p-2 rounded-lg ${
              statusMessage.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {statusMessage.text}
          </div>
        )}
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
              onChange={handleInputChange}
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
              onChange={handleInputChange}
              autoComplete="current-password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2 rounded border-gray-300" />
                Remember me
              </label>
            </div>
            <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 focus:ring-4 focus:ring-purple-300"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/login/#" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
