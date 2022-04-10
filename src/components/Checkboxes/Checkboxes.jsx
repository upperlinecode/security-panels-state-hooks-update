import React, { useState } from "react";
import "./Checkboxes.css";

const Checkboxes = () => {
  const [checks, setChecks] = useState([true, false, true, true]);
  const answerKey = [true, false, true, true];

  const handleClickForBox = (i) => {
    // This first line exists just for debugging purposes.
    console.log("You clicked on box #" + i);
    // Make a copy of the state variable
    const arrayOfChecks = [...checks];
    console.log(arrayOfChecks);
    console.log(answerKey);
    // Do whatever logic you'll need to do to update that box.
    // YOUR
    // CODE
    // HERE
    // Then set the state
  };

  const countTrue = (arrayOfChecks) => {
    // You'll want to write a method that counts the number of "true" in your
    // state's "checks" array, so that you can tell the user what their
    // checkmarks are. Right now there's a placeholder return value: "##".
    return "##";
  };

  const winning = () => {
    // You'll need to write a function that returns false, unless every item
    // in your array matches the answer key. Right now there's a placeholder
    // return value of false.
    return false;
  };

  return (
    <div className={"Checkboxes " + (winning(checks) ? "winning" : "losing")}>
      <h1 className="directions">Check only the correct boxes</h1>
      <div className="hint">
        <h3>Target Sum: 3</h3>
        <h3>Your Sum: {countTrue(checks)}</h3>
      </div>
      <div className="checkGrid">
        <div
          className={"checkbox " + checks[0]}
          onClick={() => handleClickForBox(0)}
        />
        <div
          className={"checkbox " + checks[1]}
          onClick={() => handleClickForBox(1)}
        />
        <div className={"checkbox "} />
        <div className={"checkbox "} />
      </div>
    </div>
  );
};

export default Checkboxes;
