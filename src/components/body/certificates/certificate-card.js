import React from 'react'
import './certificate-card.css'

function CertificationCard({item}) {
    return (
        <div className='certification-card'>
            <div className='certification-info'>
                <label className='certification-description'>{item.description}</label>
                <div className='certification-place'>
                    <label>{item.university}</label><label>{item.institution}</label>
                </div>
                <div className='certification-dates'>
                    <label>{item.initial_date}</label> - <label>{item.final_date}</label>
                </div>
                <div className='button-link'>
                <a className="btn btn-primary btn-lg" href={item.certificate} role="button">Ver Certificado</a>
                    <i class="fas fa-certificate"></i>
                </div>
            </div>
        </div>
    )
}

export default CertificationCard

