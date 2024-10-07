import axios from 'axios';
import { USER_ENDPOINT, AUTH_ENDPOINT } from '../utils/apiConfig';

export const registerUser = async (userData) => {
  const response = await axios.post(`${USER_ENDPOINT}/signup`, userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${AUTH_ENDPOINT}/login`, credentials);
  return response.data;
};

export const getCurrentUser = async (token) => {
  const response = await axios.get(`${USER_ENDPOINT}/current`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
