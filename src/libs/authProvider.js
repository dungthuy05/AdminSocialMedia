import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from './axios';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = sessionStorage.getItem('authUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const savedUser = sessionStorage.getItem('authUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (credentials) => {
    try {
      const response = await axios.post('/user/login', credentials);
      const { accessToken, refreshToken, user } = response.data;

      sessionStorage.setItem('authToken', accessToken);

      sessionStorage.setItem('refreshToken', refreshToken);

      sessionStorage.setItem('authUser', JSON.stringify(user));
      setUser(user);
      return {
        success: true,
        message: response.data?.message || 'Login successful',
        userId: user.id,
      };
    } catch (error) {
      return { success: false, message: error.response?.data?.error || 'Login failed' };
    }
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('authUser');
    sessionStorage.removeItem('refreshToken');
    setUser(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
