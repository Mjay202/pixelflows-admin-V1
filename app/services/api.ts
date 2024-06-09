import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (typeof window == undefined) {
      const token = ''
    }
  const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getAllJobs = async () => {
  const token = localStorage.getItem("accessToken");
  const data = []
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/jobs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(JSON.stringify(json)));

    return response;
  } catch (error) {
    return error
  }
};

export const getJob = async (id: string) => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/jobs/" + id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => response.json());

    if (response) {
     return response.data;
    }
  } catch (error) {
    return error;
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
