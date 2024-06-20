// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/chat" /> : <LoginPage setLoggedIn={setLoggedIn} />} />
        <Route path="/chat" element={loggedIn ? <ChatPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
