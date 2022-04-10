import React, { useState } from "react";
import "./NumberDials.css";

const NumberDials = () => {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [numC, setNumC] = useState(0);
  const [numD, setNumD] = useState(0);

  const winning =
    numA === 9 && numB === 6 && numC === 3 && numD === 1 ? true : false;

  return (
    <div className={"NumberDials" + (winning ? " winning" : " losing")}>
      <h1 className="directions">Guess the 4-digit code</h1>
      <div className="hint">
        <h3>Target Sum: 19</h3>
        <h3>Your Sum: {numA + numB + numC + numD}</h3>
      </div>
      <div className="hint">
        <h3>Target Product: 162</h3>
        <h3>Your Product: {numA * numB * numC * numD}</h3>
      </div>
      <div className="numberPlates">
        <div className="numberPlate">
          <button onClick={() => setNumA((numA + 1) % 10)}>↑</button>
          <div className="digit">{numA}</div>
          <button onClick={() => setNumA((numA + 9) % 10)}>↓</button>
        </div>
        <div className="numberPlate">
          <button onClick={() => setNumB((numB + 1) % 10)}>↑</button>
          <div className="digit">{numB}</div>
          <button onClick={() => setNumB((numB + 9) % 10)}>↓</button>
        </div>
        <div className="numberPlate">
          <button onClick={() => setNumC((numC + 1) % 10)}>↑</button>
          <div className="digit">{numC}</div>
          <button onClick={() => setNumC((numC + 9) % 10)}>↓</button>
        </div>
        <div className="numberPlate">
          <button onClick={() => setNumD((numD + 1) % 10)}>↑</button>
          <div className="digit">{numD}</div>
          <button onClick={() => setNumA((numD + 9) % 10)}>↓</button>
        </div>
      </div>
    </div>
  );
};

export default NumberDials;
