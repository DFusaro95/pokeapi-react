import '../../styles/CardPoke.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CardPoke = ({ url }) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }

  return (
    <article className={`card-poke border-${pokemon?.types[0].type.name}`} onClick={handleClick}>
      <div className="pokecard__container">
      <header className={`card-poke__header bg-${pokemon?.types[0].type.name}`}>
        <img 
        className='card-poke__sprite' 
        src={pokemon?.sprites.other.home.front_default} 
        alt="POKEMON-IMAGE" 
        />
      </header>
      <section className='card-poke__body'>
        <div className="card-poke__title-container">
        <img className='card-poke__front' src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default} alt="POKEMON FRONT" />
        <h3 className={`card-poke__name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
        <img className='card-poke__back' src={pokemon?.sprites.versions["generation-v"]["black-white"].back_default} alt="POKEMON BACK" />
        </div>
        <ul className='card-poke__types-container'>
          {
            pokemon?.types.map(type => (
              <li 
              key={type.slot} 
              className='card-poke__type'
              >
                {type.type.name}
              </li>
            ))
          }
        </ul>
        <p className='card-poke__type-label'>Type</p>
      </section>
      <ul className="card-poke__stats-container">
        {
          pokemon?.stats.map(stat => (
            <li key={stat.name} className='card-poke__stat'>
              <span className='card-poke__stat-label'>{stat.stat.name}</span>
              <span className='card-poke__stat-number'>{stat.base_stat}</span>
            </li>
          ))
        }
      </ul>
      </div>
    </article>
  )
}

export default CardPoke