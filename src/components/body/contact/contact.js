import React from 'react'
import SocialContact from '../../common/social-contact'
import Separator from '../../common/separator'
import './contact.css'

function Contact() {
    return (
        <div className='contact'>
            < Separator />
            <label className='section-title'> Contact </label>
            <div className = 'contact-container'>
                <div className='contact-left'>
                    <p> Want to get in touch? Contact me on any of the following platforms: </p>
                    <SocialContact />
                </div>
                <div className='download'>
                    <a download href= {require('../../../../src/assets/curriculo/resume.pdf').default}>
                    <i class="fi-rr-download download-icon"></i>
                        Veja meu currículo aqui!
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact