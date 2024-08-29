import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { axiosInstance } from "../config/axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeUser, setActiveUser] = useState(null);

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const validateToken = async () => {
        try {
          const response = await axiosInstance.get("auth/whoami", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setActiveUser(response.data);
          setIsAuthenticated(true);
        } catch (error) {
          setIsAuthenticated(false);
        }
      };

      validateToken();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, activeUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
