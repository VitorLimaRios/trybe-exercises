import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import './App.css';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="Pokedex">
        {pokemons.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex;
