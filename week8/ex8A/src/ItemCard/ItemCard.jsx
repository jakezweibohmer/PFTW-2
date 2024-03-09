import PropTypes from "prop-types";
import "./ItemCard.css";
import trophy from "../assets/trophy_icon.svg";
import trash from "../assets/trash_icon.svg";
import copy from "../assets/copy_icon.svg";
export default function ItemCard({
  name,
  manufacturer,
  released,
  description,
  image,
  ownIt,
  id,
  deleteFn,
  duplicateFn,
}) {
  return (
    <div className="playingCards">
      {ownIt && (
        <div className="ownIt">
          <img src={trophy} title="I own this one" />
        </div>
      )}
      <div className="cardImg">
        <img src={image} alt={name} />
      </div>
      <div className="cardTitle">{name}</div>
      <div className="actions">
        <a
          href="#"
          onClick={(evt) => {
            evt.preventDefault();
            deleteFn(id);
          }}
        >
          <img src={trash} />
        </a>
        <a
          href="#"
          onClick={(evt) => {
            evt.preventDefault();
            duplicateFn(id);
          }}
        >
          <img src={copy} />
        </a>
      </div>
      <div className="cardManufacturer">{manufacturer}</div>
      <div className="cardReleased">{released}</div>
      <div className="cardDescription">{description}</div>
    </div>
  );
}
ItemCard.PropTypes = {
  name: PropTypes.string,
  manufacturer: PropTypes.string,
  released: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  ownIt: PropTypes.bool,
  id: PropTypes.string,
  duplicateFn: PropTypes.func,
  deleteFn: PropTypes.func,
};
