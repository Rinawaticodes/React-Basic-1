import PokemonCards from './components/PokemonCards'
import './App.css'
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App(){
  const[pokemonIndex, setIndex] = useState(0);

  const handleClick1 = () => {
    setIndex (pokemonIndex - 1 );
  }
  const handleClick2 = () =>{
    setIndex (pokemonIndex +1 );
  }
  
  return (
    <div>
      <PokemonCards pokemon={pokemonList[pokemonIndex]}/>
        <div>
          <button onClick={handleClick1}>Back</button>
          <button onClick={handleClick2}>Next</button>
        </div>
    </div>
  )
};
export default App;

