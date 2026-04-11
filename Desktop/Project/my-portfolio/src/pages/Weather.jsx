import React, { useState, useEffect } from "react";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "288eba7319926dab9e230cb8901f4d80";

  // 📍 AUTO LOCATION
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
        fetchData(url);
      },
      () => setError("Location permission denied. Search manually! 📍")
    );
  }, []);

  // 🔍 SHARED FETCH FUNCTION
  const fetchData = async (url) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(url);
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setData(result);
    } catch (err) {
      setError(err.message + " ❌");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeather = () => {
    if (!city.trim()) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    fetchData(url);
  };

  return (
    <div className="weather-page-container">
      <div className="weather-card glass">
        <h3>WEATHER</h3>
        <h2>Live Weather 🌤️</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
          />
          <button onClick={fetchWeather} disabled={loading}>
            {loading ? "..." : "Search"}
          </button>
        </div>

        {error && <p className="error-msg">{error}</p>}

        {data && (
          <div className="weather-result fade-in">
            <h2>{data.name}, {data.sys.country}</h2>
            <p className="temp">{Math.round(data.main.temp)}°C</p>
            <p className="desc">{data.weather[0].description.toUpperCase()}</p>

            <div className="extra-info">
              <span>💧 {data.main.humidity}% Humidity</span>
              <span>🌬️ {data.wind.speed} m/s Wind</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}