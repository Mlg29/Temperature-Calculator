import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [temparature, setTemperature] = useState(10);
  const [color, setColor] = useState("cool");

  const increaseTemp = () => {
    const newTemp = temparature + 1;
    if (newTemp > 30) return;
    if (newTemp > 15) {
      setColor("danger");
    }
    return setTemperature(newTemp);
  };

  const decreaseTemp = () => {
    const newTemp = temparature - 1;
    if (newTemp < 0) return;
    if (newTemp <= 15) {
      setColor("cool");
    }
    return setTemperature(newTemp);
  };
  return (
    <div className="App">
      <h1>Simple Temparature Calculator with React</h1>
      <div className="temp">
        <div className="temp-value-container">
          <div className={`temp-value ${color}`}>{temparature}&deg;C</div>
        </div>

        <div className="btn-div">
          <button onClick={increaseTemp}>+</button>
          <button onClick={decreaseTemp}>-</button>
        </div>
      </div>
    </div>
  );
}
