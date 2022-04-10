import "./SecretWord.css";
import { useState } from "react";

const countSimilarLetters = (s1, s2) => {
  let count = 0;
  let range = Math.min(s1.length, s2.length);
  for (let i = 0; i < range; i++) {
    count += s1[i] === s2[i];
  }
  return count;
};

const SecretWord = () => {
  const password = "REACT";
  const [guess, setGuess] = useState("");
  const winning = false;
  const lettersCorrect = 0;

  return (
    <div className={"SecretWord" + (winning ? " winning" : " losing")}>
      <h1 className="directions">Enter the passphrase</h1>
      <div className="hint">
        <h3>You said: xx</h3>
        <h3>Letters correct: {lettersCorrect}</h3>
      </div>
      <div className="textHolder">
        <input
          type="text"
          placeholder={`enter the 5-letter passphrase`}
          onChange={(e) => console.log(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default SecretWord;
