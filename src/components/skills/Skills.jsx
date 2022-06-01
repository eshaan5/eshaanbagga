import React from 'react'
import './skills.css'
import { ImHtmlFive2 } from 'react-icons/im'
import { SiCss3, SiJavascript, SiMaterialui } from 'react-icons/si'
import { FaBootstrap, FaReact } from 'react-icons/fa'

const Skills = () => {
  return (
    <section id="skills">
        <h5>What I Know</h5>
        <h2>Skills</h2>

        <div className="container skills__container">
            <div className="skills__frontend">
                <h3>Frontend Development</h3>
                <div className="skills__content">
                    <article className="skills__details">
                    <ImHtmlFive2 size={25} className='skills__details-icons' />
                    <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                    </article>
                    <article className="skills__details">
                    <SiCss3 size={25} className='skills__details-icons' />
                    <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                    </article>
                    <article className="skills__details">
                    <FaBootstrap size={25} className='skills__details-icons' />
                    <div>
                    <h4>BootStrap</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                    </article>
                    <article className="skills__details">
                    <SiJavascript size={25} className='skills__details-icons' />
                    <div>
                    <h4>JavaScript</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                    </article>
                    <article className="skills__details">
                    <FaReact size={25} className='skills__details-icons' />
                    <div>
                    <h4>React</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                    </article>
                    <article className="skills__details">
                    <SiMaterialui size={25} className='skills__details-icons' />
                    <div>
                    <h4>Material UI</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills