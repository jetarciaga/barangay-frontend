import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  // alert(`${auth.isAuthenticated}`);
  return auth.isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
