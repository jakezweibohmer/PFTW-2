import "./App.css";
import { CardsRow } from "./CardsRow";

function App() {
  const cardDecks = [
    {
      name: "Notorious BIG",
      manufacturer: "Theory 11",
      released: "2023",
      description:
        "Straight out of Brooklyn, New York - Notorious B.I.G. Playing Cards are a tribute to one of the greatest rappers of all time. Crafted hand in hand with The Notorious B.I.G. Estate, every aspect of the design was meticulously chosen to reflect the life and legacy of the legendary East Coast MC.",
      image: "./NotoriousBIG.jpg",
    },

    {
      name: "Outkast",
      manufacturer: "Theory11",
      released: "2023",
      description:
        "For the first time, Theory11 made a card box that is fully encased with red velvet and embellished with luxurious gold foil - inspired directly by their track “Red Velvet” and the gold chains that André 3000 and Big Boi would wear during the unforgettable Stankonia era.",
      image: "./Outkast.jpg",
    },

    {
      name: "Elvis",
      manufacturer: "Theory11",
      released: "2022",
      description:
        "The box, the back design, and all card faces have been specially crafted to pay tribute to the King of Rock & Roll. From his early days in Tupelo, Mississippi to becoming a worldwide phenomenon, take the stage with Elvis each time the cards are held in your hand and brought out for play.",
      image: "./Elvis.jpg",
    },

    {
      name: "Dune",
      manufacturer: "Theory11",
      released: "2022",
      description:
        "I must not fear. Premium playing cards by theory11 bringing all of your favorite characters from Dune to life. Set foot on the harsh desert planet Arrakis and protect the spice from falling into the wrong hands! Follow the journey of Paul Atreides and partake in his mission to ultimately save humanity.",
      image: "./Dune.jpg",
    },

    {
      name: "The Successor",
      manufacturer: "The Gentleman Wake",
      released: "2022",
      description:
        "The Successor represents two years of unwavering effort to create the MOST LUXURIOUS playing cards ever made. Evoking art from 15th century cathedrals, canvases and manuscripts, The Successor depicts the trials and triumphs of a line of royal succession.",
      image: "./Successor.jpg",
    },
  ];

  return (
    <div>
      <h1>Playing Cards</h1>
      <table className="decks-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Deck Name</th>
            <th>Manufacturer</th>
            <th>Release Year</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {cardDecks.map((decks, index) => {
            return (
              <CardsRow
                key={decks}
                odd={index % 2 === 0}
                image={decks.image}
                name={decks.name}
                manufacturer={decks.manufacturer}
                released={decks.released}
                description={decks.description}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
