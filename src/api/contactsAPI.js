import axios from 'axios';
import { CONTACTS_ENDPOINT, AUTH_ENDPOINT } from '../utils/apiConfig';

export const getContacts = async () => {
  const response = await axios.get(CONTACTS_ENDPOINT);
  return response.data;
};

export const addNewContact = async (contact) => {
  const response = await axios.post(CONTACTS_ENDPOINT, contact);
  return response.data;
};

export const deleteExistingContact = async (id) => {
  await axios.delete(`${CONTACTS_ENDPOINT}/${id}`);
  return id;
};

export const registerUser = async (userData) => {
  const response = await axios.post(`${AUTH_ENDPOINT}/register`, userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${AUTH_ENDPOINT}/login`, credentials);
  return response.data;
};
