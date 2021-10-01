import React from 'react'
import Separator from '../../common/separator'
import { CertificationsData } from '../../data/certificate'
import CertificationCard from './certificate-card';
import './certificate.css'

function Certification() {
    const data = CertificationsData;
    return (
        <div className='certification'>
            < Separator />
            <label className='section-title'> Certificates </label>
            <div className='certification-list'>
                {data.map((item)=>{
                    return (
                        <CertificationCard item={item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Certification