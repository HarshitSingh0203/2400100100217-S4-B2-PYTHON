import React from "react";
import "./Theme.css";

export default function Theme({ theme, setTheme }) {

  const themes = ["dark", "midnight", "ocean", "pastel", "sunset", "forest", "neon", "sunrise"];

  return (
    <div className="theme-container">
      <div className="theme-card glass">

        <h3>THEME</h3>
        <h2>Switch the app atmosphere</h2>

        <div className="active-theme">
          <p>Active theme</p>
          <h4>{theme.toUpperCase()}</h4>
        </div>

        <div className="theme-buttons">
          {themes.map((t) => (
            <button
              key={t}
              className={theme === t ? "active-btn" : ""}
              onClick={() => setTheme(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}