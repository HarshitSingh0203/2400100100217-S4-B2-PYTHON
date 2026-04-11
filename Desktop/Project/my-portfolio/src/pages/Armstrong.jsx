import React, { useState } from "react";
import "./Armstrong.css";

export default function Armstrong() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    const n = num.toString();
    const power = n.length;

    let sum = 0;

    for (let i = 0; i < n.length; i++) {
      sum += Math.pow(parseInt(n[i]), power);
    }

    if (sum === parseInt(num)) {
      setResult("Armstrong Number ✅");
    } else {
      setResult("Not Armstrong ❌");
    }
  };

  return (
    <div className="arm-container">
      <div className="arm-card glass">

        <h3>ARMSTRONG</h3>
        <h2>Check Armstrong 🔢</h2>

        <input
          type="number"
          placeholder="Enter number..."
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />

        <button onClick={checkArmstrong}>Check</button>

        {result && (
          <div
            className={`result ${
              result.includes("✅")
                ? "is-armstrong"
                : "not-armstrong"
            }`}
          >
            {result}
          </div>
        )}

      </div>
    </div>
  );
}