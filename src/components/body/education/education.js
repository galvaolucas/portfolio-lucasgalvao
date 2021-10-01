import React from 'react'
import Separator from '../../common/separator'
import { EducationData } from '../../data/education'
import EducationCard from './education-card';
import './education.css'

function Education() {
    const data = EducationData;
    return (
        <div className='education-title'>
            < Separator />
            <label className='section-title'> Education and Certifications </label>
            <div className='education-list'>
                {data.map((item)=>{
                    return (
                        <EducationCard item={item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Education
