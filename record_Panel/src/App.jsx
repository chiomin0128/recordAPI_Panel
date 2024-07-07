import React from "react";
import LoginPage from "./pages/LoginPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
