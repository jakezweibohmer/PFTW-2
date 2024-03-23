import { useState } from "react";

import "./App.css";
import Masthead from "./Masthead/Masthead";
import ItemCard from "./ItemCard/ItemCard";
import { NewCardForm } from "./NewCardForm/NewCardForm";
import { nanoid } from "nanoid";

function App() {
  const [decks, setDecks] = useState([
    {
      name: "Notorious BIG",
      manufacturer: "By Theory 11",
      released: "2023",
      description:
        "Straight out of Brooklyn, New York - Notorious B.I.G. Playing Cards are a tribute to one of the greatest rappers of all time. Crafted hand in hand with The Notorious B.I.G. Estate, every aspect of the design was meticulously chosen to reflect the life and legacy of the legendary East Coast MC.",
      image: "./NotoriousBIG.jpg",
      ownIt: true,
      id: "1",
    },

    {
      name: "Outkast",
      manufacturer: "By Theory 11",
      released: "2023",
      description:
        "For the first time, Theory11 made a card box that is fully encased with red velvet and embellished with luxurious gold foil - inspired directly by their track “Red Velvet” and the gold chains that André 3000 and Big Boi would wear during the unforgettable Stankonia era.",
      image: "./Outkast.jpg",
      ownIt: true,
      id: "2",
    },

    {
      name: "Elvis",
      manufacturer: "By Theory 11",
      released: "2022",
      description:
        "The box, the back design, and all card faces have been specially crafted to pay tribute to the King of Rock & Roll. From his early days in Tupelo, Mississippi to becoming a worldwide phenomenon, take the stage with Elvis each time the cards are held in your hand and brought out for play.",
      image: "./Elvis.jpg",
      ownIt: true,
      id: "3",
    },

    {
      name: "Dune",
      manufacturer: "By Theory 11",
      released: "2022",
      description:
        "I must not fear. Premium playing cards by theory11 bringing all of your favorite characters from Dune to life. Set foot on the harsh desert planet Arrakis and protect the spice from falling into the wrong hands! Follow the journey of Paul Atreides and partake in his mission to ultimately save humanity.",
      image: "./Dune.jpg",
      ownIt: true,
      id: "4",
    },

    {
      name: "The Successor",
      manufacturer: "By The Gentleman Wake",
      released: "2022",
      description:
        "The Successor represents two years of unwavering effort to create the MOST LUXURIOUS playing cards ever made. Evoking art from 15th century cathedrals, canvases and manuscripts, The Successor depicts the trials and triumphs of a line of royal succession.",
      image: "./Successor.jpg",
      ownIt: true,
      id: "5",
    },
  ]);

  function deleteCard(id) {
    console.log("delete me", id);
    const updatedArray = decks.filter((playingCards) => {
      return playingCards.id !== id; //will skip item with matching id
    });
    setDecks(updatedArray);
  }
  function duplicateCard(id) {
    console.log("duplicate me", id);
    const matchingDeck = decks.find((playingCards) => {
      return playingCards.id === id;
    });
    const updatedDeck = { ...matchingDeck, id: nanoid() };
    setDecks([...decks, updatedDeck]);
  }

  function addDeck(newDeck) {
    const deckWithId = {
      ...newDeck,
      id: nanoid(),
    };
    setDecks([...decks, deckWithId]);
  }

  return (
    <div className="page">
      {/* Masthead goes here */}
      <Masthead />
      <div className="collection">
        {/* deck map goes here */}
        {/* use ItemCard component in loop */}
        {decks.map((playingCards) => {
          return (
            <ItemCard
              key={playingCards.id}
              deleteFn={deleteCard}
              duplicateFn={duplicateCard}
              {...playingCards}
            />
          );
        })}
      </div>
      <hr />
      <NewCardForm addDeckFn={addDeck} />
    </div>
  );
}

export default App;
