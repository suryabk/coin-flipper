import { useState } from "react";
import "./App.css";
import Coin from "./component/Coin";

function App() {
  const [flip, setFlip] = useState("Heads");

  const flipCoin = () => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    setFlip(result);
  };

  return (
    <>
      <h1 className="stroke">Flip the coin</h1>
      <p>Press the coin or the button to flip the coin</p>
      <Coin flip={flip} />
      <div className="result">
        <p style={{ display: flip === "" ? "none" : "block" }}>{flip}</p>
      </div>
      <button
        id="flipBtn"
        type="button"
        onClick={flipCoin}
        aria-label="Flip the coin randomly"
      >
        RANDOM
      </button>
    </>
  );
}

export default App;
