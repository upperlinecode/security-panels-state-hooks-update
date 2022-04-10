import React from "react";
import "./App.css";
import NumberDials from "./components/NumberDials";
import Navbar from "./components/Navbar";
import Checkboxes from "./components/Checkboxes";
import ColorCaptcha from "./components/ColorCaptcha";
import SecretWord from "./components/SecretWord/SecretWord";
// import SlidingPuzzle from './components/SlidingPuzzle';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <SecretWord />
      <NumberDials />
      <Checkboxes />
      <ColorCaptcha />
    </div>
  );
};

export default App;
