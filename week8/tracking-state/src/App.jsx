import "./App.css";
import { useState } from "react";

function App() {
  const [emotion, setEmotion] = useState("whatever");

  return (
    <>
      Hi!
      <button
        onClick={() => {
          setEmotion("dude");
        }}
      >
        Set to dude
      </button>
      {emotion}
    </>
  );
}

export default App;
