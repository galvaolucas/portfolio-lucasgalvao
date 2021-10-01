import React from 'react'
import './education-card.css'

function EducationCard({item}) {
    return (
        <div className='education-card'>
            <div className='education-info'>
                <label className='education-description'>{item.description}</label>
                <div className='education-place'>
                    <label>{item.university}</label><label>{item.institution}</label>
                </div>
                <div className='education-dates'>
                    <label>{item.initial_date}</label> - <label>{item.final_date}</label>
                </div>
            </div>
        </div>
    )
}

export default EducationCard