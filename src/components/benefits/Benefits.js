import React from 'react'
import Call from '../assets/svg_icons/Call'
import BenefitsItem from './BenefitsItem'

const Benefits = () => {
    const benefits = [
        {
            title: 'Quality Guaranteed',
            para: 'Auto repair services done right the very fist time',
            icon: <Call className="icon" />,
        },
        {
            title: 'Low Price Guarantee',
            para: 'We provide customers the best pricing possible',
            icon: <Call className="icon" />,
        },
        {
            title: 'Quick Service Times',
            para: "We're opened from early morning till late evening",
            icon: <Call className="icon" />,
        },
        {
            title: 'Trained & Experts Mechanics',
            para: 'All our mechanics are trained and certified',
            icon: <Call className="icon" />,
        },
        {
            title: 'Quality Guaranteed',
            para: 'Auto repair services done right the very fist time',
            icon: <Call className="icon" />,
        },
        {
            title: 'Low Price Guarantee',
            para: 'We provide customers the best pricing possible',
            icon: <Call className="icon" />,
        },
    ]
    return (
        <div className="benefit-container">
            <div className="container">
                <div className="benefit-header">
                    <h1 className="benefit-title">Vision Security Benefits</h1>
                    <h2 className="benefit-para">
                        KTR Machinery always believe's in providing the best
                        service and benefits to our clients.
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
