import { useState } from "react";
import "./App.css";
import alpaca from "./assets/Alpacas_small.jpg";
import llama from "./assets/Llamas_small.jpg";
import Animal from "./Animal";

function App() {
  const [pet, setPet] = useState(alpaca);
  function handleClick(evt) {
    evt.preventDefault();
  }

  return (
    <>
      <div>
        <Animal url={pet} />
      </div>
      <h1>Animals</h1>
      <div className="card">
        <button
          onClick={() => {
            setPet(alpaca);
          }}
        >
          Alpaca
        </button>
        <button
          onClick={() => {
            setPet(llama);
          }}
        >
          llama
        </button>
      </div>
    </>
  );
}

export default App;
