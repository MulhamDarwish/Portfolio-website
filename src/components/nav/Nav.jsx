import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiUserPin} from 'react-icons/bi'
import {BsBookmarkStarFill} from 'react-icons/bs'
import {MdOutlineWork} from 'react-icons/md'
import {MdPermContactCalendar} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserPin/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarkStarFill/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineWork/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdPermContactCalendar/></a>
    </nav>
  )
}

export default Nav