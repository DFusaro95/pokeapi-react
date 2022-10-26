import React, { useState } from 'react'
import {TbPokeball} from 'react-icons/tb'
import {AiTwotoneAlert} from 'react-icons/ai'

import '../../styles/WarningModal.css'

const WarningModal = () => {

  const [warningIsClose, setWarningIsClose] = useState(false)

  const handleClose = () => {
    setWarningIsClose(true)
  }

  return (
    <section className={`modal-box ${warningIsClose && 'modal__disable'}`}>
      <div className="modal-hero">
        <article className='modal-container'>
          <header className="modal-header">
            <h2 className="modal-header__title"><AiTwotoneAlert/>¡¡WARNING TRAINER!!<AiTwotoneAlert/></h2>
            <button onClick={handleClose} className="modal-header__btn-close"><TbPokeball /></button>
          </header>
          <div className="modal-description__container">
            <p className="modal-description">
              Before you start this <span className="modal-description__span">operation</span> you should know that you are about to exceed the <span className="modal-description__span">enemy frontier</span>.. We've managed to crack the security of <span className="modal-description__span">Rocket Team's Headquarters</span> by a sofisticated XXS + SQLI method that our developers tested for almost one year for this day to come. This complex security crack grant us the access to the <span className="modal-description__span">Enemy's Pokedex</span> to see what pokemons they have captured until yesterday. You will have the power to navigate through all the cards that contain the information of the pokemons (names, types, stats), calculate the quantity of the pokemons that they have, see how they look like and much more.. You'll navigate in the shadows, but, you should know that, from now, <span className="modal-description__span">you will be alone in enemy's territory.</span> We hope that you understand the importance of this operation and we wish you well. We'll meet you again in our headquarter when you have obtained all the information required. <span className="modal-description__span">Be extremely careful Trainer.</span> Over and Out.
            </p>
          </div>
          <button onClick={handleClose} className='modal__btn-close'>OKAY!!</button>
        </article>
      </div>
    </section>
  )
}

export default WarningModal