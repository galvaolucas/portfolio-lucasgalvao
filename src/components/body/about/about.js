import React from 'react'
import './about.css'
import SocialContact from '../../common/social-contact/index'

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                Olá, meu nome é 
                <br /> <span className='info-name'>Lucas!</span>
                <br /> I love experimenting with the web.
                </div>
                <div className='about-photo'>
                <img src = {require('../../../../src/assets/photocode.png').default } className='picture' alt='mypicture'/> 
                </div>
            </div>
            < SocialContact />
        </div>
        
    )
}
export default About