import React, { useState } from "react";
import "./NumberDials.css";

const NumberDials = () => {
  const [numA, setNumA] = useState(0);
  const numB = 0;
  const numC = 0;
  const numD = 0;

  const winning =
    numA === 9 && numB === 6 && numC === 3 && numD === 1 ? true : false;

  return (
    <div className={"NumberDials"}>
      <h1 className="directions">Guess the 4-digit code</h1>
      <div className="hint">
        <h3>Target Sum: 19</h3>
        <h3>Your Sum: xx</h3>
      </div>
      <div className="numberPlates">
        <div className="numberPlate">
          <button onClick={() => setNumA(numA + 1)}>↑</button>
          <div className="digit">{numA}</div>
          <button onClick={() => console.log("under construction")}>↓</button>
        </div>
      </div>
    </div>
  );
};

export default NumberDials;
