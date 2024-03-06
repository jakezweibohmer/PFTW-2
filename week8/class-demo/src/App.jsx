import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import dog from "./Alpacas_small.jpg";
import cat from "./Llamas_small.jpg";
import Animal from "./Animal";

function App() {
  const [pet, setPet] = useState(dog);
  function handleClick(evt) {
    evt.preventDefault();
  }

  return (
    <>
      <div>
        <Animal url={pet} />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick} id="dogLink">
          dog
        </button>
        <button
          onClick={() => {
            setPet(cat);
          }}
        >
          cat
        </button>
      </div>
    </>
  );
}

export default App;
