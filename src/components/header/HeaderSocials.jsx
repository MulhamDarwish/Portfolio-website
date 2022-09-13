import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><RiInstagramFill/></a>
    </div>
  )
}

export default HeaderSocials