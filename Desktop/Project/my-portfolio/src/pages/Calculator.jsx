import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    if (input === "0") setInput(value);
    else setInput(input + value);
  };

  const clear = () => setInput("0");

  const del = () => {
    if (input.length === 1) setInput("0");
    else setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calc-container">
      <div className="calc-card glass">

        <h3>CALCULATOR</h3>

        {/* DISPLAY */}
        <div className="calc-display">
          {input}
        </div>

        {/* BUTTON GRID */}
        <div className="calc-buttons">

          {/* Row 1 */}
          <button onClick={clear} className="func">C</button>
          <button onClick={del} className="func">DEL</button>
          <button onClick={() => handleClick("%")} className="func">%</button>
          <button onClick={() => handleClick("/")} className="op">÷</button>

          {/* Row 2 */}
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")} className="op">×</button>

          {/* Row 3 */}
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")} className="op">−</button>

          {/* Row 4 */}
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")} className="op">+</button>

          {/* Row 5 */}
          <button className="zero" onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button className="equal" onClick={calculate}>=</button>

        </div>
      </div>
    </div>
  );
}