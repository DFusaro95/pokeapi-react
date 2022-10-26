
import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexById from './pages/PokedexById'
import ProtectedRoutes from './pages/ProtectedRoutes'
import './styles/App.css'

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState('light')
  const toogleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id={theme} className="App">
        <div className="app__btn-container">
          <h2 className="app__btn-title">
            {`Turn Lights ${theme === 'light' ? 'Off' : 'On'}`}
            <button onClick={toogleTheme} className='app__ld-btn'>
              <img className='ld-img' src="../Light-Dark.png" alt="" />
            </button>
          </h2>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<PokedexById />} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
