import PropTypes from "prop-types";

function PokemonCards({ pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc == null ? (
        <p>???</p>
      ) : (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCards.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCards;