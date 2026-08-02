import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const login = async (payload) => {
  try {
    const response = await API.post("/login", payload);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Login failed",
      }
    );
  }
};