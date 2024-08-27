import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.test.shelfsentry.uk/",
  headers: { "Content-Type": "application/json" },
});

export function setBearerToken(token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export function removeBearerToken() {
  delete axiosInstance.defaults.headers.common["Authorization"];
}

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      } else return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
