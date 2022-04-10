import React, { useState } from "react";
import "./ColorCaptcha.css";

const ColorCaptcha = () => {
  const [red, setRed] = useState(0);
  // This is the RGB value for pink - the background color of the component.
  const answerColor = "rgb(255, 192, 203)";

  const winning = () => {
    // Write code here that returns true if your color matches the answer
    // color, and returns false if it doesn't. There's a placeholder return
    // already here.
    return false;
  };

  // Repackage your state variables as a string that we can use for CSS.
  const yourColor = `rgb(${red}, 0, 0)`;

  return (
    <div className={"ColorCaptcha " + (winning() ? "winning" : "losing")}>
      <h1 className="directions">Match the background color perfectly</h1>
      <div className="hint">
        <h3>Target Total: 650</h3>
        <h3>Your Total: {red}</h3>
      </div>
      <div className="colorBlock">
        <div className="colorSliders">
          <input
            type="range"
            min="1"
            max="255"
            defaultValue={red}
            onChange={(e) => {
              setRed(e.target.value);
            }}
          />
        </div>
        <div
          className="colorDisplay"
          style={{ backgroundColor: yourColor }}
        ></div>
      </div>
    </div>
  );
};

export default ColorCaptcha;
