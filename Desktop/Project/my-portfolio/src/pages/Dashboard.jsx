import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const projects = [
    { title: "Counter", desc: "Track live count", path: "/counter", icon: "C" },
    { title: "Calculator", desc: "Perform calculations", path: "/calculator", icon: "C" },
    { title: "Login", desc: "Authentication form", path: "/login", icon: "L" },
    { title: "Register", desc: "Register user", path: "/register", icon: "R" },
    { title: "Palindrome", desc: "Check palindrome", path: "/palindrome", icon: "P" },
    { title: "Armstrong", desc: "Check Armstrong number", path: "/armstrong", icon: "A" },
    { title: "Prime Checker", desc: "Check prime number instantly", path: "/prime", icon: "P" },
    { title: "Theme", desc: "Dark/light theme", path: "/theme", icon: "T" },
    { title: "Toggle", desc: "ON/OFF UI switch", path: "/toggle", icon: "T" },
    { title: "Weather", desc: "Search weather", path: "/weather", icon: "W" },
    { title: "Map", desc: "View location", path: "/map", icon: "M" },
    { title: "Developer", desc: "About the developer", path: "/developer", icon: "D" }
  ];

  return (
    <div
      className="glass"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px",
        borderRadius: "30px"
      }}
    >
      <h2 style={{ letterSpacing: "3px", opacity: 0.8 }}>
        COMPONENTS
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "25px",
          marginTop: "20px"
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="glass card"
            onClick={() => navigate(p.path)}
            style={{
              padding: "25px",
              borderRadius: "20px",
              cursor: "pointer"
            }}
          >
            <div
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "12px",
                fontWeight: "bold"
              }}
            >
              {p.icon}
            </div>

            <h3>{p.title}</h3>
            <p style={{ opacity: 0.6 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}