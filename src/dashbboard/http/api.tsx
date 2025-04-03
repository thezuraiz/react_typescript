import axios from "axios";

const api = axios.create({
  baseURL: "localhost/12.23.4.example",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (data: { email: string; password: string }) =>
  api.post("/auth/login", data);

export const register = async (data: { email: string; password: string }) =>
  api.post("/auth/register", data);
