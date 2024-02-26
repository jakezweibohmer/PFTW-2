import Camelids from "./components/Camelid.jsx"

function App() {
const camelidData = [
  {name: "Llamas", desc: "A llama can carry as much as 200 pounds for 12 hours a day, but are not ridden."},
  {name: "Alpacas", desc: "Around 6000 years ago the Andean people started to domesticate alpacas."},
]
  return (
  <div>
    <h2>( Lama glama )</h2>
    <Camelids 
    name={camelidData[0].name} 
    desc={camelidData[0].desc} 
    hex={camelidData[0].hex} 
    />
    <h2>( Vicugna pacos )</h2>
    <Camelids 
    name={camelidData[1].name} 
    desc={camelidData[1].desc} 
    hex={camelidData[1].hex} 
    />
  </div>
  )
}

export default App;