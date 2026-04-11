import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div
      className="glass"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        maxWidth: "1200px",
        width: "100%",
        margin: "15px auto",
        padding: "20px 30px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* LEFT */}
      <div>
        <h2>⚡ PortFolio</h2>
        <small style={{ opacity: 0.6 }}>Built with React</small>
      </div>

      {/* RIGHT */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/palindrome">Palindrome</Link>
        <Link to="/prime">Prime</Link>
        <Link to="/theme">Theme</Link>
        <Link to="/toggle">Toggle</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/map">Map</Link>
        <Link to="/developer">Developer</Link>

        {/* 🔥 USER SECTION */}
        {user && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>👤 {user.name}</span>

            <button
              style={{
                padding: "6px 12px",
                borderRadius: "10px",
                border: "none",
                background: "#38bdf8",
                color: "white",
                cursor: "pointer"
              }}
              onClick={() => {
                localStorage.removeItem("currentUser");
                window.location.reload();
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}