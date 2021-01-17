import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div className="Pokemon">
        <h6>{pokemon.name}</h6>
        <h6>{pokemon.type}</h6>
        <h6>Average weight: {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</h6>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
    )
  }
}

Pokemon.proptype = {
  pokemon: PropTypes.exact({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.exact({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default Pokemon;
