
import React from "react";

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
export default PokemonCards;