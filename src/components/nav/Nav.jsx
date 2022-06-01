import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai'
import { FaProjectDiagram } from 'react-icons/fa'
import { FcTimeline } from 'react-icons/fc'
import { GiSkills } from 'react-icons/gi'

const Nav = () => {

  const [active, setActive] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome size={28} /></a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><AiOutlineUser size={28} /></a>
      <a href="#portfolio" onClick={() => setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''}><FaProjectDiagram size={28} /></a>
      <a href="#skills" onClick={() => setActive('#skills')} className={active === '#skills' ? 'active' : ''}><GiSkills size={28} /></a>
      {/* <a href="#linkedin" onClick={() => setActive('#linkedin')} className={active === '#linkedin' ? 'active' : ''}><FcTimeline size={28} /></a> */}
      <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><AiOutlinePhone size={28} /></a>
    </nav>
  )
}

export default Nav