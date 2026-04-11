import React, { useState } from "react";
import "./Auth.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const { name, email, password, confirm } = form;

    if (!name || !email || !password || !confirm) {
      setError("All fields required ❌");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match ❌");
      return;
    }

    // 🔥 Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ❌ Check if user exists
    const exists = users.find((u) => u.email === email);
    if (exists) {
      setError("User already exists ❌");
      return;
    }

    // ✅ Save new user
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    setError("");
    alert("Registered Successfully 🎉");
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass">
        <h3>REGISTER</h3>
        <h2>Create Account 🚀</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="confirm" type="password" placeholder="Confirm Password" onChange={handleChange} />

        <button onClick={handleRegister}>Register</button>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}