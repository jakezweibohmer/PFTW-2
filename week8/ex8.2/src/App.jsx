/* eslint-disable no-undef */
import { useState } from "react";

import "./App.css";
import AnimalsComponent from "./AnimalsComponent";

function App() {
  const [headline, setHeadline] = useState("Jake's Pet Farm");
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
      <h1>{`${headline}`}</h1>
      <h2>Focus on the ones you love. Delete the ones you despise!</h2>
      {animals.map((myAnimal) => {
        return (
          <AnimalsComponent
            key={myAnimal}
            animalName={myAnimal}
            deleteFn={deleteAnimal}
            focusFn={focusAnimal}
          />
        );
      })}
    </>
  );
}

export default App;
