/* eslint-disable no-undef */
import { useState } from "react";

import "./App.css";
import AnimalsComponent from "./AnimalsComponent";

function App() {
  const [headline, setHeadline] = useState("List of Animals");
  const [animals, setAnimals] = useState([
    "Dog",
    "Cat",
    "Goat",
    "Sheep",
    "Pig",
    "Cow",
    "Chicken",
    "Parrot",
    "Fish",
  ]);
  function deleteAnimal(animalName) {
    const updatedArray = animals.filter((animal) => {
      return animal !== animalName;
    });
    setAnimals(updatedArray);
  }
  function focusAnimal(animalName) {
    setHeadline(animalName);
  }

  return (
    <>
      <h1>{`${headline} is the focus`}</h1>
      {animals.map((loopState) => {
        return (
          <AnimalsComponent
            key={animals}
            animalName={loopState}
            deleteFn={deleteAnimal}
            focusFn={focusAnimal}
          />
        );
      })}
    </>
  );
}

export default App;
