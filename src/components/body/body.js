import React from 'react'
import './body.css'
import Contact from './contact/contact'
import Projects from './projects/project'
import Skills from './skills/skills'
import Work from './work/work'
import About from './about/about'
import Education from './education/education'
import Certification from './certificates/certificate'

function Body() {
    return (
        /*teremos 6 seçoes*/
        <div className='body'>
            <section id='about'>
                <About />
            </section>
            <section id='projects'>
                <Projects />
            </section>
            <section id='skills'>
                <Skills />
            </section>
            <section id='work'>
                <Work />
            </section>
            <section id='education'>
                <Education />
            </section>
            <section id='education'>
                <Certification />
            </section>
            <section id='contact'>
                <Contact />
            </section>
        </div>
    )
}

export default Body