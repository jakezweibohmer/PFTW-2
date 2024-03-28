import { useState } from "react";
import { nanoid } from "nanoid";
import Masthead from "../Masthead/Masthead";
import ItemCard from "../ItemCard/ItemCard";
import { NewCardForm } from "../NewCardForm/NewCardForm";
import deckData from "../assets/deck-data.json";

export function Home() {
  const [decks, setDecks] = useState(deckData);

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
    </div>
  );
}
