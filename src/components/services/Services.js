import React from 'react'
import { SERVICE_LIST } from '@/constants/service.constant'
import ServiceItem from './ServiceItem'
import Urgent from '../Urgent'

const Services = () => {
    return (
        <div className="service-section">
            <Urgent />
            <div className="container">
                <div className="service-container">
                    <div className="service-header-block">
                        <h1>What can we offer security</h1>
                    </div>
                    {SERVICE_LIST.map((service, index) => (
                        <ServiceItem key={index} data={service} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
