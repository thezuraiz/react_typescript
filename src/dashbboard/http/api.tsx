import axios from "axios";

let token = "";

const api = axios.create({
  baseURL: "https://apiadsells.nms-mdm.com/",
  headers: {
    "Content-Type": "application/json",
    Authentication: `Bearer ${token}`,
  },
});

export const login = async (data: { email: string; password: string }) =>
  api.post("/auth/login", data);

export const register = async (data: { email: string; password: string }) =>
  api.post("/auth/register", data);

export const getToken = async () => {
  let email = import.meta.env.Email;
  let password = import.meta.env.Password;
  const response = await api.post<{ token: string }>("api/token/", {
    email,
    password,
  });
  console.log(response);
  token = response.data.token;
  return token;
};

export const getCampaigns = async () => api.get("api/stats/camapaigns/");

export const getDevices = async () => api.get("api/stats/devices/");

export const getRoutes = async () => api.get("api/stats/routes/");

export const getScreens = async () => api.get("api/stats/screens/");
