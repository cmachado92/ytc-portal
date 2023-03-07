import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    // Verify there's a session now (valid token)
    const token = localStorage.getItem("token");

    if (token) {
      setisLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Profile />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/lineage" element={<Profile />} />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={<Login setisLoggedIn={setisLoggedIn} />}
              />
              <Route
                path="/login"
                element={<Login setisLoggedIn={setisLoggedIn} />}
              />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
