import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import dog from "./assets/dog.jpg";
import cat from "./assets/cat.webp";
import Animal from "./Animal";

function App() {
  const [pet, setPet] = useState(dog);

  return (
    <>
      <div>
        <Animal url={pet} />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>dog</button>
        <button>cat</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
