import { Component } from 'react';
import './Pokedex.css';
import Pokemon from './Pokemon.jsx';

class Pokedex extends Component {
  render() {

    const { pokemons } = this.props;
    const pokemonsHtmlElements = pokemons.map((pokemon) => <Pokemon pokemonInfo={pokemon} />);

    return (
      <section className='container'>
        <h1>Pokedex</h1>
        <div className='display'>
          {pokemonsHtmlElements}
        </div>
      </section>
    );
  }
};

export default Pokedex;
