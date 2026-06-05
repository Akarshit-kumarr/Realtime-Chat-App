import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://backend-api-clu2.onrender.com/api",
  withCredentials: true,
});
