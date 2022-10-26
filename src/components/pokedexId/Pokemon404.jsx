import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Pokemon404.css'

const Pokemon404 = () => {
  return (
    <div className='error'>
      <div className="error-card__container">
        <h1 className='error-card__title'> Error 404 </h1>
        <h2 className="error-card__subtitle">Pokemon Not Found</h2>
        <button className='error-card__btn'><Link className='error-card__link' to='/pokedex'>Return to Pokedex</Link></button>
      </div>
    </div>
  )
}

export default Pokemon404