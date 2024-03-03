/* eslint-disable react/prop-types */
import "./CardsRow.css";
export function CardsRow({
  image,
  name,
  manufacturer,
  released,
  description,
  odd,
}) {
  return (
    <tr className={odd && "odd"}>
      <td>
        <img src={image} alt={name} />
      </td>
      <td style={{ fontWeight: 900, color: "#f3d645" }}>{name}</td>
      <td>{manufacturer}</td>
      <td>{released}</td>
      <td>{description}</td>
    </tr>
  );
}
