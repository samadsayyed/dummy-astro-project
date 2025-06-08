import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://admin.bablon.in/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add request interceptor for authentication if needed

export default apiClient;
