import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";

import Counter from "./pages/Counter";
import Calculator from "./pages/Calculator";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Palindrome from "./pages/Palindrome";
import Prime from "./pages/Prime";
import Theme from "./pages/Theme";
import Toggle from "./pages/Toggle";
import Weather from "./pages/Weather";
import Maps from "./pages/Maps";
import Dashboard from "./pages/Dashboard";
import Armstrong from "./pages/Armstrong";
import Developer from "./pages/Developer";

import "./App.css";

export default function App() {
  const location = useLocation();

  // 🔐 USER STATE
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentUser")) || null;
    } catch {
      return null;
    }
  });

  // 🌗 SYSTEM THEME DETECT
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "midnight"
      : "light";

  // 🎨 THEME STATE
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || getSystemTheme();
  });

  // SAVE THEME
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  // 🔄 AUTO SYSTEM SYNC (only if user hasn't overridden)
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (!localStorage.getItem("theme")) {
        setTheme(media.matches ? "midnight" : "light");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  // 🔐 PROTECTED ROUTE
  const PrivateRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" replace />;
  };

  // ❗ HIDE NAVBAR ON AUTH PAGES
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className={`app ${theme}`}>

      {/* 🔥 NAVBAR */}
      {user && !hideNavbar && (
        <div className="navbar glass">
          <div className="logo">⚡ Portfolio</div>

          <div
            className="nav-links"
            style={{ display: "flex", gap: "20px", alignItems: "center" }}
          >
            <Link to="/">Home</Link>
            <Link to="/armstrong">Armstrong</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/calculator">Calculator</Link>
            <Link to="/palindrome">Palindrome</Link>
            <Link to="/prime">Prime</Link>
            <Link to="/theme">Theme</Link>
            <Link to="/toggle">Toggle</Link>
            <Link to="/weather">Weather</Link>
            <Link to="/map">Map</Link>
            <Link to="/developer">Developer</Link>

            {/* 👤 USER */}
            <span>👤 {user?.name}</span>

            <button
              onClick={() => {
                localStorage.removeItem("currentUser");
                setUser(null);
              }}
              style={{
                padding: "6px 12px",
                borderRadius: "10px",
                border: "none",
                background: "#ef4444",
                color: "white",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* 📜 ROUTES */}
      <div className="content">
        <Routes>

          {/* 🔓 PUBLIC ROUTES */}
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
          />

          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />

          {/* 🔐 PRIVATE ROUTES */}
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/counter" element={<PrivateRoute><Counter /></PrivateRoute>} />
          <Route path="/calculator" element={<PrivateRoute><Calculator /></PrivateRoute>} />
          <Route path="/palindrome" element={<PrivateRoute><Palindrome /></PrivateRoute>} />
          <Route path="/armstrong" element={<PrivateRoute><Armstrong /></PrivateRoute>} />
          <Route path="/prime" element={<PrivateRoute><Prime /></PrivateRoute>} />
          <Route path="/developer" element={<PrivateRoute><Developer /></PrivateRoute>} />

          <Route
            path="/theme"
            element={
              <PrivateRoute>
                <Theme theme={theme} setTheme={setTheme} />
              </PrivateRoute>
            }
          />

          <Route
            path="/toggle"
            element={
              <PrivateRoute>
                <Toggle theme={theme} setTheme={setTheme} />
              </PrivateRoute>
            }
          />

          <Route path="/weather" element={<PrivateRoute><Weather /></PrivateRoute>} />
          <Route path="/map" element={<PrivateRoute><Maps /></PrivateRoute>} />

          {/* 🚫 FALLBACK */}
          <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />

        </Routes>
      </div>

    </div>
  );
}