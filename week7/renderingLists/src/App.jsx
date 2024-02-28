function App () {
  const superHeroes = [
    {name: "Superman", colors: ["blue", "red"]},
    {name: "Batman", colors: ["black", "yellow"]},
    {name: "Spider-Man", colors: ["red", "blue"]},
    {name: "Wonder Woman", colors: ["red", "blue", "gold"]},
    {name: "Iron Man", colors: ["red", "gold"]},
    {name: "Captain America", colors: ["blue", "red", "white"]},
    {name: "Thor", colors: ["red", "silver", "black"]},
    {name: "Hulk", colors: ["green"]},
    {name: "Black Widow", colors: ["black"]},
    {name: "Wolverine", colors: ["yellow", "blue"]}
  ];


  return (
    <div>
      <h1>Rendering Lists</h1>
      {superHeroes.map((hero) => {
        return (
          <div key={hero.name}>
            <h3>{hero.name}</h3>
            <ul>
              {hero.colors.map((color) =>{
                return (<li key={color} style={{backgroundColor: color}}/>)
              })}
            </ul>
          </div>
        )
      })

      }

    </div>
  )
}

export default App;