import React from 'react'
import FormHome from '../components/home/FormHome'
import WarningModal from '../components/home/WarningModal'
import '../styles/Home.css'

const Home = () => {


  return (
    <section className='pokedex'>
      <div className="modal-hero">
        <WarningModal />
      </div>
      <img className='pokedex__img' src="../Team-Rocket-Loader.png" alt="POKEDEX" />
      <header className="pokedex__header">
        <h2 className="pokedex__subtitle">Identify Yourself:</h2>
        <p className='pokedex__text'>Enter your trainer credentials to see the Pokedex</p>
      </header>
      <FormHome />
    </section>
  )
}

export default Home