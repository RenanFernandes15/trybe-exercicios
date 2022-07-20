import { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  render() {

    const { pokemonInfo: { name, type, averageWeight: { value, measurementUnit }, image } } = this.props;

    return (
      <section className='pokemon'>
        <div id='imageCont'>
          <img src={image} alt={`Imagem do pokemon ${name}`} />
          <p id='name'><strong>{name}</strong></p>
        </div>
        <div id='infos'>
          <p>{type}</p>
          <p>{`Average weight: ${value} ${measurementUnit}`}</p>
        </div>
      </section>
    )
  }
}

export default Pokemon;