import React from 'react'
import './portfolio.css'
import p1 from '..//..//assets/img1.png'
import p2 from '..//..//assets/img2.png'
import p3 from '..//..//assets/img3.jpg'
import p4 from '..//..//assets/img4.jpg'



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={p1} alt="" />            
          </div>
          <h3>building a sensors monitoring system using(kubernetes,prometheus,grafana)</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/scie-nz/alpaccess-prometheus" className='btn'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={p2} alt="" />            
          </div>
          <h3>building This website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/scie-nz/alpaccess-prometheus" className='btn'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={p3} alt="" />            
          </div>
          <h3>Designing a site plan with a lot of nature elements</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/scie-nz/alpaccess-prometheus" className='btn'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={p4} alt="" />            
          </div>
          <h3>Making introduction video to (ALPACCESS)</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/scie-nz/alpaccess-prometheus" className='btn'>Github</a>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default Portfolio