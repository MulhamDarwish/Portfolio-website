import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mulham Darwish</h1>
        <h5 className="text-light">Architect/Programmer</h5>
        <CTA />

        <div className="me">
          <img src="ME" alt="me" />
        </div>

        <a href="#contact" className='scro;;__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header