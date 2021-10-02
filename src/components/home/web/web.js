import React from 'react'
import './web.css'
import certificate from './../../../assets/icones/certificate.png'
import book from './../../../assets/icones/books.png'
import work from './../../../assets/icones/work.png'
import skills from './../../../assets/icones/skills.png'
import project from './../../../assets/icones/project.png'

function Web() {
    return (
        <div className='web'> 
            <div className='web-option'>
                <a href='#project'>
                <img src={project} alt='certificate-logo'/>Projects
                </a>
            </div>
            <div className='web-option'>
                <a href='#skills'>
                <img src={skills} alt='certificate-logo'/>Skills
                </a>
            </div>
            <div className='web-option'>
                <a href='#work'>
                <img src={work} alt='certificate-logo'/>Work
                </a>
            </div>
            <div className='web-option'>
                <a href='#education'>
                <img src={book} alt='certificate-logo'/>Education
                </a>
            </div>
            <div className='web-option'>
                <a href='#certification'>
                <img src={certificate} alt='certificate-logo'/>Certificates
                </a>
            </div>
            <div className='web-option'>
                <a href='#contact'>
                <i class="fi-rr-mode-portrait option-icon"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web