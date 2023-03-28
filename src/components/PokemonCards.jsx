const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const pokemon = pokemonList[1];

function PokemonCards() {
    return (
    <figure>
      {pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt="" />}
      <figcaption>{pokemon.name}</figcaption>
    </figure>);
  }
  
  export default PokemonCards;
