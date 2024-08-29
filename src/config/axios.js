import axios from "axios";

const LOCAL_URL = "http://127.0.0.1:8000/";
export const axiosInstance = axios.create({
  baseURL: LOCAL_URL,
  headers: { "Content-Type": "application/json" },
});
