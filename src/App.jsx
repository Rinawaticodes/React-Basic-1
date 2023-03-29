import PokemonCards from './components/PokemonCards'
import './App.css'

function App(){
  const pokemonList = [
    {
        name: "Bulbasaur",
        type: "Plante/Poison",
        imgSrc: "https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png",
    },
    {
        name: "meow",
       },
]
const pokemon = pokemonList[0]
  return <PokemonCards pokemon = {pokemon}/>
};
export default App;

