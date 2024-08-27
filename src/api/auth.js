import { axiosInstance } from "../config/axios";

export const login = (data) => axiosInstance.post("login", data);

export const signup = (data) => axiosInstance.post("signup", data);

export const logout = () => axiosInstance.post("signup");

export const whoami = () => axiosInstance.get("me");
