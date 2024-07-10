import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "@/services/auth";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
