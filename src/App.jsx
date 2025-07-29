import { useState } from "react";
import "./App.css";
import Heads from '../src/assets/heads.svg';
import Tails from '../src/assets/tails.svg';
import Shadow from '../src/assets/shadow.svg';

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
          <img src={Heads} alt="Heads" />
        ) : (
          <img src={Tails} alt="Tails" />
        )}
      </div>
      <img src={Shadow} alt="Coin Shadow" className="shadow" />
    </div>
  );
}

export default App;
