import React from 'react'
import './services.css'
import {FiCheck} from 'react-icons/fi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
          </ul>
        </article>
  {/* END OF UI/UX */}
  <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
          </ul>
        </article>
  {/* END OF web */}
  <article className="service">
          <div className="service__head">
            <h3>Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
            <li>
              <FiCheck className="service__icon" />
              <p>1</p>
            </li>
          </ul>
        </article>
  {/* END OF des */}
      </div>
      
      </section>
  )
}

export default Services