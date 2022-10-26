import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/ImputSearch.css'

const ImputSearch = () => {

  const navigate = useNavigate()

  const submit = e =>{
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }

  return (
    <form onSubmit={submit} className='form__container'>
      <input id='search' type="text" placeholder='Search Pokemon..' className='input__search'/>
      <button className='input__btn'><img src="../../RTpokeballBW.png" alt="" className='input__img'/></button>
    </form>
  )
}

export default ImputSearch