
import PropTypes from "prop-types";

function PokemonCards({pokemon}){
  const {name, type,imgSrc} = pokemon;
  return (
    <div>
      <h1>{name}</h1>
      <div className="card">
      <img className ="avatar" src={imgSrc}/>
      </div>
      <p>Type:{type}</p>
    </div>
  );
};

PokemonCards.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired
}
export default PokemonCards;