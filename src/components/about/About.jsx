import React from 'react'
import './About.css'
import ME from '../../assets/me1.jpeg'
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
              <BsFillAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className='about__card'>
              <FcDiploma1 className='about__icon'/>
              <h5>Diploma</h5>
              <small>Master Degree In Architecture</small>
            </article>
            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>9</small>
            </article>
          </div>

          <p>
            I’m a 29 located in Romania I have a Bachelors in Interior Design and a Master’s degree in Architecture 
            I always have a passion for programing and computers in general so 
            I’m trying to mix my experience to make something artistic and functional.
          </p>

          <a href="#conteact" className='btn btn-primary'>Let't Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About