import React from "react";
import "./Maps.css";

export default function Maps() {
  return (
    <div className="map-container">
      <div className="map-card glass">

        <h3>MAP</h3>
        <h2>Explore Location 📍</h2>

        <div className="map-frame">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Delhi&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}