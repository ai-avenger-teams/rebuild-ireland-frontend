import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { whoami } from "../api/auth"; // Assuming you have an API function to check authentication
import { useQuery } from "@tanstack/react-query";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const { data, isPending, error } = useQuery({
    queryKey: ["whoami"],
    queryFn: whoami,
    onSuccess: (data) => {
      if (data.isAuthenticated) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    },
    onError: () => {
      setIsAuthenticated(false);
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
