import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // QUICK BUTTONS
  const addQuick = (num) => setCount(count + num);
  const subQuick = (num) => setCount(count - num);

  // INPUT ACTIONS
  const addValue = () => {
    const num = Number(value);
    if (!isNaN(num)) {
      setCount(count + num);
      setValue("");
    }
  };

  const subValue = () => {
    const num = Number(value);
    if (!isNaN(num)) {
      setCount(count - num);
      setValue("");
    }
  };

  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <div className="counter-card glass">

        <h3>COUNTER</h3>
        <h2>Track live count</h2>

        {/* DISPLAY */}
        <div className="count-display">
          <p>Current count</p>
          <h1>{count}</h1>
        </div>

        {/* QUICK BUTTONS */}
        <div className="quick-buttons">
          <button onClick={() => addQuick(1)}>+1</button>
          <button onClick={() => subQuick(1)}>-1</button>
          <button onClick={() => addQuick(5)}>+5</button>
          <button onClick={() => addQuick(10)}>+10</button>
        </div>

        {/* INPUT */}
        <input
          type="number"
          placeholder="Enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="counter-input"
        />

        {/* ACTION BUTTONS */}
        <div className="action-buttons">
          <button className="add-btn" onClick={addValue}>
            Add
          </button>
          <button className="sub-btn" onClick={subValue}>
            Subtract
          </button>
        </div>

        {/* RESET */}
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>

      </div>
    </div>
  );
}