import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/ImputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import '../styles/Pokedex.css'


const Pokedex = () => {

  const [typeSelected, setTypeSelected] = useState('All Pokemons')
  const [pokemons, setPokemons] = useState()
  
  useEffect(() => {
    if (typeSelected !== 'All Pokemons'){
      // Si se selecciono un type
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result);
        })
        .catch(err => console.log(err))
    } else { 
      // Si quiero todos los pokemons
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0`
    axios.get(URL)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
    }
  }, [typeSelected])


  const userName = useSelector(state => state.userName)

  // ----- PAGINACION -----

  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(8)
  const firstPoke = (page - 1) * pokePerPage
  const lastPoke = page * pokePerPage


  return (
    <div className='pokedex-container'>
      <header className='pokedex__header'>
        <img className='pokedex-header__img' src="../Team-Rocket-Loader.png" alt="POKEDEX" />
        <p className='pokedex__instructions'>Welcome back <span className='pokedex__username'>{userName}</span>!! Here you can find all the Pokemons that we've captured till yesterday. You can sort'em by element or search'em by name..</p>
      </header>
      <aside className='pokedex__aside'>
        <InputSearch />
        <SelectByType setTypeSelected={setTypeSelected} setPage={setPage} />
        <Pagination 
        page={page} 
        pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
        setPage={setPage}/> 
      </aside>
      <main>
        <div className="card-container">
          {
            pokemons?.slice(firstPoke, lastPoke).map(pokemon => (
              <CardPoke 
              key={pokemon.url}
              url={pokemon.url}
              />
            ))
          }
        </div>
        <Pagination 
        page={page} 
        pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
        setPage={setPage}/> 
      </main>
    </div>
  )
}

export default Pokedex