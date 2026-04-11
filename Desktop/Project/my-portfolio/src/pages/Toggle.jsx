import React from "react";
import "./Toggle.css";

export default function Toggle({ theme, setTheme }) {
  const isDark = theme === "midnight";

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "midnight";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // manual override
  };

  return (
    <div className="toggle-container">
      <div className="toggle-card glass">

        <h3>SMART TOGGLE</h3>
        <h2>System Sync ⚡</h2>

        <div
          className={`toggle-switch ${isDark ? "active" : ""}`}
          onClick={handleToggle}
        >
          <div className="toggle-circle"></div>
        </div>

        <p className="status">
          {isDark ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </p>

        <small style={{ opacity: 0.6 }}>
          Auto sync with system theme
        </small>

      </div>
    </div>
  );
}