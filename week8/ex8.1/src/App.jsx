import "./App.css";
import { useState } from "react";
import { camelidPics } from "./camelids";

function App() {
  const [index, setIndex] = useState(0);

  const handleAlpacaClick = () => {
    setIndex(0);
  };

  const handleLlamaClick = () => {
    setIndex(1);
  };

  const camelids = camelidPics[index];

  return (
    <>
      <h1>Favorite Camelid</h1>
      <div>
        <img src={camelids.image} alt={camelids.alt} />
      </div>
      <p>Click the button to view your favorite Camelid!</p>

      <div>
        <button onClick={handleAlpacaClick}>Alpaca</button>
        <button onClick={handleLlamaClick}>Llama</button>
      </div>
    </>
  );
}

export default App;
