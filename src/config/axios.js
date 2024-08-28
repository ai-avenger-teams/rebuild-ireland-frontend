import axios from "axios";

const LOCAL_URL = "http://127.0.0.1:8000/";
export const axiosInstance = axios.create({
  baseURL: LOCAL_URL,
  headers: { "Content-Type": "application/json" },
});

export function setBearerToken(token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export function removeBearerToken() {
  delete axiosInstance.defaults.headers.common["Authorization"];
}
