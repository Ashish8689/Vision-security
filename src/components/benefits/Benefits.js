import React from 'react'
import Call from '../assets/svg_icons/Call'
import Price from '../assets/svg_icons/Price'
import Quality from '../assets/svg_icons/Quality'
import BenefitsItem from './BenefitsItem'
import Mechanics from '../assets/svg_icons/Mechanics'
import Time from '../assets/svg_icons/Time'
import Knowledge from '../assets/svg_icons/Knowledge'
import Maintenance from '../assets/svg_icons/Maintenance'

const Benefits = () => {
    const benefits = [
        {
            title: 'Quality Work Guaranteed',
            para: 'We provide a quality work to our customers',
            icon: <Quality className="icon" />,
        },
        {
            title: 'Low Price Guarantee',
            para: 'We provide customers the best pricing possible',
            icon: <Price className="icon" />,
        },
        {
            title: 'Quick Service Times',
            para: "We're opened from early morning till late evening",
            icon: <Time className="icon" />,
        },
        {
            title: 'Trained & Experts Employee',
            para: 'All our employee are well trained and certified',
            icon: <Mechanics className="icon" />,
        },
        {
            title: 'Industry Knowledge',
            para: 'The knowledge gained over a period of time helps us to deliver a better service.',
            icon: <Knowledge className="icon" />,
        },
        {
            title: 'Maintenance & Service',
            para: 'Apart from providing the products, we also provide AMC at a much affordable cost for the maintenance',
            icon: <Maintenance className="icon" />,
        },
    ]
    return (
        <div className="benefit-container">
            <div className="container">
                <div className="benefit-header">
                    <h1 className="benefit-title">Vision Security Benefits</h1>
                    <h2 className="benefit-para">
                        Vision Fire and Security System always believe's in
                        providing the best service and benefits to our clients.
                    </h2>
                </div>
                <div className="row mt-5">
                    {benefits.map((benefit, index) => (
                        <BenefitsItem key={index} data={benefit} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Benefits
