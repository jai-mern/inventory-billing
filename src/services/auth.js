// auth.js
// This service file can handle authentication-related requests to your backend server

import { postData } from './api';

// Example function for user login
export const loginUser = async (credentials) => {
  try {
    const response = await postData('login', credentials);
    return response;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Example function for user registration
export const registerUser = async (userData) => {
  try {
    const response = await postData('register', userData);
    return response;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
