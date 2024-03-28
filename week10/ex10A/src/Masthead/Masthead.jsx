import "./Masthead.css";
import mastheadImg from "../assets/masthead.jpg";
export default function Masthead() {
  return (
    <div className="masthead">
      <img src={mastheadImg} alt="Jake's Plaing Cards" />
      <h1>Jake&apos;s Playing Cards</h1>
    </div>
  );
}
