import { useState } from "react";
import React from "react";

import "./App.css"

export default function App() { const [counteure, setCounteure] = useState(0);
  const Diminuer = () => {
    if (counteure >0) {
      setCounteure(count => count - 1);
    }
  };
  const Augmenter = () => {
    setCounteure(count => count + 1);
  };
  const Reset = () => {
    setCounter(0)
  }
  return (
    <div className="counter">
    <h1>counteure</h1>
    <span className="counteure__output">{counter}</span>
    <div className="btn_container">
      <button className="control_bouton" onClick={Augmenter}>+</button>
      <button className="reset" onClick={Reset}>Reset</button>
      <button className="controle_bouton" onClick={Diminuer}>-</button>
    </div>
  </div>
  )

}


