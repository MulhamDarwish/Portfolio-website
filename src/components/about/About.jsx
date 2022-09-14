import React from 'react'
import './About.css'
import ME from '../../assets/LOGO.png'
import {BsFillAwardFill} from 'react-icons/bs'
import {FcDiploma1} from 'react-icons/fc'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsFillAwardFill className='about__card'/>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className='about__card'>
              <FcDiploma1 className='about__card'/>
              <h5>Diploma</h5>
              <small>Master Degree In Architecture</small>
            </article>
            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__card'/>
              <h5>Projects</h5>
              <small>9</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati eum, vitae facilis doloribus esse error.
            Consequuntur explicabo facere, sit unde inventore nihil 
            eligendi magnam sequi consectetur modi accusamus laborum?
          </p>

          <a href="#conteact" className='btn'>Let't Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About