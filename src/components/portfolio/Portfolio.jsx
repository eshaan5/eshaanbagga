import React from 'react'
import './portfolio.css'
import IMG from '../../assets/0.png'
import {data} from './portfolioArray'

const Portfolio = () => {
  console.log(data);
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {data.map((item) => (
          <article key={item.id} className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={item.img} alt="" />
          </div>
          <h3>{item.title}</h3>
          <div className="portfolio__item-links">
          <a href={item.github} className='btn' target='_blank'>GitHub</a>
          <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
          )
        )}
  
      </div>
    </section>
  )
}

export default Portfolio