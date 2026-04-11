export default function Card({ title }) {
  return (
    <div
      className="glass card"
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        padding: "25px",
        borderRadius: "20px",
        color: "white",
        cursor: "pointer",
        textAlign: "center",
        transition: "0.3s",
        boxShadow: "0 5px 20px rgba(0,0,0,0.5)"
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}