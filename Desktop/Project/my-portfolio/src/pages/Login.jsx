import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login({ setUser }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) =>
        u.email === form.email && u.password === form.password
    );

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      setUser(foundUser); // 🔥 update App state
      navigate("/"); // go to dashboard
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card glass">

        <h2>LOGIN</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        {/* ❌ ERROR */}
        {error && <p className="error">{error}</p>}

        {/* 🔗 REGISTER LINK */}
        <p style={{ marginTop: "10px", opacity: 0.7 }}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>

      </div>
    </div>
  );
}