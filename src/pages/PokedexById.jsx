import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import '../styles/PokedexById.css'

const PokedexById = () => {

  const {id} = useParams()
  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
        })
  }, [])

  if (hasError) {
    return <Pokemon404 />
  }
  console.log(pokemon)
  
  return (
    <article className={`pokeId__container background-${pokemon?.types[0].type.name}`}>
      <header className='pokeId-header__container'>

        <h2 className={`pokeId-header__name letter-${pokemon?.types[0].type.name}`}>
          <img className='pokeId-header__img-default' src={pokemon?.sprites.versions['generation-vii']["ultra-sun-ultra-moon"].front_default} alt="" />
          {pokemon?.name}
          <img className='pokeId-header__img-twisted' src={pokemon?.sprites.versions['generation-vii']["ultra-sun-ultra-moon"].front_default} alt="" />
        </h2>

        <img className='pokeId-header__img' src={pokemon?.sprites.other.home.front_default} alt="POKE-IMAGE" />
      </header>
{/*       <div className="stats__container">
        <h2 className={`stats-title leter-${pokemon?.types[0].type.name}`}>Stats</h2>
    
      </div> */}
      <div className='moves__container'>
        <h2 className={`moves-title letter-${pokemon?.types[0].type.name}`}>Movements</h2>
        <ul className="moves-list">
          {
            pokemon?.moves.map(move => (
              <li
              key={move.move.name}
              className={`pokemon__move letter-${pokemon?.types[0].type.name}`}
              >
                {move.move.name}
              </li>
            ))
          }
        </ul>
      </div>
    </article>
  )
}

export default PokedexById