import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getProperties = async () => {
  const response = await API.get('/properties');
  return response.data;
};

export const searchProperties = async (filters = {}) => {
  const response = await API.get('/properties/search', {
    params: filters,
  });

  return response.data;
};