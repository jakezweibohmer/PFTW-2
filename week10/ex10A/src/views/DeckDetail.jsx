import propTypes from "prop-types";
import { useParams, Link } from "react-router-dom";

export function DeckDetail({ data }) {
  const { id } = useParams();
  console.log("params", id);
  const selectedDeck = data.find((deck) => deck.id === id);
  console.log("deck", selectedDeck);
  return (
    <div className="detailsPage">
      <Link to="../">Return to Deck List</Link>
      <h1>{selectedDeck.name}</h1>
      <p className="detailsText">{selectedDeck.manufacturer}</p>
      <img
        className="detailsPageimg"
        src={selectedDeck.image}
        alt={selectedDeck.name}
      />
      <p className="detailsText">{selectedDeck.description}</p>
      {selectedDeck.ownIt && <p className="detailsText">I own this one!</p>}
    </div>
  );
}
DeckDetail.propTypes = {
  data: propTypes.array,
};
