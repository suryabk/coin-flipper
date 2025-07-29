import { useState } from "react";
import "./App.css";

function App() {
  const [flip, setFlip] = useState('Heads');

  const flipCoin = () => {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    setFlip(result);
    document.getElementById('result').textContent = result;
  };

  return (
    <>
      <h1 className="stroke">Flip the coin</h1>
      <p>Press the coin or the button to flip the coin</p>
      <CoinComponent flip={flip} />
      <div className="result">
        <p>{flip}</p>
      </div>
      <button id="flipBtn" type="button" onClick={flipCoin} aria-label="Flip the coin randomly">
        RANDOM
      </button>
    </>
  );
}

function CoinComponent(result) {
  return (
    <div className="container">
      <div className="coin">
        {result.flip === 'Heads' ? (
          <img src="/src/assets/heads.svg" alt="Heads" />
        ) : (
          <img src="/src/assets/tails.svg" alt="Tails" />
        )}
      </div>
      <img src="/src/assets/shadow.svg" className="shadow" />
    </div>
  );
}

export default App;
