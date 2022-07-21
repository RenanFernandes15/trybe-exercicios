import './App.css';
import { Component } from 'react';
import pokemons from './data.js';
import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return <Pokedex pokemons={ pokemons } />
  }
}

export default App;
