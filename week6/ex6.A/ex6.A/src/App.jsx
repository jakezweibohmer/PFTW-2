import Header from "./Header"
function App() {
  const hello = true;
  const llamas = true;
  const llamaFacts = [
    "llamas can live for 20 years", "llamas are very social", 
    "llamas can grow to 6 feet tall", "llamas can hum", 
    "llamas can spit up to 10 feet", "llamas are used as therapy animals"
    ];
  

  return (
    <div>
      <Header></Header>
      <h1>Llama Facts</h1>

      {llamaFacts.map((item) => {
        return (<div>{item}</div>)
      })}

      <h2>
        {hello && (<div>Llamas are amazing animals!</div>)}
        {llamas ? (<div>Everyone should own a llama.</div>) : 
        (<div>My wife says no!</div>)}
      </h2>
    </div>
  )
}
export default App
