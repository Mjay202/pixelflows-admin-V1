import axios from "axios";

const BASE_URL = process.env.BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getPlatforms = async () => {
  try {
    const response = await api.get("/platforms");
    return response.data;
  } catch (error) {
    console.error("Error fetching platforms:", error);
    throw error;
  }
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post("/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
