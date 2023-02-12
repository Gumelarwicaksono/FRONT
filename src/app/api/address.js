import { config } from '../../config';
import axios from 'axios';

export const getAddress = async () => {
  const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

  return await axios.get(`${config.api_host}/api/delivery-addresses?limit=''`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const getLocation = async (lokasi, param, id) => {
  return await axios.get(`https://api.goapi.id/v1/regional/${lokasi}?${param}=${id}&api_key=iqSpGeS7eutcnIGNtyu2e6nE4PfCUI`);
};

export const createAddress = async (data) => {
  const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

  return await axios.post(`${config.api_host}/api/delivery-addresses`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
