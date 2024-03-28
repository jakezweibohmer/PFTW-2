import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ItemCard.css";
import trophy from "../assets/trophy_icon.svg";
import trash from "../assets/trash_icon.svg";
import copy from "../assets/copy_icon.svg";

export default function ItemCard({
  name,
  manufacturer,
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
      <div className="cardTitle">
        <Link to={`${id}`}>{name}</Link>
      </div>
      <div className="cardManufacturer">{manufacturer}</div>
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
      <div className="cardDescription">{description}</div>
    </div>
  );
}
ItemCard.propTypes = {
  name: propTypes.string,
  manufacturer: propTypes.string,
  description: propTypes.string,
  image: propTypes.string,
  ownIt: propTypes.bool,
  id: propTypes.string,
  duplicateFn: propTypes.func,
  deleteFn: propTypes.func,
};
