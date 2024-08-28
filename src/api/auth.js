import { axiosInstance } from "../config/axios";

export const login = (data) => axiosInstance.post("auth/login", data);

export const signup = (data) => axiosInstance.post("auth/ignup", data);

export const logout = () => axiosInstance.post("auth/signup");

export const whoami = () => axiosInstance.get("auth/whoami");
