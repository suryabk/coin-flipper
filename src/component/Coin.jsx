import Heads from "../assets/heads.svg";
import Tails from "../assets/tails.svg";
import Shadow from "../assets/shadow.svg";
export default function Coin({ flip: result }) {
  return (
    <div className="container">
      <div className="coin">
        {result.flip === "Heads" ? (
          <img src={Heads} alt="Heads" />
        ) : (
          <img src={Tails} alt="Tails" />
        )}
      </div>
      <img src={Shadow} alt="Coin Shadow" className="shadow" />
    </div>
  );
}
