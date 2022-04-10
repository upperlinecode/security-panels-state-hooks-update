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

const SecretWord = ({ password }) => {
  password = password.toUpperCase();
  const [guess, setGuess] = useState("");

  const winning = guess === password ? true : false;

  const numberCorrect = countSimilarLetters(password, guess);

  return (
    <div className={"SecretWord" + (winning ? " winning" : " losing")}>
      <h1 className="directions">Enter the passphrase</h1>
      <div className="hint">
        <h3>You said: {guess}</h3>
        <h3>Letters correct: {numberCorrect}</h3>
      </div>
      <div className="textHolder">
        <input
          type="text"
          placeholder={`enter the ${password.length}-letter passphrase`}
          onChange={(e) => {
            if (e.target.value.length > 5) {
              setGuess("");
            } else {
              setGuess(e.target.value.toUpperCase());
            }
          }}
          value={guess}
        ></input>
      </div>
    </div>
  );
};

export default SecretWord;
