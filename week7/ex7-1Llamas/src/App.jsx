import Camelids from "./components/Camelid.jsx"

function App() {
const camelidData = [
  {name: "Llamas", 
  desc: "A llama can carry as much as 200 pounds for 12 hours a day, but are not ridden.", 
  image: "./images/Llamas_small.jpg"},
  {name: "Alpacas", desc: "Around 6000 years ago the Andean people started to domesticate alpacas.",
  image: "./images/Alpacas_small.jpg"},
]
  return (
  <div>
    <h2><a href="https://www.thoughtco.com/fun-facts-about-llamas-3880940">( Lama glama )</a></h2>
    <Camelids 
    name={camelidData[0].name} 
    desc={camelidData[0].desc} 
    image={camelidData[0].image} 
    />
    <h2><a href="https://www.chillavalleyalpacas.co.uk/38-fascinating-facts-about-alpacas/">( Vicugna pacos )</a></h2>
    <Camelids 
    name={camelidData[1].name} 
    desc={camelidData[1].desc} 
    image={camelidData[1].image} 
    />
  </div>
  )
}

export default App;