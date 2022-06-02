import React from 'react'
import './footer.css'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { SiCodechef, SiLeetcode } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ESHAAN BAGGA</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#linkedin">LinkedIn Posts</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/eshaan-bagga/" target="_blank"><FaLinkedinIn size={28} /></a>
      <a href="https://www.instagram.com/_esh_tastic/" target="_blank"><FaInstagram size={28} /></a>
      <a href="https://twitter.com/Esh_tastic" target="_blank"><FiTwitter size={28} /></a>
      </div>

      <div className="footer__links">
      <a href="https://github.com/eshaan5" target="_blank"><AiFillGithub size={28} /></a>
      <a href="https://www.codechef.com/users/eshaan5" target="_blank"><SiCodechef size={28} /></a>
      <a href="https://leetcode.com/eshaanbagga/" target="_blank"><SiLeetcode size={28} /></a>
      </div>
    </footer>
  )
}

export default Footer