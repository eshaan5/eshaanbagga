import React from 'react'
import './header.css'
import Links from './Links'
import Image from '../../assets/me.png'
import Socials from './Socials'
import { CgScrollV } from 'react-icons/cg'

const Header = () => {
  return (
    <header id='#'>
      <div className="container header__container">
        <h5>Hola! I'm</h5>
        <h1>Eshaan Bagga <div className='grow'>🙏</div></h1>
        <h5 className="text-light">Front-End Developer</h5>

        <Links />

        <Socials />

        <div className="me">
          <img src={Image} alt="Me" className='header__image'/>
        </div>

        <a href="#contact" className='scroll__down'><CgScrollV size={35} /></a>
        
      </div>
    </header>
  )
}

export default Header