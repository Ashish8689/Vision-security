import React from 'react'
import Call from '../assets/svg_icons/Call'
import Check from '../assets/svg_icons/Check'

const ServiceItem = ({ data: { icon, title, description, link } }) => {
    return (
        <div className="service-block">
            <div className="service-icon-container">{icon}</div>

            <div className="service-content">
                <h1 className="service-title">{title}</h1>
                <p className="service-description">{description}</p>

                <div className="service-button">
                    <a href="#">
                        <Check className="icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem
