import axios from 'axios';

const apiClient = axios.create({
  baseURL: "https://admin.bablon.in/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { apiClient as a };
