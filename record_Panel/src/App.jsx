import React from "react";
import LoginPage from "./pages/LoginPage";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import ProtectedRoute from "./components/protectedRoute";
import NotFound from "./pages/NotFound";
import { isAuthenticated } from "@/services/member";

function App() {
  const isAuth = isAuthenticated();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuth ? <Navigate to="/chat" /> : <LoginPage />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
