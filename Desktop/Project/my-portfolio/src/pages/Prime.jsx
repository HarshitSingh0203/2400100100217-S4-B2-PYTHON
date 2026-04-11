import React, { useState } from "react";
import "./Prime.css";

export default function Prime() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const isPrime = (n) => {
    n = Number(n);

    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const checkPrime = () => {
    if (number === "") {
      setResult("Enter a number");
      return;
    }

    const num = Number(number);

    if (isPrime(num)) {
      setResult(`${num} is a prime number`);
    } else {
      setResult(`${num} is not a prime number`);
    }
  };

  return (
    <div className="prime-container">
      <div className="prime-card">
        <h3>PRIME CHECKER</h3>
        <h2>Test any number</h2>

        <input
          type="number"
          placeholder="Enter number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button onClick={checkPrime}>
          Check Prime
        </button>

        {result && (
          <p
            className={`result ${
              result.includes("not") ? "not-prime" : "prime"
            }`}
          >
            {result}
          </p>
        )}
      </div>
    </div>
  );
}