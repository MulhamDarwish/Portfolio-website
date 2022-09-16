import React from 'react'
import './footer.css' 
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href="#"className="footer__logo" >Mulham</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mulham-darwish-0ab8331b5/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/MulhamDarwish" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
        <a href="https://www.instagram.com/mulham_darwish/" target="_blank" rel="noreferrer"><RiInstagramFill/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MulhamDarwish. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer