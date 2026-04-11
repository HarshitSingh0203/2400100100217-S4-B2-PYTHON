import React, { useState } from "react";
import "./Palindrome.css";

export default function Palindrome() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isPal, setIsPal] = useState(null);

  const checkPalindrome = () => {
    if (!input) {
      setResult("Enter a value");
      setIsPal(null);
      return;
    }

    const clean = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = clean.split("").reverse().join("");

    if (clean === reversed) {
      setResult("It is a palindrome");
      setIsPal(true);
    } else {
      setResult("Not a palindrome");
      setIsPal(false);
    }
  };

  return (
    <div className="pal-container">
      <div className="pal-card">
        <h3>PALINDROME</h3>
        <h2>Test any value</h2>

        <input
          type="text"
          placeholder="Enter text or number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={checkPalindrome}>
          Check Palindrome
        </button>

        {result && (
          <p
            className={`result ${
              isPal === null
                ? ""
                : isPal
                ? "is-palindrome"
                : "not-palindrome"
            }`}
          >
            {result}
          </p>
        )}
      </div>
    </div>
  );
}