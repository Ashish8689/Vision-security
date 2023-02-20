import React from 'react'

const QuickServiceBlock = ({ data: { title, icon, description, count } }) => {
    return (
        <div className="quick-service-block">
            <div className="quick-service-block-header">
                <div className="service-icon-container">
                    <img src={icon} alt={title} className="icon" />
                </div>
                <h3 className="quick-service-count">{count}</h3>
            </div>

            <div className="service-content">
                <h2 className="service-title">{title}</h2>
                <p className="service-description">{description}</p>
            </div>
        </div>
    )
}

export default QuickServiceBlock
