import React from 'react'
import './about.css'
import SocialContact from '../../common/social-contact/index'

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
            <div class="jumbotron">
            <h1 className="about-name">Olá, eu sou o Lucas!</h1>
            <p className="lead">Aqui nesse porftólio vocês podem encontrar um pouco do que já desenvolvi, e quais habilidades estou desenvolvendo no momento.</p>
            
            <p>Todo o código utilizado encontra-se no meu Github, acessem lá!</p>
            <p className="lead">
            <a className="btn btn-primary btn-lg" href="https://github.com/galvaolucas/portfolio-lucasgalvao" role="button">Ver no Github</a>
            </p>
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