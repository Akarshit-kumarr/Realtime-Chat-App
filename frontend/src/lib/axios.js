import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://realtime-chat-app-io0h.onrender.com/api",
  withCredentials: true,
});
